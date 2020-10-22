import React from 'react';
import {useState, useEffect} from 'react';
import ProductDisplay from './ProductDisplay';



function Products() {


    const [products,setProducts] = useState([]);
    const [loading,setLoading] = useState(true);


    useEffect(
        () => {
            fetch("https://jsonplaceholder.typicode.com/posts/")
            .then(res => res.json() )
            .then(result => {
                    
                    let firstFourProducts = result.slice(0,4);

                    setProducts(firstFourProducts);
                    setLoading(false);
                    
            },
                (error) => { console.log("hubo un error" , error)
            }) 
        }, 
        []
    );
        
  
    if ( loading ) {
        return (
            <div> Loading .... </div>

        )    
    }
    else {
         return (
            <div>
               {products.map( product => <ProductDisplay product={product} button={false}/>)}
                  
            </div>
        )     
    }
/*
/{products.map( product )}
                <ProductoDisplay product={product}/>
                <ProductoDisplay product={product}/> 
                <ProductoDisplay product={product}/>
*/

}

export default Products;