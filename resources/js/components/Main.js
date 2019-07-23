import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Plant from './Plant';
import AddPlant from './AddPlant';
import NavDrawer from './NavDrawer'

class Main extends Component {
  constructor(){
    super();
     //Initialize the state in the constructor
    this.state = {
      plants:[],
      currentPlant: null
    }
    this.handleAddPlant = this.handleAddPlant.bind(this);
  }
  //componentDidMount() is a lifecycle method
  //that gets called after the component is rendered
  componentDidMount(){
    // fetch API in action
    fetch('/api/plants')
      .then(response => {
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

    handleAddPlant(plant) {
      //fetch api post request
      fetch('api/plants', {
        method:'post',
        headers:{
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(plant)
      })
      .then(response => {
        return response.json();
      })
      .then( data => {
        this.setState((prevState)=> ({ plants: prevState.plants.concat(data), currentPlant : data}))
      })
    }

    handleDelete(plant) {
      const currentPlant = this.state.currentPlant;
      fetch( 'api/plants/' + this.state.currentPlant.id,
        { method:'delete'})
        .then( response => {
          var array = this.state.plants.filter(function(item) {
            return item !== currentPlant
          });
          this.setState({ plants: array, currentPlant: null});
        });
    }

    handleUpdate(plant) {
      const currentPlant = this.state.currentPlant;
      fetch('api/plants/' + this.state.currentPlant.id,
        { method: 'put',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(plant)
        })
        .then( response =>{
          return response.json();
        })
        .then( data => {
          var array = this.state.plants.filter(function(item){
            return item !== currentPlant
          })
          this.setState((prevState)=> ({ plants:array.concat(plant), currentPlant : plant}))
        })
    }

    render() {
      return (
        <div>
        <div>
        <NavDrawer />
        </div>
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
