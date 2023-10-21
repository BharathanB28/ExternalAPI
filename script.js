const loadStoreAPI = () =>{
    fetch("https://fakestoreapi.com/products")
    .then(responce => responce.json())
    .then(result => console.log(result))
}

loadStoreAPI();