import { useEffect, useState } from 'react'
//import products from './data/products.js'
//import ImportedCart from './data/cart.js'
import ProductsSection from "./components/ProductsSection.js"
import CartSection from "./components/CartSection.js"
import Footer from "./components/Footer.js"
import "./styles/index.css";

export default function App() {
    let [products, setProducts] = useState([])
    let [cart, setCart] = useState([])

    useEffect(() => {retrieveJsonDataArrays()}, [])

    function retrieveJsonDataArrays() {
        retrieveProducts()
        retrieveCart()
    }

    function retrieveProducts() {
        return fetch("http://localhost:3100/products")
            .then(function (promise) {
                return promise.json()})
            .then(function (productArray) {
                setProducts(productArray)})
    }

    function retrieveCart() {
        return fetch("http://localhost:3100/cart")
            .then(function (promise) {
                return promise.json()})
            .then(function (cartArray) {
                setCart(cartArray)})
    }

    function AddToCart(storeItem) {
        let index = cart.findIndex(cartItem => storeItem.id === cartItem.id)
        if (index === -1) {
            storeItem = { ...storeItem, quantity: 1 }
            return fetch(`http://localhost:3100/cart`, {
                method:'POST',
                headers: {'Content-Type': 'Application/json'},
                body: JSON.stringify(storeItem)})
                .then(response => {
                if (response.ok){
                    cart = [...cart, storeItem]
                    setCart(cart)
                }
            })
        }
        else{
            return fetch(`http://localhost:3100/cart/${storeItem.id}`,{
                method:'PATCH',
                headers:{'Content-Type': 'Application/json'},
                body: JSON.stringify({quantity: storeItem.quantity + 1})})
                .then(response => {
                if (response.ok){
                    cart = cart.map(cartItem => {
                        if (cartItem.id === storeItem.id) 
                            cartItem = {...cartItem, quantity: ++cartItem.quantity}
                        return cartItem 
                    })
                    setCart(cart)
                }
                })
            }
        }
    
    function RemoveFromCart(item) {
        if (item.quantity === 1){
            fetch(`http://localhost:3100/cart/${item.id}`,{method:'DELETE'})
            .then(response => {
                if (response.ok){
                    cart = cart.filter(cartItem => cartItem.id !== item.id)
                    setCart(cart)
                }
            })
        }
        else{
            fetch(`http://localhost:3100/cart/${item.id}`,{
                method:'PATCH',
                headers:{'Content-Type': 'Application/json'},
                body: JSON.stringify({quantity: item.quantity - 1})
            }).then(response => {
                if (response.ok){
                    cart = cart.map(cartItem => {
                        if (cartItem.id === item.id)
                            cartItem = { ...cartItem, quantity: --cartItem.quantity }
                        return cartItem
                    })
                    setCart(cart)
                }
            })
         
        }
    }

    return <div className="App">
        <ProductsSection products={products} AddToCart={AddToCart} />
        <CartSection cart={cart} AddToCart={AddToCart}
            RemoveFromCart={RemoveFromCart} />
        <Footer />
    </div>;
}
