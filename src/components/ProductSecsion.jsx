const ProductSecsion = () => {
    return (
        <main className="ProductSecsion container">
            <div className="content">
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
                <div className="btn">
                    <button className="ShopNow">Shop Now</button>
                    <button className="Category">Category</button>
                </div>
                <div className="availableOn">
                    <p>Also Available On</p>
                    <div className="platforms">
                        <img className="amazon" src="/images/amazon.png" alt="amazon" />
                        <img className="flipkart" src="./public/images/flipkart.png" alt="flipkart" />
                    </div>
                </div>
            </div>
            <div className="productImage">
                <img src="/images/shoe_image.png" alt="shoe_image" />
            </div>
        </main>
    );
};
export default ProductSecsion;