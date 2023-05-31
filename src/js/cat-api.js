export function fetchBreeds(){
    const url = 'https://api.thecatapi.com/v1/breeds?api_key=live_1QAZs6G0EQE4ZZLNX3i4yvxoBxgk3G0cSbVrUbXdoi7nNFu1nNCIo3sl3stE0EjO';
    
    return fetch(url)
        .then(r => r.json())
        .catch((error) => {console.log(error)})
}

export function fetchCatByBreed(catId){
    const options = {
        headers: {'x-api-key' : 'live_1QAZs6G0EQE4ZZLNX3i4yvxoBxgk3G0cSbVrUbXdoi7nNFu1nNCIo3sl3stE0EjO' }
    };
    const url =`https://api.thecatapi.com/v1/images/search?breed_ids=${catId}`;
    
    return fetch(url, options)
        .then(r => r.json())
        .catch(()=> console.log(error))}