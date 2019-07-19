import React, { Component } from 'react';


class AddPlant extends Component {
  constructor(props) {
    super(props);
      this.state = {
        newPlant: {
          title: '',
          sunlight: ''
        }
      }
    //boilerplate code for binding methods with 'this'
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  //this method dynamically accepts inputs and stores it in the state
  handleInput(key, e) {
    //duplicating and updating the state
    var state = Object.assign({}, this.state.newPlant);
    state[key] = e.target.value;
    this.setState({newPlant: state });
  }

  //this method is invoked when submit button is pressed
  handleSubmit(e) {
    //prevent default prevents the page from reloading
    e.preventDefault();
    //a call back to the onAdd props, the current state is passed as a parameter
    this.props.onAdd(this.state.newPlant);
  }

  render () {
    const divStyle = {

    }

    return (
      <div>
        <h2> Add new plant </h2>
        <div style={divStyle}>
          <form onSubmit={this.handleSubmit}>
            <label> Name:
              <input type="text" onChange={(e)=>this.handleInput('name', e)} />
            </label>
            <label> Sunlight:
              <input type="text" onChange={(e)=>this.handleInput('sunlight', e)} />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    )
  }
}

export default AddPlant;
