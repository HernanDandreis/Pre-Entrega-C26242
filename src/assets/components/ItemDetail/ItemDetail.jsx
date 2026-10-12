import Item from '../Item/Item';
import './ItemDetail.css'

const ItemDetail = ({ item }) => {
    return (
        <article className="item-detail">
            <div className="item-detail-card">
                <Item {...item}>
                    <button>Agregar</button>
                </Item>
            </div>
        </article>
    )
}

export default ItemDetail;