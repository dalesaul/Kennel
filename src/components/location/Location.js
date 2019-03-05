import React, {Component} from 'react';

class Location extends Component {
    render() {
        return (
            <article>
            <h3>Locations:</h3>
            {this.props.locations.map(singleLocation => {
                return <p key={singleLocation.id}>{singleLocation.name}, {singleLocation.address}</p>
            })}
            </article>

        );
    }
}

export default Location;