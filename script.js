const button = document.querySelector('#button');

button.addEventListener('click', () => {
    fetch('http://localhost:8000')
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log('Erro na requisição: ', error);
    })
})