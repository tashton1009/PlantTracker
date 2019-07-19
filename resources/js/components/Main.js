import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Plant from './Plant';
import AddPlant from './AddPlant';

class Main extends Component {
  constructor(){
    super();
     //Initialize the state in the constructor
    this.state = {
      plants:[],
      currentPlant: null
    }
  }
  //componentDidMount() is a lifecycle method
  //that gets called after the component is rendered
  componentDidMount(){
    // fetch API in action
    fetch('/api/plants')
      .then(response => {
        console.log(response);
        return response.json();
      })
      .then(plants => {
        //fetched plant is stored in state
        this.setState({ plants });
      });
  }

    renderPlants() {
        return this.state.plants.map(plant => {
          return (
            //the handleClicked is invoked on the onClick
            <li onClick={
              () => this.handleClick(plant)}
              //when using list you need to specify a key attribute that is unique for each list item
              key={plant.id} >
              {plant.name}
            </li>
          );
      })
    }

    handleClick(plant) {
      //using handleClick to set the state
      this.setState({currentPlant:plant});
    }

    render() {
      return (
        <div>
          <div>
            <h3> All Plants </h3>
              <ul>
                { this.renderPlants() }
              </ul>
          </div>
          <div>
            <Plant plant={this.state.currentPlant} />
          </div>
          <div>
            <AddPlant onAdd={this.handleAddPlant} />
          </div>
        </div>
      );
    }
}

export default Main;

/* The if statement is required so as to Render the component on pages that have a div with an ID of "root";
*/

if (document.getElementById('root')) {
    ReactDOM.render(<Main />, document.getElementById('root'));
}
