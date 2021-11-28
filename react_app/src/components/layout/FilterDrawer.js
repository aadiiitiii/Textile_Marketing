import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import { Divider, Hidden, Typography } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Sort';
import Modal from '@material-ui/core/Modal';
import ListSubHeader from '@material-ui/core/ListSubheader';

function getModalStyle() {
  const top = 10;
  return { top: `${top}%`, margin: 'auto' };
}

const styles = theme => ({
  div_position: {
    height: '2vw',
    width: '2vw',
    // backgroundColor: '#212121',
    position: 'fixed',
    bottom: theme.spacing.unit * 4,
    right: theme.spacing.unit * 4
  },
  fab: {
    margin: theme.spacing.unit,
    bottom: theme.spacing.unit * 6,
    right: theme.spacing.unit * 6
  },
  paper: {
    position: 'absolute',
    width: 'auto',
    height: 'auto',
    padding: theme.spacing.unit * 4,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    outline: 'none'
  },
  div_position_mob: {
    height: '2vw',
    width: '2vw',
    // backgroundColor: '#212121',
    position: 'fixed',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2
  },
  paper_mob: {
    position: 'absolute',
    width: 'auto',
    height: 'auto',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: 'none'
  }
});

class FilterDrawer extends React.Component {
  // state = {   checked: [0], };
  state = {
    checked: [0],
    open: false
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleDrawerToggle = () => {
    this.setState(state => ({
      mobileOpen: !state.mobileOpen
    }));
  };

  handleToggle = value => () => {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({ checked: newChecked });
  };

  render() {
    const { classes } = this.props;
    const { open, checked } = this.state;
    return (
      <Fragment>
        <Hidden smDown>
          <div className={classes.div_position}>
            <CssBaseline />
            <Fab
              color="primary"
              aria-label="Add"
              className={classes.fab}
              onClick={this.handleOpen}
            >
              <AddIcon />
            </Fab>

            <Modal
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
              open={open}
              onClose={this.handleClose}
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'auto'
              }}
            >
              <div style={getModalStyle()} className={classes.paper}>
                <Typography variant="h4" gutterBottom align="center">
                  Apply Filters
                </Typography>
                <List
                  className={styles.root}
                  subheader={<ListSubHeader> Colors </ListSubHeader>}
                >
                  {['Red', 'Blue', 'Green', 'Yellow', 'White', 'Black'].map(
                    value => (
                      <ListItem
                        key={value}
                        role={undefined}
                        dense
                        button
                        onClick={this.handleToggle(value)}
                        style={{
                          height: '25px'
                        }}
                      >
                        <Checkbox
                          checked={checked.indexOf(value) !== -1}
                          tabIndex={-1}
                          disableRipple
                        />
                        <ListItemText primary={value} />
                      </ListItem>
                    )
                  )}
                </List>
                <Divider variant="middle" />
                <List
                  className={styles.root}
                  subheader={<ListSubHeader> Business Type </ListSubHeader>}
                >
                  {[
                    'BSE Listed-Public ltd.',
                    'Unlisted-Public Ltd.',
                    'Private Ltd',
                    'Others'
                  ].map(value => (
                    <ListItem
                      key={value}
                      role={undefined}
                      dense
                      button
                      onClick={this.handleToggle(value)}
                      style={{
                        height: '25px'
                      }}
                    >
                      <Checkbox
                        checked={checked.indexOf(value) !== -1}
                        tabIndex={-1}
                        disableRipple
                      />
                      <ListItemText primary={value} />
                    </ListItem>
                  ))}
                </List>
              </div>
            </Modal>
          </div>
        </Hidden>

        <Hidden mdUp>
          <div className={classes.div_position_mob}>
            <CssBaseline />
            <Fab
              color="primary"
              aria-label="Add"
              className={classes.fab}
              onClick={this.handleOpen}
            >
              <AddIcon />
            </Fab>

            <Modal
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
              open={open}
              onClose={this.handleClose}
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'auto'
              }}
            >
              <div style={getModalStyle()} className={classes.paper_mob}>
                <Typography variant="h4" gutterBottom align="center">
                  Apply Filters
                </Typography>
                <List
                  className={styles.root}
                  subheader={<ListSubHeader> Colors </ListSubHeader>}
                >
                  {['Red', 'Blue', 'Green', 'Yellow', 'White', 'Black'].map(
                    value => (
                      <ListItem
                        key={value}
                        role={undefined}
                        dense
                        button
                        onClick={this.handleToggle(value)}
                        style={{
                          height: '25px'
                        }}
                      >
                        <Checkbox
                          checked={checked.indexOf(value) !== -1}
                          tabIndex={-1}
                          disableRipple
                        />
                        <ListItemText primary={value} />
                      </ListItem>
                    )
                  )}
                </List>
                <Divider variant="middle" />
                <List
                  className={styles.root}
                  subheader={<ListSubHeader> Business Type </ListSubHeader>}
                >
                  {[
                    'BSE Listed-Public ltd.',
                    'Unlisted-Public Ltd.',
                    'Private Ltd',
                    'Others'
                  ].map(value => (
                    <ListItem
                      key={value}
                      role={undefined}
                      dense
                      button
                      onClick={this.handleToggle(value)}
                      style={{
                        height: '25px'
                      }}
                    >
                      <Checkbox
                        checked={checked.indexOf(value) !== -1}
                        tabIndex={-1}
                        disableRipple
                      />
                      <ListItemText primary={value} />
                    </ListItem>
                  ))}
                </List>
              </div>
            </Modal>
          </div>
        </Hidden>
      </Fragment>
    );
  }
}

FilterDrawer.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  classes: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(FilterDrawer);
