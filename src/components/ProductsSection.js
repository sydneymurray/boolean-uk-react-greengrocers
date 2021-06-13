import RenderStoreItem from "./RenderStoreItem.js"

function ProductsSection({products,AddToCart}){
    return(
        <header id="store">
            <h1>Brodda Syd's Grocers Store</h1>
            <ul className="item-list store--item-list">
                {products.map(item => <RenderStoreItem item={item} AddToCart={AddToCart}/>)}
            </ul>
        </header>
    )
}
export default ProductsSection