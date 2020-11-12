import instance from '../Config/axios'
import firebase from '../Config/firebase';



function getProductsFromAPI() {
    return instance.get("/posts")
}

function getProductFromAPI(idProduct) {
    return instance.get("/posts/"+idProduct)
}

export function getProduct(idProduct) {

    return firebase.db.collection("products").doc(idProduct).get();
    
}



export function getProducts() {

    return firebase.db.collection("products").get()
}