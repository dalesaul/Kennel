import React, { Component } from "react";


class Animals extends Component {
    render() {
      return (
        <article>
          <h1>Animal List</h1>
          {this.props.animals.map(singleAnimal => {
            return <p key={singleAnimal.id}>{singleAnimal.name}, {singleAnimal.breed}</p>;
          })}
        </article>
      );
    }
  }

  export default Animals;