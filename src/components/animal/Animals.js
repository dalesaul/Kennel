import React, { Component } from 'react'
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
                                <button className="btn btn-danger"
                                    onClick={() => this.props.deleteAnimal(animal.id)}>Delete</button>

                            </h5>
                        </div>
                    </div>
                )
            }
            </section>
        )
    }
}



// import React, { Component } from "react";
// import dog from "./dogicon"


// class Animals extends Component {
//     render() {
//       return (
//         <article>
//           <h1>Animal List</h1>
//           {this.props.animals.map(singleAnimal => {
//             return <p key={singleAnimal.id}>{singleAnimal.name}, {singleAnimal.breed}</p>;
//           })}
//         </article>
//       );
//     }
//   }

//   export default Animals;