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
        <h2 className="form-header">Enter a player's name</h2>

        <form className="entry-form" onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} />
          <button type="submit">Add a player</button>
        </form>
        {console.log(this.state)}
      </React.Fragment>
    )

  }
};

export default AddPlayer;