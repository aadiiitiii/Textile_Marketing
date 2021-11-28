/* eslint-disable react/no-unused-state */
import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';
import {
  FormGroup,
  Paper,
  TextField,
  MenuItem,
  Select
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ReactFileReader from 'react-file-reader';

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block',
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      height: 'auto',
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: '80px'
    }
  },
  paper: {
    marginTop: theme.spacing.unit * 12,
    width: '150%',
    height: 'auto',
    marginLeft: '-20%',
    display: 'flex',
    flexDirection: 'column',
    // alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`
  },
  textField: {
    width: '100%',
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120
  },

  button: {
    width: '15%',
    padding: '-10px',
    marginTop: '50px',
    marginLeft: '180px'
  }
});

class AddType extends React.Component {
  constructor(props) {
    super(props);
    // eslint-disable-next-line react/destructuring-assignment
    const { item } = this.props.location.state;
    this.state = {
      userMsg: [],
      specMsg: [],
      visible: true,
      type: item,
      subtype: '',
      obj: {},
      fixed_obj: {},
      id: '',
      pictures: [],
      files: [],
      field_keys: [],
     

    }

    this.handleChange = this.handleChange.bind(this);
    this.handleVisible = this.handleVisible.bind(this);
    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.onDrop = this.onDrop.bind(this);
    this.handleFiles = this.handleFiles.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {

    const data = {}

    data["profileId"] = this.state.type
    data["type"] = this.state.type
    data["sub_type"] = this.state.subtype
    data["spec_data"] = {}
    this.state.field_keys.map((key) => {
      data["spec_data"][key] = this.state.obj[key]
    })
    const dat = Object.keys(this.state.fixed_obj);
    dat.map((key) => {
      data[key] = this.state.fixed_obj[key]
    })
    data["images"] = this.state.files.base64

    console.log(data)


    axios.post(`http://localhost:8080/api/products`, data)
      .then(res => {
        console.log(res);
        console.log(res.data);
      }).catch((error) => {
        console.log(error);
      })
  }

  handleFiles(images) {
    console.log(images)
    this.setState({ files: images })
  }

  

  onDrop(picture) {
    this.setState({
      // eslint-disable-next-line react/no-unused-state
      pictures: picture
    });
  }

  handleClose = () => {
    // eslint-disable-next-line react/no-unused-state
    this.setState({ open: false });
  };

  handleOpen = () => {
    // eslint-disable-next-line react/no-unused-state
    this.setState({ open: true });
  };

  handleChange(event) {
    const ob = this.state.obj;
    ob[event.target.id] = event.target.value;

    // eslint-disable-next-line no-console
    console.log(`${event.target.id}:${event.target.value}`);
    this.setState({ obj: ob });
    const dat = Object.keys(ob)
    this.setState({ field_keys: dat })
    console.log(dat)
    // event.target.setAttribute("Value",event.target.value);
  }

  handleChange1(event) {
    const { obj: ob } = this.state;
    ob[event.target.name] = event.target.value;
    // this.setState({val:event.target.value})
    console.log(ob[event.target.name]);
    // eslint-disable-next-line no-console
    console.log(`${event.target.name}:${event.target.value}`);

    this.setState({ obj: ob });

  }

  handleChange2(event) {
    const ob = this.state.fixed_obj;
    ob[event.target.id] = event.target.value;

    // eslint-disable-next-line no-console
    console.log(`${event.target.id}:${event.target.value}`);
    this.setState({ fixed_obj: ob });



    // event.target.setAttribute("Value",event.target.value);
  }


  componentDidMount() {

    const { item } = this.props.location.state
    this.setState({ type: item })

    if (item == "cotton") {
      axios.get("http://localhost:8080/api/categories?filter=%7B%22where%22%20%3A%20%7B%20%22type%22%3A%22Cotton%22%7D%7D", {}).then((res) => {
        //on success

        this.setState({
          userMsg: res.data

        });

      })
    }
    else if (item == "jute") {
      axios.get("http://localhost:8080/api/categories?filter=%7B%22where%22%20%3A%20%7B%20%22type%22%3A%22Jute%22%7D%7D", {}).then((res) => {
        //on success

        this.setState({
          userMsg: res.data

        });

      })
    }
    else if (item == "handicraft") {
      axios.get("http://localhost:8080/api/categories?filter=%7B%22where%22%20%3A%20%7B%20%22type%22%3A%22Handicraft%22%7D%7D", {}).then((res) => {
        //on success

        this.setState({
          userMsg: res.data

        });
      });
    }
    else if (item == "nylon") {
      axios.get("http://localhost:8080/api/categories?filter=%7B%22where%22%3A%7B%22type%22%20%3A%20%22Nylon%22%7D%7D", {}).then((res) => {
        //on success

        this.setState({
          userMsg: res.data

        });
      });
    }
    else if (item == "silk") {
      axios.get("http://localhost:8080/api/categories?filter=%7B%22where%22%3A%7B%22type%22%20%3A%20%22Silk%22%7D%7D", {}).then((res) => {
        //on success

        this.setState({
          userMsg: res.data

        });
      });
    }
    else if(item=="wool")
    {

      axios.get("http://localhost:8080/api/categories?filter=%7B%22where%22%3A%7B%22type%22%3A%22Wool%22%7D%7D", {}).then((res) => {
        //on success

        this.setState({
          userMsg: res.data

        });
      });

    }



   
  }

  handleVisible(val, specid,profile) {
    axios
      .get(`http://localhost:8080/api/specifications/${specid}`, {})
      .then(res => {
        // on success
        this.setState({
          specMsg: res.data._spectemplate,
          visible: false,
          subtype: val,
          name: '',
          id: specid,
          open: '',
        
          
        });
        // console.log(res);
        // console.log( res.data._spectemplate[0]._flags.fields);
      });
  }

  render() {
    const { classes,user } = this.props;
    const { specMsg, visible, type, userMsg, subtype, obj } = this.state;
    
    return (
      <main className={classes.main} >
        
        

        {
          this.state.visible ? <div>
            <Typography component="h1" variant="h5">
              Choose the type of  {this.state.type} you want to add
         </Typography>
            
            {this.state.userMsg.map((msg) => (
              
              msg.sub_type!=="" ? 
              <Button variant="contained"


                onClick={() => this.handleVisible(msg.sub_type, msg.specificationId)}

                color="primary"
                style={{ marginTop: '20px', marginRight: '30px' ,backgroundColor: '#212121'}}>{msg.sub_type} </Button>
              :
              <div>
                {this.handleVisible(msg.type,msg.specificationId)}
                </div>
              

            ))}
          </div> :
            <Paper className={classes.paper}>
              <Typography variant="h4">
                Fill details for {this.state.subtype}
              </Typography>
              <form style={{ padding: '0px' }}>
                <TextField
                  id="name"
                  label="Product Name"
                  className={classes.textField}
                  onChange={this.handleChange2}
                  name="name"
                  autofocus
                  margin="normal"
                  variant="outlined"
                />
                <TextField
                  id="description"
                  label="Product Description"
                  className={classes.textField}
                  onChange={this.handleChange2}
                  name="description"
                  autofocus
                  margin="normal"
                  variant="outlined"
                />
                {specMsg.map((msg) => {

                  let res = msg._flags.fields ?


                    <FormGroup row="true" style={{ marginTop: '10px' }} >
                      <Typography>
                        {msg.name}
                      </Typography>
                      <Select
                        style={{ width: '700px' }}
                        autoFocus
                        value={this.state.obj[msg.name]}
                        id={msg.name}
                        onChange={this.handleChange1}
                        name={msg.name}
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        {msg._specsinfo.fields.map((val) => {
                          return <MenuItem value={val}>{val}</MenuItem>
                        })}
                      </Select>
                    </FormGroup>



                    :

                    <TextField

                      id={msg.name}
                      label={msg.name}
                      className={classes.textField}
                      onChange={this.handleChange}
                      name={msg.name}
                      autoFocus
                      margin="normal"
                      variant="outlined"

                    />
                  return res


                })}

                <TextField
                  id="copyright"
                  label="Content Id(Copyright)"
                  className={classes.textField}
                  onChange={this.handleChange3}
                  name="copyright"
                  autofocus
                  margin="normal"
                  variant="outlined"
                />

                <a target="_blank" href='http://copyright.gov.in/UserRegistration/frmLoginPage.aspx'>Please click here to register for copyrights of your product</a>


                {/* <ReactFileReader base64={true}  handleFiles={this.handleFiles}>
                  <Button style={{marginTop:'10px',backgroundColor: '#212121'}}  variant="contained" color="primary">Upload Image</Button>
                </ReactFileReader> */}
                  <br/>
                <Button
                  style={{marginTop:'10px',backgroundColor: '#212121'}}
                  variant="contained"
                  className={classes.formcontrol}
                  color="secondary"
                  onClick={this.handleClick}
                >
                  SUBMIT
          </Button>




              </form>
            </Paper>
        }









      </main >
    );
  }
}

AddType.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AddType);
