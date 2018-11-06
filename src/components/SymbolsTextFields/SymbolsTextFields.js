import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

import Symbol from '../Symbol/Symbol';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  dense: {
    marginTop: 19,
  },
  input: {
    display: 'none',
  },
  menu: {
    width: 200,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  root: {
    flexGrow: 1,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: `${theme.spacing.unit * 4}px 0 ${theme.spacing.unit * 2}px`,
  },
});
const symbols = [
  {
    label: 'EKG',
  },
  {
    label: 'MAB',
  },
  {
    label: 'BABA',
  },
  {
    label: 'ABD',
  },
  {
    label: 'CEF',
  },
  {
    label: 'ISL',
  },
  {
    label: 'KMU',
  },
  {
    label: 'QPO',
  },
  {
    label: 'DRM',
  },
  {
    label: 'RYOB',
  },
  {
    label: 'EKY',
  },
  {
    label: 'TESL',
  },
];

class SymbolsTextFields extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Cat in the Hat',
      age: '',
      multiline: 'Controlled',
      label: 'EUR',
      chosenSymbols: [],
      displaySymbols: false,
      dense: false,
      secondary: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.pushSymbol = this.pushSymbol.bind(this);
    this.displaySymbols = this.displaySymbols.bind(this);
    this.displaySpecificSymbols = this.displaySpecificSymbols.bind(this);
    this.generateSingle = this.generateSingleSymbol.bind(this);
    this.removeSymbol = this.removeSymbol.bind(this);
  }

  /**
   * Handle the currently selected label from the dropdown list.
   *
   * @memberof SymbolsTextFields
   */
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  /**
   * Add a single symbol to the chosen symbols array.
   * Grabs the symbol from this.state.label which is managed by handleChange.
   *
   * @memberof SymbolsTextFields
   */
  pushSymbol = () => {
    let presentAlready = this.state.chosenSymbols.indexOf(this.state.label);

    if (presentAlready == -1) {
      this.setState({
        chosenSymbols: [...this.state.chosenSymbols, this.state.label],
      });
    }
  };

  /**
   * Toggle whether the list of chosen symbols is rendered.
   *
   * @memberof SymbolsTextFields
   */
  displaySymbols = () => {
    this.setState({
      displaySymbols: !this.state.displaySymbols,
    });
  };

  /**
   * Debugging tool.
   * Console.log() an array of symbols.
   */
  displaySpecificSymbols(arrayOfSymbols) {
    let length = arrayOfSymbols.length;
    let index = 0;

    while (index < length) {
      console.log(arrayOfSymbols[index++]);
    }
  }

  /**
   * Remove a single symbol from the list of chosen symbols.
   *
   * @param {String} symbol Symbol to be removed
   * @memberof SymbolsTextFields
   */
  removeSymbol(symbol) {
    let newArray = this.state.chosenSymbols;
    let indexToRemove = newArray.indexOf(symbol);
    if (indexToRemove > -1) {
      newArray.splice(indexToRemove, 1);
    }
    this.setState({
      chosenSymbols: newArray,
    });
  }

  /**
   * Generate a new key for the div component wrapping Symbol component.
   *
   * @memberof SymbolsTextFields
   */
  generateSingleSymbol = function() {
    let text = '';
    let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    for (var i = 0; i < 3; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    // console.log('Key generated: ' + text);
    return text;
  };

  render() {
    let renderedSymbols = null;

    // console.log('displaySymbols is currently ' + this.state.displaySymbols);
    if (this.state.displaySymbols) {
      // console.log('Entered :');
      renderedSymbols = (
        <div>
          {this.state.chosenSymbols.map((symbol, index) => {
            // console.log(symbol);
            return (
              <div key={this.generateSingleSymbol()}>
                {/* <div key={this.generateSingleSymbol()}> */}
                <Symbol
                  label={symbol}
                  removeFunction={() => this.removeSymbol(symbol)}
                />
              </div>
            );
          })}
        </div>
      );
    }

    const {classes} = this.props;
    return (
      <div className={classes.root}>
        <Grid xs={6} md={6}>
          <form className={classes.container} noValidate autoComplete="off">
            <TextField
              id="standard-select-currency"
              select
              label="Select"
              className={classes.textField}
              value={this.state.label}
              onChange={this.handleChange('label')}
              SelectProps={{
                MenuProps: {
                  className: classes.menu,
                },
              }}
              helperText="Please select your currency"
              margin="normal"
            >
              {symbols.map(option => (
                <MenuItem key={option.label} value={option.label}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={this.pushSymbol}
            >
              Enter Symbol
            </Button>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={this.displaySymbols}
            >
              Done
            </Button>
          </form>
        </Grid>
        <Grid item xs={4} md={4} lg={4}>
          <List>{renderedSymbols}</List>
        </Grid>
      </div>
    );
  }
}

SymbolsTextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SymbolsTextFields);
