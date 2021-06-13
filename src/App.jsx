import { useState } from 'react'
import products from './data/products.js'
import ImportedCart from './data/cart.js'
import ProductsSection from "./components/ProductsSection.js"
import CartSection from "./components/CartSection.js"
import "./styles/index.css";

export default function App() {
    let [cart, setCart] = useState(ImportedCart)
    let [cartTotal, setTotal] = useState(0)

    function AddToCart(storeItem){
        let index = cart.findIndex(cartItem => storeItem.id === cartItem.id) 
        if (index === -1) {
            storeItem = {...storeItem, quantity: 1}    
            cart = [...cart, storeItem]
        }
        else         
            cart = cart.map(cartItem => {
                if (cartItem.id === storeItem.id) 
                    cartItem = {...cartItem, quantity: ++cartItem.quantity }
                return cartItem
            }) 
        updatePage()
    }
    
    function RemoveFromCart(item){
        if (item.quantity === 1)
            cart = cart.filter(cartItem => cartItem.id !== item.id) 
        else
            cart = cart.map(cartItem => {
                if (cartItem.id === item.id) 
                    cartItem = {...cartItem, quantity: --cartItem.quantity }
                return cartItem
            })
        updatePage()
    }

    function updatePage(){
       cartTotal = 0
       for (const item of cart) {
           cartTotal += item.quantity * item.price   
       }
       setTotal(cartTotal)
       setCart(cart)
    }

    return <div className="App">
        <ProductsSection products={products} AddToCart={AddToCart}/>
        <CartSection cart={cart} AddToCart={AddToCart} 
            RemoveFromCart={RemoveFromCart} cartTotal={cartTotal}/>
    </div>;
}
