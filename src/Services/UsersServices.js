import instance from '../Config/firebase'

export function getUsers() {
    return instance.get("/posts")
}

export function createUser(user) {
    console.log(user)
}

