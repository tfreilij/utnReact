import React from 'react';
import {useState, useEffect} from 'react';
import ProductoDisplay from './ProductDisplay';


function Products() {


    const [product,setProduct] = useState({});
    const [loading,setLoading] = useState(true);

    let productId = 1;
    console.log(productId);

    useEffect(
        () => {
            fetch("https://jsonplaceholder.typicode.com/posts/1"+productId)
            .then(res => res.json() )
            .then(result => {
                    console.log(result)
                    setProduct(result);
                    setLoading(false);
                    
            },
                (error) => { console.log("hubo un error" , error)
            }) 
        }, 
        [productId]
    );
        
  
    if ( loading ) {
        return (
            <div> Loading .... </div>

        )    
    }
    else {
         return (
            <div> 
                <ProductoDisplay product={product}/>
                <ProductoDisplay product={product}/> 
                <ProductoDisplay product={product}/>  
            </div>
        )     
    }
       

}

export default Products;