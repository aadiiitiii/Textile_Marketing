import React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
    '@global': {
        body: {
            backgroundColor: theme.palette.common.white,
        },
    },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(900 + theme.spacing.unit * 3 * 2)]: {
        width: 900,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    paper: {
      marginTop: theme.spacing.unit * 8,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
        .spacing.unit * 3}px`
    },
},
});

class FaqsBuyer extends React.Component {
  static propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    history: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
    this.reRoute = this.reRoute.bind(this);
  }

  reRoute(path) {
    const { history } = this.props;
    history.push(path);
  }

  render() {
    const { classes } = this.props;

    return (
      <main>
        <CssBaseline />
        <div className={classes.form} style={{ margin: '5vw'}}>
        <Typography component="h1" variant="h4">   <br/>       
            FAQs for Buyers!
        </Typography>
        <Typography variant="h5" align="justify">      
            <br/>
            Q. How to create an Account on the web portal?
        </Typography>
        <Typography variant="subtitle2" align="justify">
           A. In order to register for free please follow the steps given: <br/>
           1. Click on Login button on header. <br/>
	         2. Click on “Not a member yet?” <br/>
	         3. A new page will open wherein you will have to fill all the information like Email id, Name of the buyer, contact details. <br/>
	         4. Click on ‘Sign up’ to create your profile. <br/>
	         5. Now you can access your account to Search for products and view the sellers, Review them and Delete the Products. <br/>
           <br/>
        </Typography>
        <hr/>
        <Typography variant="h5" align="justify">     <br/> 
        Q. What benefits do I get after becoming a member?
        </Typography>
        <Typography variant="subtitle2" align="justify">
        A. After becoming a member you can View the products along with the sellers information, Rate and Review the previous purchases and can get a personalised recommendation based on the history. <br/>
        <br/>
        </Typography>
        <hr/>
        <Typography variant="h5" align="justify">     <br/> 
        Q. Do I need to Signup to view the contact details of the Sellers?
        </Typography>
        <Typography variant="subtitle2" align="justify">
        A. To maintain privacy, you must Signup to get to know the details of the Products, and the contact details of the Seller.<br/>
        <br/>
        </Typography>
        <hr/>
        <Typography variant="h5" align="justify">    <br/>  
        Q. I forgot my password, what should I do?
        </Typography>
        <Typography variant="subtitle2" align="justify">
        A. If you forgot your password, click on Login button, below you will see 2 links. On it click on “Forgot Password?” . It will redirect you to a new page where you just have to fill the Email id and you will receive a mail and then you can update your password.<br/>        
        <br/>
        </Typography>
        <hr/>
        <Typography variant="h5" align="justify">    <br/>  
        Q. What all items are sold on the web portal?
        </Typography>
        <Typography variant="subtitle2" align="justify">
        A. The products that are sold are as follows: <br/>
	      1. Cotton <br/>
	      2. Wool <br/>
	      3. Silk <br/>
      	4. Jute <br/>
      	5. Handicrafts <br/>
      	6. Nylon <br/>
      	7. Denim <br/>
        However, they are broadly classified into various types based on their categories. <br/>
        <br/>
        </Typography>
        <hr/>
        </div>
      </main>
    );
  }
}

FaqsBuyer.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FaqsBuyer);
