import { useState } from 'react'
import products from './data/products.js'
import ImportedCart from './data/cart.js'
import ProductsSection from "./components/ProductsSection.js"
import CartSection from "./components/CartSection.js"
import "./styles/index.css";

export default function App() {
    let [cart, setCart] = useState(ImportedCart)

    function AddToCart(storeItem){
        let index = cart.findIndex(cartItem => storeItem.id === cartItem.id) 
        if (index === -1) {
            storeItem = {...storeItem, quantity: 1}    
            cart = [...cart, storeItem]
        }
        else         
            cart = cart.map(cartItem => {
                if (cartItem.id === storeItem.id) 
                    cartItem = {...cartItem, quantity: ++cartItem.quantity}
                return cartItem
            }) 
        setCart(cart)
    }
    
    function RemoveFromCart(item){
        if (item.quantity === 1)
            cart = cart.filter(cartItem => cartItem.id !== item.id) 
        else
            cart = cart.map(cartItem => {
                if (cartItem.id === item.id) 
                    cartItem = {...cartItem, quantity: --cartItem.quantity}
                return cartItem
            })
        setCart(cart)
    }

    return <div className="App">
        <ProductsSection products={products} AddToCart={AddToCart}/>
        <CartSection cart={cart} AddToCart={AddToCart} 
            RemoveFromCart={RemoveFromCart}/>
    </div>;
}
