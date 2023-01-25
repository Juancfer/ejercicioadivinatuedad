const guessButton = document.getElementById('guessButton');
const fieldName = document.getElementById('name')
const text = document.getElementById('text')

const getAge = async () => {
    const URL = `https://api.agify.io?name=${fieldName.value}`;
    const response = await fetch(URL);
    const data = await response.json();
    text.textContent = data.age
}

guessButton.addEventListener('click', getAge);
