import React, { Component } from 'react';
class AddPlayer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      playerName: props.playerName,
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
          <label htmlFor="player" className="form-header">Enter a player's name: </label>
          <input name="player" className="player-input" type="text" onChange={this.handleChange} />
          <button type="submit" className="player-submit">Add a player</button>
        </form>

      </React.Fragment>
    )

  }
};

export default AddPlayer;