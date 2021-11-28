import React from 'react'
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
// eslint-disable-next-line import/no-extraneous-dependencies
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import {twitter} from './images/twitter.png';

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
            width: 'auto',
            marginLeft: 'auto',
            marginRight: 'auto',
            backgroundColor:'#212121'
        },
    },
    footer: {
        marginTop: theme.spacing.unit * 8,
        borderTop: `1px solid ${theme.palette.divider}`,
        padding: `${theme.spacing.unit * 6}px 0`,
        backgroundColor: '#212121',
    },
});
const footers = [
    {
        title: 'Categories',
        description: [{ name: 'Our Team', link: '/about/team' }, { name: 'Login/Sign up', link: '../signin' }, { name: 'FAQs', link: '../faqsask' }, { name: 'Products', link: '../product_catalog' }],
        address: 'PICT'
    },
];
function Footer(props) {
    const { classes } = props;
    return (
        <div>
            <footer className={classNames(classes.footer, classes.layout)} >
                <Grid container spacing={16} justify="space-evenly">
                    {footers.map(footer => (
                        <Grid item xs key={footer.title}>
                            <Typography variant="h6" style={{ textDecoration: 'none',color:'white' }} gutterBottom>
                                {footer.title}
                            </Typography>
                            {footer.description.map(item => (
                                <Typography key={item.name} variant="subtitle1" color="textSecondary" >
                                    <Link to={item.link} style={{ textDecoration: 'none',color:'grey' }}>{item.name}</Link>
                                </Typography>
                            ))}
                            <img src={twitter} alt=""/>
                        </Grid>
                    ))}
                </Grid>
            </footer>
        </div>
    );
}
Footer.propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);
