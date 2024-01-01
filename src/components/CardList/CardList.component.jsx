import Card from "../Card/Card.component";
import './CardList.styles.css'

const CardList = ({ products })  => {
    return (
        <div className='card-list'>
            {products.map((product) => {
                return <Card product={product} />
            })}
        </div>
    )
}

export default CardList;