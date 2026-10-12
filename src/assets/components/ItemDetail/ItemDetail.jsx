const ItemDetail = ({ item }) => {
    return (
        <article className="item-detail">
            <h2>{item.name}</h2>
            <img src={item.image} alt={item.name} />
            <p>{item.description}</p>
            <p>Precio: ${item.price.toFixed(2)}</p>
        </article>
    )
}

export default ItemDetail;