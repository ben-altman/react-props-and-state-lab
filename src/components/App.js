import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  handleOnChangeType = (event) => {
    this.setState({
      filters: {
        type: event.target.value
      }
    })
  }

  handleOnFindPetsClick = () => {
    let url = `/api/pets`

    if(this.state.filters.type !== 'all') {
      url += `?type=${this.state.filters.type}`
    }
    fetch(url)
      .then(res => res.json())
      .then(filterData => {
        this.setState({
          pets: filterData
        })
      })
  }

  handleAdoptPet = (petId) => {
    const pets = this.state.pets.map(pet => {
      return pet.id === petId ? {...pet, isAdopted: true } : pet
    })
    this.setState({pets: pets})

    // let thisPet = this.state.pets.find(pet => pet.id === petId)
    // console.log(thisPet)
    // this.setState({
    //   // pets: {
    //   ...this.state.pets,
    //   //   isAdopted: true
    //   ...thisPet, isAdopted: true
    //   // }
    // })
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.handleOnChangeType} 
                onFindPetsClick={this.handleOnFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser 
                pets={this.state.pets}
                onAdoptPet={this.handleAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
