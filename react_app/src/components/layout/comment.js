import React, { Component } from 'react';
import axios from 'axios';
import { Typography } from '@material-ui/core';

const commentdata = [
  {
    id: '5c7ad33f37fd18246827f265'
  },
  {
    id: '5c7ad33f37fd18246827f266'
  },
  {
    id: '5c7ad33f37fd18246827f267'
  },
  {
    id: '5c7ad33f37fd18246827f268'
  },
  {
    id: '5c7ad33f37fd18246827f269'
  },
  {
    id: '5c7ad33f37fd18246827f26a'
  },
  {
    id: '5c7ad33f37fd18246827f26b'
  },
  {
    id: '5c7ad33f37fd18246827f26c'
  },
  {
    id: '5c7ad33f37fd18246827f26d'
  },
  {
    id: '5c7ad33f37fd18246827f26e'
  },
  {
    id: '5c7ad33f37fd18246827f26f'
  },
  {
    id: '5c7ad33f37fd18246827f270'
  },
  {
    id: '5c7ad33f37fd18246827f271'
  },
  {
    id: '5c7ad33f37fd18246827f272'
  },
  {
    id: '5c7ad33f37fd18246827f273'
  },
  {
    id: '5c7ad33f37fd18246827f274'
  },
  {
    id: '5c7ad33f37fd18246827f275'
  },
  {
    id: '5c7ad34937fd18246827f276'
  },
  {
    id: '5c7ad34937fd18246827f277'
  },
  {
    id: '5c7ad34937fd18246827f278'
  },
  {
    id: '5c7ad34937fd18246827f279'
  },
  {
    id: '5c7ad34937fd18246827f27a'
  },
  {
    id: '5c7ad34937fd18246827f27b'
  },
  {
    id: '5c7ad34937fd18246827f27c'
  },
  {
    id: '5c7ad34937fd18246827f27d'
  },
  {
    id: '5c7ad34937fd18246827f27e'
  },
  {
    id: '5c7ad34937fd18246827f27f'
  },
  {
    id: '5c7ad34937fd18246827f280'
  },
  {
    id: '5c7ad34937fd18246827f281'
  },
  {
    id: '5c7ad34937fd18246827f282'
  },
  {
    id: '5c7ad34937fd18246827f283'
  },
  {
    id: '5c7ad34937fd18246827f284'
  },
  {
    id: '5c7ad34937fd18246827f285'
  },
  {
    id: '5c7ad34937fd18246827f286'
  }
];

// eslint-disable-next-line react/prefer-stateless-function
class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jsondata: []
    };
  }

  componentDidMount() {
    commentdata.map(val => {
      axios
        .get(`http://localhost:8080/api/comments/${val.id}`, {})
        .then(res => {
          // on success
          const joined = this.state.jsondata.concat(res.data);
          this.setState({ jsondata: joined });

          // console.log(this.state.jsondata);
        });
    });
    
  }

 
  render() {
    const { jsondata } = this.state;
    console.log(jsondata);
    return (
      jsondata.map((val)=>(
        <div style={{marginLeft:'30vw',width:'auto'}}>
        <Typography variant="h5" align="center">
          Username
        </Typography>
        <Typography variant="h6" align="center">
          User comment
        </Typography>
        </div>
      ))
     
    );
  }
}

export default Comment;
