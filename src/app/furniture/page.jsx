"use client"
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React, { useState } from 'react';
import styles from './page.module.css'
import Image from 'next/image';
// import App from '@/components/App';
// import ProductList from '@/components/ProductList';
// import Cart from '@/components/Cartpage';
// import Product from '@/components/Product';
// import GetStartedPage from '@/components/Get';
// import Related from '@/components/related/Related';

// Furniture data

const furnitureData = [
    { id: 1, name: 'Sofa', price: 999, image: 'https://img.freepik.com/free-vector/realistic-icon-modern-blue-armchair-with-wooden-legs-vector-illustration_1284-66933.jpg?w=740&t=st=1712102791~exp=1712103391~hmac=b272402d6baf8449572761a3d453fb1c27071e4c63be27591d03449bb2dae8cf', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet quam quis nisl iaculis scelerisque.' },
    { id: 2, name: 'Bed', price: 1499, image: 'https://img.freepik.com/free-psd/armchair-pillow_176382-886.jpg?t=st=1712102416~exp=1712106016~hmac=e5517d7ba57c572d2138d1b6f3e4a1079811343377432c587d392e45b02699d0&w=740' },
    { id: 3, name: 'Dining Table', price: 799, image: 'https://img.freepik.com/premium-photo/green-armchair-isolated-white-transparent-background-ai-generated-image_145713-14932.jpg?w=740' },
    { id: 4, name: 'Armchair', price: 599, image: 'https://img.freepik.com/free-psd/chair-pillow_176382-867.jpg?w=740&t=st=1712102962~exp=1712103562~hmac=a507fe478802a74d6a63b24e075f3645500f420b71364512884897c685e52d96' },
    { id: 5, name: 'White Paded Arm Chair', price: 399, image: 'https://img.freepik.com/free-psd/white-padded-armchair-mockup_176382-1936.jpg?t=st=1715610635~exp=1715614235~hmac=bff9ae4f6c10439874ff4b6edaf019a52eff5e2b1018153444b5b7669e9773b6&w=740' },
    { id: 5, name: 'Modern Chair Isolated', price: 399, image: 'https://img.freepik.com/free-psd/comfortable-modern-chair-isolated_176382-1213.jpg?t=st=1715610753~exp=1715614353~hmac=68eba9906952c65cb1123ea67ab1acead5a8a3249e5104223ed9c063c1804802&w=740' },
    { id: 5, name: 'White Sofa', price: 399, image: 'https://img.freepik.com/free-psd/realistic-white-sofa-mockup_176382-547.jpg?t=st=1715611261~exp=1715614861~hmac=cf98470382c6e93a22e5180fce83009eca93e30fa1d52b77cc6b126de1ae5015&w=740' },
    { id: 5, name: 'Coffee Table', price: 399, image: 'https://img.freepik.com/premium-photo/armchair-isolated-white-background-3d-rendering_672982-2009.jpg?w=740' },
];

const FurniturePage = () => {
    const [cart, setCart] = useState([]);
    const [quantities, setQuantities] = useState({});
    const [selectedProduct, setSelectedProduct] = useState(null);



   
      

    // Function to add item to cart
    const handleAddToCart = (item) => {
        const updatedCart = [...cart, { ...item, quantity: quantities[item.id] || 1 }];
        setCart(updatedCart);
        addToCart(updatedCart); // Callback to update global cart state
        window.alert(`${item.name} has been added to your cart.`);
    };

    // Function to show more information about a product
    const showProductDetails = (productId) => {
        const product = furnitureData.find(item => item.id === productId);
        setSelectedProduct(product);
    };

    // Function to close product details
    const closeProductDetails = () => {
        setSelectedProduct(null);
    };

    // Function to increase quantity for a product
    const increaseQuantity = (productId) => {
        setQuantities({
            ...quantities,
            [productId]: (quantities[productId] || 0) + 1
        });
    };

    // Function to decrease quantity for a product
    const decreaseQuantity = (productId) => {
        if (quantities[productId] > 0) {
            setQuantities({
                ...quantities,
                [productId]: quantities[productId] - 1
            });
        }
    };
 

    
    



    return (
        <div>
           

            <div className={styles.fbg}>
                <Header />
                <div className="hero">
                    <div className="hero-text">
                       <h1>VIP DESIGNS<br /> Furniture Layout</h1>
                    </div>
                </div>
            </div>

            {/* <GetStartedPage/> */}
        
            <div className={styles.productlist}>
                {furnitureData.map((item) => (
                    <div key={item.id} className={styles.product}>
                        <Image src={item.image} alt={item.name} width={200} height={200} className={styles.productimage} />
                        <h3>{item.name}</h3>
                        <p>Price: ${item.price}</p>
                        <div className={styles.productbtn}>
                            <div className={styles.cartbtn}>
                                <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
                                {/* <button onClick={() => showProductDetails(item.id)}>More Info</button> */}
                            </div>
                            <div className={styles.qbtn}>
                                <button onClick={() => decreaseQuantity(item.id)}>-</button>
                                <span>{quantities[item.id] || 0}</span>
                                <button onClick={() => increaseQuantity(item.id)}>+</button>
                            </div>
                        </div>
                    </div>

                ))}
            </div>
            

            {selectedProduct && (
                <div className={styles.productdetails}>
                    <h2>{selectedProduct.name}</h2>
                    <Image src={selectedProduct.image} alt={selectedProduct.name} width={200} height={300} className={styles.productdetailsimage}/>
                    <p>Price: ${selectedProduct.price}</p>
                    <p>Description: {selectedProduct.description}</p>
                    <button onClick={closeProductDetails}>Close</button>
                </div>
            )}
         {/* <App/> */}
         {/* <Related/> */}
         <Footer />
        </div>
    );
};
// const addToCart = (product) => {
//     // Add the product to the cart
//     setCart([...cart, product]);
//     // setQuantities((prev) => ({ ...prev, [product.id]: 1 }));
// };

// export { addToCart };


export default FurniturePage;
