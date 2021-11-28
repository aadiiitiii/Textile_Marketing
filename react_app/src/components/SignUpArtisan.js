import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import withStyles from '@material-ui/core/styles/withStyles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

// import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state/index';
import {
  RadioGroup,
  Radio,
  FormLabel,
  TextField,
  FormGroup
} from '@material-ui/core';

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block',
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      height: 'auto',
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
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
  }
});
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};
const namesArray = [
  'Sujani',
  'Kashida',
  'Phulkari',
  'Chamba Rumal',
  'Embroidery from Gujarat',
  'Parsi Embroidery',
  'Chikankari',
  'Phool patti ka kaam',
  'Zardozi',
  'Kasuti',
  'Lambadi Embroidery',
  'Kantha',
  'Pipli applique'
];
const dyedArray = [
  'Bandhani',
  'Bandhej and Lehriya',
  'Patola',
  'Bandhas',
  'Telia Rumal',
  'Pochampalli ikats'
];
const printedArray = ['Bagru prints', 'Sanganer prints', 'Kalamkari'];
const handWovenArray = [
  'Banaras brocades',
  'Baluchari Saris',
  'Jamdani Saris',
  'Kanjeevaram saris',
  'Paithani saris',
  'Chanderi saris',
  'Maheshwari Saris',
  'Kashmir shawls',
  'Kullu & Kinnaur shawls',
  'Wraps of northeast',
  'Durries & rugs',
  'Carpets'
];

// eslint-disable-next-line react/prefer-stateless-function
class SignUpArtisan extends React.Component {
  constructor(props) {
    super(props);
    this.state = { embroidered: [], dyed: [], printed: [], handWoven: [] };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = event => {
    this.setState({ embroidered: event.target.value });
  };

  handleChange1 = event => {
    this.setState({ dyed: event.target.value });
  };

  handleChange2 = event => {
    this.setState({ printed: event.target.value });
  };

  handleChange3 = event => {
    this.setState({ handWoven: event.target.value });
  };

  handleOnChange(event) {
    const { user } = this.state;
    const obj = user ? { ...user } : {};
    obj[event.target.id] = event.target.value;
    this.setState({ user: obj });
  }

  handleOnSubmit(event) {
    event.preventDefault();
    console.log('register');

    const { user, embroidered, dyed, printed, handWoven } = this.state;
    const { username, password, email, ...profile } = user;
    const { history } = this.props;
    axios
      .post('http://localhost:8080/api/profiles', {
        realm: 'artisan',
        embroidered,
        dyed,
        printed,
        handWoven,
        email,
        ...profile
      })
      .then(resProfile => {
        if (resProfile.status === 200) {
          axios
            .post('http://localhost:8080/api/user', {
              realm: 'artisan',
              username,
              password,
              email,
              profileId: resProfile.data.id
            })
            .then(resUser => {
              if (resUser.status === 200) {
                history.push('/');
              } else console.log(resUser);
            });
        } else {
          console.log(resProfile);
        }
      })
      .catch(console.log);
  }

  render() {
    const { classes } = this.props;
    const { embroidered, dyed, printed, handWoven} = this.state;

    return (
      <main className={classes.main}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h5">
            Sign Up for Artisan!
          </Typography>
          <form style={{ padding: '0px' }}>
            <TextField
              id="name"
              label="Artisan Name"
              variant="outlined"
              autofocus="true"
              margin="normal"
              className={classes.textField}
              onChange={this.handleOnChange}
            />
            <TextField
              id="company-name"
              label="Company Name"
              variant="outlined"
              autofocus="true"
              margin="normal"
              className={classes.textField}
              onChange={this.handleOnChange}
            />
            <TextField
              id="username"
              label="User Name"
              variant="outlined"
              autofocus="true"
              margin="normal"
              className={classes.textField}
              onChange={this.handleOnChange}
            />
            <TextField
              id="password"
              label="Password"
              variant="outlined"
              type="password"
              autofocus="true"
              margin="normal"
              className={classes.textField}
              onChange={this.handleOnChange}
            />
            <TextField
              id="email"
              label="Email"
              variant="outlined"
              autofocus="true"
              margin="normal"
              className={classes.textField}
              onChange={this.handleOnChange}
            />
             <TextField
              id="gst-number"
              label="GST Number"
              variant="outlined"
              autofocus="true"
              margin="normal"
              className={classes.textField}
              onChange={this.handleOnChange}
            />
            <TextField
              id="mobile-number"
              label="Mobile Number"
              variant="outlined"
              autofocus="true"
              margin="normal"
              className={classes.textField}
              onChange={this.handleOnChange}
            />
            <TextField
              id="shope-phone-number"
              label="Company Phone Number"
              variant="outlined"
              autofocus="true"
              margin="normal"
              className={classes.textField}
              onChange={this.handleOnChange}
            />
            <TextField
              id="website-url"
              label="Company Website URL"
              variant="outlined"
              autofocus="true"
              margin="normal"
              className={classes.textField}
              onChange={this.handleOnChange}
            />
            <TextField
              id="address"
              label="Address"
              multiline
              variant="outlined"
              autofocus="true"
              margin="normal"
              className={classes.textField}
              onChange={this.handleOnChange}
            />
            <TextField
              id="city"
              label="City"
              variant="outlined"
              autofocus="true"
              margin="normal"
              className={classes.textField}
              onChange={this.handleOnChange}
            />
            <TextField
              id="state"
              label="State"
              isRequired="true"
              variant="outlined"
              autofocus="true"
              margin="normal"
              className={classes.textField}
              onChange={this.handleOnChange}
            />
            <TextField
              id="zipcode"
              label="Pin Code"
              variant="outlined"
              autofocus="true"
              margin="normal"
              className={classes.textField}
              onChange={this.handleOnChange}
            />
            <div>
              <FormControl>
                <FormLabel>Sector</FormLabel>
                <RadioGroup style={{ flexDirection: 'row' }}>
                  <FormControlLabel
                    value="government"
                    control={<Radio id="sector" />}
                    label="Government"
                    onChange={this.handleOnChange}
                  />
                  <FormControlLabel
                    value="private"
                    control={<Radio id="sector" />}
                    label="Private"
                    onChange={this.handleOnChange}
                  />
                  <FormControlLabel
                    value="public"
                    control={<Radio id="sector" />}
                    label="Public"
                    onChange={this.handleOnChange}
                  />
                </RadioGroup>
              </FormControl>
            </div>

            <Typography variant="subheading" component="body1" align="center">
              Choose your Skill Sets
            </Typography>
            <FormGroup>
              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="select-multiple">
                  Embroidered Textile
                </InputLabel>
                <Select
                  multiple
                  value={embroidered}
                  onChange={this.handleChange}
                  input={<Input id="select-multiple" />}
                  MenuProps={MenuProps}
                >
                  {namesArray.map(name => (
                    <MenuItem key={name} value={name}>
                      {name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="select-multiple">Dyed Textile</InputLabel>
                <Select
                  multiple
                  value={dyed}
                  onChange={this.handleChange1}
                  input={<Input id="select-multiple" />}
                  MenuProps={MenuProps}
                >
                  {dyedArray.map(name => (
                    <MenuItem key={name} value={name}>
                      {name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="select-multiple">
                  Printed Textile
                </InputLabel>
                <Select
                  multiple
                  value={printed}
                  onChange={this.handleChange2}
                  input={<Input id="select-multiple" />}
                  MenuProps={MenuProps}
                >
                  {printedArray.map(name => (
                    <MenuItem key={name} value={name}>
                      {name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="select-multiple">
                  Hand Woven Textile
                </InputLabel>
                <Select
                  multiple
                  value={handWoven}
                  onChange={this.handleChange3}
                  input={<Input id="select-multiple" />}
                  MenuProps={MenuProps}
                >
                  {handWovenArray.map(name => (
                    <MenuItem key={name} value={name}>
                      {name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </FormGroup>
            <br />
            <Button
              variant="contained"
              color="primary"
              style={{ backgroundColor: '#212121' }}
              onClick={this.handleOnSubmit}
            >
              REGISTER
            </Button>
          </form>
        </Paper>
      </main>
    );
  }
}
SignUpArtisan.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SignUpArtisan);
