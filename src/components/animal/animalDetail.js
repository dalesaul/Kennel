import React, { Component } from "react";
import "./Animal.css";
import dog from "./DogIcon.png";

export default class AnimalDetail extends Component {
  render() {
    //find animal user clicked on//
    const animal =
      this.props.animals.find(
        a => a.id === parseInt(this.props.match.params.animalId)
      ) || {}

    return (
      <section className="animal">
        <div key={animal.id} className="card">
          <div className="card-body">
            <h4 className="card-title">
              <img src={dog} className="icon--dog" alt="cute dog icon" />
              {animal.name}
            </h4>
            <h6 className="card-title">{animal.breed}</h6>
            <h6 className="card-title">Care Taker: {animal.EmployeeId}</h6>
            <button
              onClick={() =>
                this.props
                  .deleteAnimal(animal.id)
                  .then(() => this.props.history.push("/animals"))
              }
              className="card-link"
            >
              Delete
            </button>
            <button
              type="button"
              className="btn btn-success"
              onClick={() => {
                this.props.history.push(
                  `/animals/${animal.id}/edit`
                );
              }}
            >
              Edit
            </button>
          </div>
        </div>
      </section>
    );
  }
}
