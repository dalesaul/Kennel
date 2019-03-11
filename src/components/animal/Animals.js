import React, { Component } from 'react'
import { Link } from "react-router-dom";
import dog from "./DogIcon.png"
import "./Animal.css"

export default class Animals extends Component {
    render () {
        return (
            <section className="animals">
            {
                this.props.animals.map(animal =>
                    <div key={animal.id} className="card">
                        <div className="card-body">
                            <h5 className="card-title">
                                <img src={dog} className="icon--dog" alt="Dog Icon"/>
                                {animal.name}
                                <Link className="nav-link" to={`/animals/${animal.id}`}>Details</Link>


                            </h5>
                        </div>
                    </div>
                )
            }
            </section>
        )
    }
}

