import './Item.css'

const Item = ( { image, name, description, price, children } ) => {
    return (
        <article>
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <p>{description}</p>
            <p>${price.toFixed(2)}</p>

            {children}
        </article>
    )
}

export default Item