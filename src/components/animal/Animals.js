import React, { Component } from 'react'
import { Link } from "react-router-dom";
import dog from "./DogIcon.png"
import "./Animal.css"

class AnimalsList extends Component {
    render () {
        return (
            <React.Fragmemnt>
                <div className="animalButton">
                    <button type="button" className="btn btn-success"
                    onClick={() => {
                        this.props.history.push("/animals/new");
                    }}>
                    Admit Animal
                    </button>
                </div>
            <section className="animals">
            {this.props.animals.map(animal => (
                    <div key={animal.id} className="card">
                        <div className="card-body">
                            <h4 className="card-title">
                                <img src={dog} className="icon--dog" alt="Dog Icon"/>
                                {animal.name}
                                <Link className="nav-link" to={`/animals/${animal.id}`}>Details</Link>
                            </h4>
                        </div>
                    </div>
                ))
            }
            </section>
        </React.Fragmemnt>
        )
    }}

    export default AnimalsList;