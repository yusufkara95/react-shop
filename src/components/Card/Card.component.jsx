import './Card.styles.css';

const Card = ({ product }) => {

    const { id, title, image, price } = product;

    return (
        <div className="card-container" key={id}>
            <img width={200} height={200} alt={`product ${title}`} src={image} />
            <h2>{title}</h2>
            <p>{price}</p>
        </div>
    )
}
export default Card;