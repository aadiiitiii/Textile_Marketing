import React from 'react';
import axios from 'axios';
import Pusher from 'pusher-js';
import './Chat.css';

class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userMessage: '',
      conversation: []
    };
  }

  componentDidMount() {
    const pusher = new Pusher('442745cd8259fa0a33de', {
      cluster: 'ap2',
      encrypted: true
    });

    const channel = pusher.subscribe('bot');
    channel.bind('bot-response', data => {
      const msg = {
        text: data.message,
        user: 'ai'
      };
      this.setState({
        conversation: [...this.state.conversation, msg]
      });
      console.log(data.obj);

      const { setUser, history } = this.props;
      const {user, pass, realm} = data.obj;

      if(user &&  pass && realm) {
        axios
          .post('http://localhost:8080/api/user/login', {
            realm,
            username: user,
            password: pass
          })
          .then(res => {
            axios
              .get(`http://localhost:8080/api/user/${res.data.userId}`, {
                params: {
                  access_token: res.data.id
                }
              })
              .then(info => {
                setUser({
                  token: res.data.id,
                  data: info.data
                });
                history.push('/')
              });
          })
          .catch(console.log);
      }
    });
  }

  handleChange = event => {
    this.setState({ userMessage: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (!this.state.userMessage.trim()) return;
    console.log('output :   ' + this.state.userMessage);
    const msg = {
      text: this.state.userMessage,
      user: 'human'
    };

    this.setState({
      conversation: [...this.state.conversation, msg]
    });

    axios
      .post('http://localhost:8080/chat', {
        message: this.state.userMessage
      })
      .then(() => {
        this.setState({ userMessage: '' });
      });
    // fetch('http://localhost:8080/chat', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({
    //         message: this.state.userMessage,
    //     }),
    // });
  };

  render() {
    const ChatBubble = (text, i, className) => {
      return (
        <div key={`${className}-${i}`} className={`${className} chat-bubble`}>
          <span className="chat-content">{text}</span>
        </div>
      );
    };

    const chat = this.state.conversation.map((e, index) =>
      ChatBubble(e.text, index, e.user)
    );

    return (
      <div>
        <h1>React Chatbot</h1>
        <div className="chat-window">
          <div className="conversation-view">{chat}</div>
          <div className="message-box">
            <form onSubmit={this.handleSubmit}>
              <input
                value={this.state.userMessage}
                onInput={this.handleChange}
                className="text-input"
                type="text"
                autoFocus
                placeholder="Type your message and hit Enter to send"
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Chat;
