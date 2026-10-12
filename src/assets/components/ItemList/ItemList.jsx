import Item from '../Item/Item'
import { Link } from 'react-router-dom'

const ItemList = ( { products } ) => {
    if (!products.length) return <div>No products found</div>;

    return (
        <div className="item-list">
        {products.map(product => (
            <Link key={product.id} to={`/product/${product.id}`}>
                <Item {...product} />
            </Link>
        ))}
        </div>
    )
}

export default ItemList