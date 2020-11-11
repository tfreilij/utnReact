import React, {useState, useEffect} from 'react';
import ProductoDisplay from './ProductDisplay';

function Product(props) {

    const [product,setProduct] = useState({});
    const [loading,setLoading] = useState(true);

    let productId = props.match.params.id
    console.log(productId);

    useEffect(
        () => {
            
            fetch("https://jsonplaceholder.typicode.com/posts/"+productId)
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
                <ProductoDisplay product={product} button={true}/> 
            </div>
        )     
    }
       

}

export default Product;