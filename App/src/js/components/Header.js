import React from "react";
import Title from "./Header/Title";


export default class Header extends React.Component{
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Welcome ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <Title title={this.props.title} />
            <label>
              <p>User Name:
              <input type="text" value={this.state.value} onChange={this.handleChange} /></p>
              <p>Password:
              <input type="password" name="Password"/></p>
            </label>
          <input type="submit" value="Submit" />
        </div>
      </form>
    );
  }
  }
