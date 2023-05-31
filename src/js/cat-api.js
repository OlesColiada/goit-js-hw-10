export function fetchBreeds(loadingData, errorResult){
    const url = 'https://api.thecatapi.com/v1/breeds?api_key=live_1QAZs6G0EQE4ZZLNX3i4yvxoBxgk3G0cSbVrUbXdoi7nNFu1nNCIo3sl3stE0EjO';
    loadingData.classList.remove('hidden')
    errorResult.classList.add('hidden')
    
    return fetch(url)
        .then(r => r.json())
        .catch(() => errorResult.classList.remove('hidden'))
        .finally(() => loadingData.classList.add('hidden'))
}

export function fetchCatByBreed(breedId, loadingData, errorResult){
    const options = {
        headers: {'x-api-key' : 'live_1QAZs6G0EQE4ZZLNX3i4yvxoBxgk3G0cSbVrUbXdoi7nNFu1nNCIo3sl3stE0EjO' }
    };
    const url =`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`;
    loadingData.classList.remove('hidden')
    errorResult.classList.add('hidden')
    
    return fetch(url, options)
        .then(r => r.json())
        .catch(()=> errorResult.classList.remove('hidden'))
        .finally(()=> loadingData.classList.add('hidden'))
    }   
