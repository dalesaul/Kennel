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
// import "bootstrap/dist/css/bootstrap.min.css"


class Owners extends Component {
    render() {
        return (
            <article>
              <h1>Owners List</h1>
              {this.props.owners.map(singleOwner =>{
                return <p key={singleOwner.id}>{singleOwner.name}: {singleOwner.phone}</p>
              })}

            </article>
        )
    }
}

export default Owners;
