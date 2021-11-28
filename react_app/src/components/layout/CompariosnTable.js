import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import {
  Chip,
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody
} from '@material-ui/core';
import Checkcirlce from '@material-ui/icons/CheckCircle';
import jute from './images/jute.jpg';
import handi from './images/handi.jpg';
import silk from './images/silk.jpg';
import cotton from './images/cotton.jpg';
import wool from './images/wool.jpeg';

let id = 0;
function createData(
  feature1,
  feature2,
  feature3,
  feature4,
  feature5,
  feature6,
  feature7
) {
  id += 1;
  return {
    id,
    feature1,
    feature2,
    feature3,
    feature4,
    feature5,
    feature6,
    feature7
  };
}
const checkchip = (
  <Chip icon={<Checkcirlce style={{ color: '#2e7d32' }} />} label="verified" />
);

const rows = [
  createData('feature 1', 159, 6.0, 24, 4.0, 24, 4.0),
  createData('feature 2', 237, 9.0, 37, 4.3, 24, 4.0),
  createData('feature 3', 262, 16.0, 24, 6.0, 24, 4.0),
  createData('feature 4', 305, 3.7, 67, 4.3, 24, 4.0),
  createData(
    'feature 5',
    'seller name',
    'seller name',
    'seller name',
    'seller name',
    'seller name',
    'seller name'
  ),
  createData(
    'feature 6',
    checkchip,
    checkchip,
    checkchip,
    checkchip,
    checkchip,
    checkchip
  )
];
const styles = theme => ({
  root: {
    width: 'auto',
    height: 'auto',
    overflowX: 'auto',
    margin: theme.spacing.unit * 4
  },
  table: {
    margin: theme.spacing.unit
  }
});

// eslint-disable-next-line react/prefer-stateless-function
class CompariosnTable extends Component {
  render() {
    const { classes, tabledata } = this.props;
    const keyfields = Object.keys(tabledata);

    return (
      <div className={classes.root}>
        <Typography variant="h4" align="center">
          Comparison with other similar Products
        </Typography>
        <Table className={classes.table}>
          {/* <TableHead>
            <TableRow>
              <TableCell>Feature/Images</TableCell>
              <TableCell align="center">
                <img
                  src={cotton}
                  alt="Not Available"
                  height="100vw"
                  width="100vw"
                />
              </TableCell>
              <TableCell align="center">
                <img
                  src={silk}
                  alt="Not Available"
                  height="100vw"
                  width="100vw"
                />
              </TableCell>
              <TableCell align="center">
                <img
                  src={handi}
                  alt="Not Available"
                  height="100vw"
                  width="100vw"
                />
              </TableCell>
              <TableCell align="center">
                <img
                  src={cotton}
                  alt="Not Available"
                  height="100vw"
                  width="100vw"
                />
              </TableCell>
              <TableCell align="center">
                <img
                  src={jute}
                  alt="Not Available"
                  height="100vw"
                  width="100vw"
                />
              </TableCell>
              <TableCell align="center">
                <img
                  src={wool}
                  alt="Not Available"
                  height="100vw"
                  width="100vw"
                />
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.feature1}
                </TableCell>
                <TableCell align="center">{row.feature2}</TableCell>
                <TableCell align="center">{row.feature3}</TableCell>
                <TableCell align="center">{row.feature4}</TableCell>
                <TableCell align="center">{row.feature5}</TableCell>
                <TableCell align="center">{row.feature6}</TableCell>
                <TableCell align="center">{row.feature7}</TableCell>
              </TableRow>
            ))}
          </TableBody> */}

          <TableBody>
            {keyfields.map(row => (
              <TableRow>
                <TableCell component="th" scope="row">
                  {row}
                </TableCell>
                {tabledata[row].map(cell => (
                  <TableCell component="th" scope="row">
                    {cell}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  }
}

CompariosnTable.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  classes: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(CompariosnTable);
