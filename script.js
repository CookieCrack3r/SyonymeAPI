
async function getSynonyms(){

    let url = 'https://pokeapi.co/api/v2/pokemon?limit=151&offset=0';
    let response = await fetch(url);
    let responseAsJson = await response.json();

    let results = responseAsJson['results'];
    console.log('response is', responseAsJson);
    renderSynsets(results)
}

function renderSynsets(results){
    let container = document.getElementById('container');
    container.innerHTML = `<div> Es wurden <b> ${results.length} </b> Synonyme geladen. </div>`;

    for (let index = 0; index < results.length; index++) {
        const element = results[index];

        container.innerHTML += `${element['name']}<br>`;
    }


}