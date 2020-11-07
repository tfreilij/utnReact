import firebase from '../Config/firebase'

export function getUsers() {
    alert("getUsers()")
}

export function createUser(name,surname,email,password) {

    

    firebase.auth.createUserWithEmailAndPassword(email, password)
    .then(data => {
        const userId = data.user.uid;
      
          firebase.db.collection("users").add({
            name: name,
            surname: surname,
            email: email,
            userId: userId
        })
        .then( data => {
               console.log("user added ",data );
        })
        .catch( error => {
              console.log("user error", error);
        })
    })
    .catch( err => {
        console.log("hubo error", err);
 
    })
    
 
}

