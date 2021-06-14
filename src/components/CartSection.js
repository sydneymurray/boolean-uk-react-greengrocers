import products from "../data/products.js"
import RenderCartItem from "./RenderCartItem.js"

function CartSection({cart, AddToCart, RemoveFromCart}){
    let cartTotal = 0
    for (const cartItem of cart) {
        let storeItem = products.find(product => product.id === cartItem.id)
        cartTotal += cartItem.quantity * storeItem.price   
    }

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

