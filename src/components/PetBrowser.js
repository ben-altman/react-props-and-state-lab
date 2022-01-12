import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  renderCards = () => {
    return (
      this.props.pets.map(
        // console.log(pet),
        pet => 
        <Pet
          key={pet.id.toString()}
          pet={pet}
          onAdoptPet={this.props.onAdoptPet} />
      )
    )
  }

  render() {
    return <div className="ui cards">
      {/* PET COMPONENT SHOULD GO HERE */}
      {this.renderCards()}
    </div>
  }
}

export default PetBrowser
