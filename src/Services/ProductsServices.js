import instance from '../Config/axios'

export function getProducts() {
    return instance.get("/posts")
}

export function getProduct(idProduct) {
    return instance.get("/posts/"+idProduct)
}

