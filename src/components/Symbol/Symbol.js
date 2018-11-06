import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import DeleteIcon from '@material-ui/icons/Delete';
import PropTypes from 'prop-types';

// const Symbol = props => {
//   return (
//     <div className="symbol">
//       <p>{props.label}</p>
//     </div>
//   );
// };

const styles = theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: `${theme.spacing.unit * 4}px 0 ${theme.spacing.unit * 2}px`,
  },
});

const Symbol = props => {
  return (
    <ListItem>
      <ListItemText primary={props.label} />
      <ListItemSecondaryAction>
        <IconButton aria-label="Delete">
          <DeleteIcon onClick={props.removeFunction} />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

Symbol.propTypes = {
  label(props, propName, component) {
    // if the label is missing, throw an error
    if (!(propName in props)) {
      return new Error(`missing ${propName}`);
    }
    // if the label somehow exceeds 3 or 4 chars, throw error
    if (props[propName].length > 5) {
      return new Error(`${propName} was too large in length`);
    }
    // if the label < 3 chars, throw error
    if (props[propName].length < 2) {
      return new Error(`${propName} was too small in length`);
    }
  },
};

// Symbol.propTypes = {
//   classes: PropTypes.object.isRequired,
//   dense: PropTypes.bool.isRequired,
// };
export default withStyles(styles)(Symbol);
// export default Symbol;
