import { Component } from "react";

import './Card.styles.css';

class Card extends Component {
    render() {
        const {id, title, image, price} = this.props.product;
        return (
            <div className="card-container" key={id}>
                <img width={200} height={200} alt={`product ${title}`} src={image} />
                <h2>{title}</h2>
                <p>{price}</p>
            </div>
        )
    }

}

export default Card;