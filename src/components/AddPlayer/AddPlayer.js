import React, { Component } from 'react';

class AddPlayer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      playerName: props.playerName,
      numbersReached: props.numbersReached
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  };

  handleChange(e) {
    this.setState({ playerName: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleSubmit({ ...this.state });
  }


  render() {

    return (
      <React.Fragment>
        <form className="entry-form" onSubmit={this.handleSubmit}>
          <input
            placeholder="Enter a player's name"
            className="player-input"
            type="text"
            onChange={this.handleChange}
          />
          <button
            type="submit"
            className="player-submit"
            disabled={this.state.numbersReached}
          >
            Add a player
          </button>
        </form>

      </React.Fragment>
    )

  }
};

export default AddPlayer;