import RenderCartItem from "./RenderCartItem.js"

function CartSection({cart, AddToCart, RemoveFromCart, cartTotal}){
    return( 
        <main id="cart">
            <h2>Your Cart</h2>
            <div className="cart--item-list-container">
                <ul className="item-list cart--item-list">
                    {cart.map(item => <RenderCartItem item={item} AddToCart={AddToCart} RemoveFromCart={RemoveFromCart}/>)}
                </ul>
            </div>
            <div className="total-section">
                <div>
                    <h3>Total</h3>
                </div>
                <div>
                    <span className="total-number">£{cartTotal.toFixed(2)}</span>
                </div>
            </div>
        </main>
    )
}
export default CartSection

