// import React, { Component } from "react";


// class Owners extends Component {
//   render() {
//     return (
//       <article>
//         <h1>Owners</h1>
//         {this.props.owners.map(singleOwner => {
//           return <p key={singleOwner.id}>{singleOwner.name}</p>;
//         })}
//       </article>
//     );
//   }
// }

// export default Owners;

import React, { Component } from "react"
import Owner from "./Owner.png"
import "./Owners.css"


export default class Owners extends Component {
    render() {
        return (
            <section className="owners">
              {
                this.props.owners.map(singleOwner =>
                  <div key={singleOwner.id} className="card">
                        <div className="card-body">
                            <h5 className="card-title">
                                <img src={Owner} className="icon--owner" alt="owner Icon"/>
                                {singleOwner.name}
                                <button className="btn btn-danger"
                                    onClick={() => this.props.deleteOwner(singleOwner.id)}>Delete</button>

                            </h5>
                        </div>
                  </div>
                )
            }

            </section>
        )
    }
}


