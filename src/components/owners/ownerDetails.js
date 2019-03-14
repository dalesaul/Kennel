import React, { Component } from "react"

import "./Owners.css"
import Owner from "./Owner.png"


export default class OwnerDetail extends Component {
    render() {

        const owner = this.props.owners.find(a => a.id === parseInt(this.props.match.params.ownerId)) || {}

        return (
            <section className="owner">
                <div key={owner.id} className="card">
                    <div className="card-body">
                        <h4 className="card-title">
                            <img src={Owner} className="icon--owner" alt="cute dog icon"/>
                            {owner.name}
                        </h4>
                        <button
                            onClick={() => this.props.deleteOwner(owner.id)
                                            .then(() => this.props.history.push("/owners"))}
                            className="card-link">Delete</button>
                    </div>
                </div>
            </section>
            )
            }
            }