import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [itemDetail, setItemDetail] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setItemDetail(null);
        setLoading(true);
        setError(null);

        fetch('../../data/products.json')
            .then(response => response.json())
            .then(data => { 
                const item = data.find((product) => String(product.id) === id);
            
                if (item) {
                    setItemDetail(item);
                    return;
                }            
                throw new Error('Elemento no encontrado');
            })

            .catch(error => { setError(error.message) })
            .finally(() => { setLoading(false) });
        }, [id]);

        if (loading) return <div>Loading...</div>;
        if (error) return <div>Error: { error }</div>;
        if (!itemDetail) return <p>Producto no encontrado</p>
            
    return (
        <section className="item-detail-container">
            <h1>Detalle del producto</h1>
            <div>
                <ItemDetail item={itemDetail} />
            </div>
        </section>
    )
}

export default ItemDetailContainer;