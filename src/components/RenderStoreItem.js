

function RenderStoreItem({item, AddToCart}){
    return( 
        <li key={item.id}>
            <div className="store--item-icon">
                <img src={"assets/icons/" + item.id + ".svg"} alt={item.name}/>
            </div>
            <button onClick={event => AddToCart(item)}>Add to Cart</button>
        </li>
    )
}
export default RenderStoreItem

