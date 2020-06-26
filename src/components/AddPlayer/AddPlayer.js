import React, { Component } from 'react';
import NumbersReached from '../NumbersReached';

class AddPlayer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      playerName: props.playerName,
      numbersReached: props.numbersReached,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
  };

  handleChange(e) {
    this.setState(
      {
        playerName: e.currentTarget.value
      }
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleSubmit(
      {
        ...this.state
      }
    );
    e.currentTarget.reset();
  }

  handleReset(e) {
    e.preventDefault();
    this.props.handleReset(
      {
        ...this.state
      }
    );
  }


  render() {

    return (
      <React.Fragment>

        <form
          className="entry-form"
          onSubmit={this.handleSubmit}>

          <input
            disabled={this.props.numbersReached}
            placeholder="Enter a player's name"
            className="player-input"
            type="text"
            onChange={this.handleChange}
            required
          />

          <button
            disabled={this.props.numbersReached}
            type="submit"
            className="player-submit"
          >
            Add a player
          </button>

          <button
            className="reset-teams"
            onClick={this.handleReset}>
            Reset teams
            </button>

          <NumbersReached />

        </form>

      </React.Fragment>
    )

  }
};

export default AddPlayer;