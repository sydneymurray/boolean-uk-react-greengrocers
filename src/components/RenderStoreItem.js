

function RenderStoreItem({item, AddToCart}){
    return( 
        <li key={item.id} className = "store-list-item">
            <div className="store--item-icon">
                <img src={"assets/icons/" + item.id + ".svg"} alt={item.name}/>
            </div>
            <button className="store-button" onClick={event => AddToCart(item)}>Add to Cart</button>
        </li>
    )
}
export default RenderStoreItem

