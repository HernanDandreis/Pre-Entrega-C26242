import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'
const ItemListContainer = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('../../data/products.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                    return response.json();
            })
            
            .then(data => { setProducts(data) })
            .catch(error => { setError(error) })
            .finally(() => { setLoading(false) });
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: { error.message }</div>;
    if (!products.length) return <div>No se han encontrado productos</div>;

    return (
        <section className="item-list-container">
            <ItemList products={products} />
        </section>
    );
}

export default ItemListContainer