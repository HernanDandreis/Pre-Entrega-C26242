import { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {

    const [item, setItem] = useState(null);
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
            
            .then(data => { setItem(data.find(item => item.id === location.pathname.split('/').pop())) })
            .catch(error => { setError(error) })
            .finally(() => { setLoading(false) });
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: { error.message }</div>;
    if (!item) return <div>No item found</div>;

    return (
        <section className="item-detail-container">
            <ItemDetail item={item} />
        </section>
    );
}

export default ItemDetailContainer;