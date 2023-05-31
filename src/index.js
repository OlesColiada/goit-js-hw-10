// import { fetchBreeds, fetchCatByBreed} from "./js/cat-api";
// import SlimSelect from 'slim-select';
// const selectBreed = document.querySelector(".breed-select");
// const loadingData = document.querySelector('.loader');
// const errorResult = document.querySelector('.error');
// const catInfoField = document.querySelector('.cat-info');

// selectBreed.id = 'single'
// const slimSelect = new SlimSelect({
//     select: '#single'
//   })

// window.addEventListener('load', function () {
//     selectBreed.classList.add('hidden')
        
//     fetchBreeds(loadingData, errorResult)
//         .then(breeds => {
//         selectBreed.classList.remove('hidden')
        
//         breeds.forEach(breed => {
//         const option = new Option(breed.name, breed.id);
//         selectBreed.appendChild(option)})
//         })
// });

// selectBreed.addEventListener('change', function(){
//     const selectedBreedOfCat = selectBreed.value;
//     catInfoField.innerHTML = '';
//     selectBreed.classList.add('hidden')
    
//     fetchCatByBreed(selectedBreedOfCat, loadingData, errorResult)
//         .then(catBreed => {
//         selectBreed.classList.remove('hidden')

//         console.log(catBreed[0].breeds[0])
//         //Insert Image
//         const image = document.createElement('img')
//         image.src = catBreed[0].url
//         image.classList.add('cat-image')
//         catInfoField.appendChild(image)
        
//         //Insert title
//         const title = document.createElement('h2')
//         title.textContent = catBreed[0].breeds[0].name
//         catInfoField.appendChild(title)

//         //Insert description
//         const textDescr = document.createElement('p')
//         textDescr.textContent = catBreed[0].breeds[0].description
//         catInfoField.appendChild(textDescr)

//         //Insert temperament
//         const temperDescr = document.createElement('p')
//         temperDescr.textContent = 'Temperament: ' + catBreed[0].breeds[0].temperament
//         catInfoField.appendChild(temperDescr)
//         })

// })

import { fetchBreeds, fetchCatByBreed} from "./js/cat-api";
import SlimSelect from 'slim-select';
const selectBreed = document.querySelector(".breed-select");
const loadingData = document.querySelector('.loader');
const errorResult = document.querySelector('.error');
const catInfoField = document.querySelector('.cat-info');

const slimSelect = new SlimSelect({
    select: selectBreed
})

window.addEventListener('load', function () {
    selectBreed.classList.add('hidden')
        
    fetchBreeds(loadingData, errorResult)
        .then(breeds => {
        selectBreed.classList.remove('hidden')
        
        breeds.forEach(breed => {
        const option = new Option(breed.name, breed.id);
        selectBreed.appendChild(option)})
        })
});

selectBreed.addEventListener('change', function(){
    const selectedBreedOfCat = selectBreed.value;
    catInfoField.innerHTML = '';
    selectBreed.classList.add('hidden')
    
    fetchCatByBreed(selectedBreedOfCat, loadingData, errorResult)
        .then(catBreed => {
        selectBreed.classList.remove('hidden')

        //Insert Image
        const image = document.createElement('img')
        image.src = catBreed[0].url
        image.classList.add('cat-image')
        catInfoField.appendChild(image)
        
        //Insert title
        const title = document.createElement('h2')
        title.textContent = catBreed[0].breeds[0].name
        catInfoField.appendChild(title)

        //Insert description
        const textDescr = document.createElement('p')
        textDescr.textContent = catBreed[0].breeds[0].description
        catInfoField.appendChild(textDescr)

        //Insert temperament
        const temperDescr = document.createElement('p')
        temperDescr.textContent = 'Temperament: ' + catBreed[0].breeds[0].temperament
        catInfoField.appendChild(temperDescr)
        })

})