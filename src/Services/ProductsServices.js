import instance from '../Config/axios'
import firebase from '../Config/firebase';



function getProductsFromAPI() {
    return instance.get("/posts")
}

function getProductFromAPI(idProduct) {
    return instance.get("/posts/"+idProduct)
}

export function getProduct(idProduct) {

    const docRef = firebase.db.collection("cities").doc(idProduct);
    return docRef.get()
}



export function getProducts() {

    return firebase.db.collection("products").get()
}