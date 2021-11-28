import React from 'react';
import { ChatManager, TokenProvider } from '@pusher/chatkit-client'
import { Paper, Typography } from '@material-ui/core';
// import './style.css'

/** Replace these with your own API keys, username and roomId from Chatkit  */
const testToken = "https://us1.pusherplatform.io/services/chatkit_token_provider/v1/1f64acfa-b08e-4be8-b266-459809d5b56d/token"
const instanceLocator = "v1:us1:1f64acfa-b08e-4be8-b266-459809d5b56d"
const roomId = '19410096'
const username = 'shivaji'
// const messages=[]
class Userchat extends React.Component {
    constructor() {
        super()
        this.state = {
            messages: [],
            currentUser:{}
        }
        this.sendMessage = this.sendMessage.bind(this)
    }

    componentDidMount() {
        console.log("loading")
        const chatManager = new ChatManager({
            instanceLocator: instanceLocator,
            userId: 'deepak',
            tokenProvider: new TokenProvider({
                url: testToken
            })
        })
        console.log("loading")
        chatManager.connect()
            .then(currentUser => {
                this.state.currentUser = currentUser
                this.state.currentUser.subscribeToRoom({
                    roomId: roomId,
                    hooks: {
                        onMessage: message => {
                            this.setState({
                                messages: [...this.state.messages, message]
                            })
                        }
                    }
                })
            }).then(()=>{
                this.state.currentUser.fetchMessages({
                    roomId: roomId,
                    initialId: 0
                }).then(messages => {
                    console.log(messages)
                    this.state.messages = messages
                }).catch(err => {
                    console.log(`Error fetching messages: ${err}`)
                })
            })
        
    }

    sendMessage(text) {
        this.state.currentUser.sendMessage({
            text,
            roomId: roomId
        })
    }

    render() {
        return (
            <div className="app">
                <Title />
                <MessageList
                    roomId={this.state.roomId}
                    messages={this.state.messages} />
                <SendMessageForm
                    sendMessage={this.sendMessage}
                    messages={this.state.messages} />
            </div>
        );
    }
}

class MessageList extends React.Component {
    render() {
        // console.log(this.props.messages)
        return (
            <Paper className="message-list">
                {
                    
                    this.props.messages.map((message, index) => {
                    return (
                        // <li key={message.id}>
                        //     <div>{message.senderId}</div>
                        //     <div>{message.text}</div>
                        // </li>

                        <Typography variant="h4" align="left" style={{marginLeft: '5rem'}}>{message.senderId} : {message.text}</Typography>
                    )
                })}
            </Paper>
        )
    }
}

class SendMessageForm extends React.Component {
    constructor() {
        super()
        this.state = {
            message: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        this.setState({
            message: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        // console.log(this.state.message)
        // console.log(this.props.messages)
        this.props.sendMessage(this.state.message)
        // this.props.messages.append(this.state.message)
        this.setState({
            messages: [...this.props.messages, this.state.message]
        })
        this.setState({
            message: ''
        })
    }

    render() {
        return (
            <form
                onSubmit={this.handleSubmit}
                className="send-message-form">
                <input
                    onChange={this.handleChange}
                    value={this.state.message}
                    placeholder="Type your message and hit ENTER"
                    type="text" />
            </form>
        )
    }
}

function Title() {
    return <p className="title">My awesome chat app</p>
}

export default Userchat;