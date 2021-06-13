

function RenderCartItem({item, AddToCart, RemoveFromCart}){
    return(
        <li key={item.id}> 

            <img className="cart--item-icon" 
                src={"assets/icons/" + item.id + ".svg"} alt={item.name}/>
        
            <p>{item.name}</p>    
        
            <button className="quantity-btn remove-btn center"
                onClick={event => RemoveFromCart(item)}>-</button>
        
            <span className="quantity-text center">{item.quantity}</span>    
        
            <button className="quantity-btn add-btn center"
                onClick={event => AddToCart(item)}>+</button>

        </li>
    )
}
export default RenderCartItem