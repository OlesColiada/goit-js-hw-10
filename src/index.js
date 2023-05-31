import { fetchBreeds, fetchCatByBreed} from "./js/cat-api";
import SlimSelect from 'slim-select';
import Notiflix from 'notiflix';

const selectBreed = document.querySelector("select.breed-select");
const loadingData = document.querySelector('.loader');
const errorResult = document.querySelector('.error');
const catInfoField = document.querySelector('.cat-info');

new SlimSelect({
  select: 'selectBreed'
});

selectBreed.classList.add('hidden');
errorResult.classList.add('hidden');

const addNewCard = function(catBreed){
    catInfoField.innerHTML = `<img src='${catBreed[0].url}' class='cat-image'>
    <div>
    <h2>${catBreed[0].breeds[0].name}</h2>
    <p>${catBreed[0].breeds[0].description}</p>
    <p><span class='temper'>Temperament: </span>${catBreed[0].breeds[0].temperament}</p>
    </div>`;
};

const changeBreed = function(){
    catInfoField.innerHTML = '';
    selectBreed.classList.add('hidden');
    loadingData.classList.remove('hidden');
    errorResult.classList.add('hidden');
    
    const catId = selectBreed.value;
    
    fetchCatByBreed(catId)
    .then((data) => {
        addNewCard(data);
        selectBreed.classList.remove('hidden');
    })
    .catch(()=> {
        errorResult.classList.remove('hidden');
        Notiflix.Notify.failure('Something went wrong!!! Error 2');})
        .finally(()=> loadingData.classList.add('hidden'));
    };
    
fetchBreeds()
    .then(breeds => {
        selectBreed.classList.remove('hidden');
        loadingData.classList.remove('hidden');
        errorResult.classList.add('hidden');
        
        breeds.forEach(breed => {
        const option = new Option(breed.name, breed.id);
        selectBreed.appendChild(option);
        });
    })
    .catch(()=> {
            errorResult.classList.remove('hidden');
            Notiflix.Notify.failure('Something went wrong!!! Error 1');})
    .finally(() => loadingData.classList.add('hidden'));

selectBreed.addEventListener('change', changeBreed);