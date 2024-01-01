import { Component } from "react";

import Card from "../Card/Card.component";
import './CardList.styles.css'

class CardList extends Component {
    render() {
        const { products } = this.props;
        return (
            <div className='card-list'>
                {products.map((product) => {
                    return <Card product={product} />
                })}
            </div>
        )
    }
}

export default CardList;