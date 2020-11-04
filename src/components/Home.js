import React from 'react';
import {useState, useEffect} from 'react';
import ProductDisplay from './ProductDisplay';
import {getProducts} from '../Services/ProductsServices'; 
import { CardDeck } from 'react-bootstrap';


function Products() {


    const [products,setProducts] = useState([]);
    const [loading,setLoading] = useState(true);


    useEffect(
        () => {
            
            let result = getProducts()
            .then( result => {
                    console.log("result", result);
                    let data = result.data;
                    if ( data.length > 0) {
                        let firstFourProducts = data.slice(0,4);

                        setProducts(firstFourProducts);
                        setLoading(false);
                    }
                }
            );
                   
            /*
            fetch("https://jsonplaceholder.typicode.com/posts/")
            .then(res => res.json() )
            .then(result => {
                    
                    let firstFourProducts = result.slice(0,4);

                    setProducts(firstFourProducts);
                    setLoading(false);
                    
            },
                (error) => { console.log("hubo un error" , error)
            }) 
            */
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
                <CardDeck>
                    {products.map( product => <ProductDisplay product={product} button={false}/>)}
               </CardDeck>
            </div>
        )     
    }


}

export default Products;