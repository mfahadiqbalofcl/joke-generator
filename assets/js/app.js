const jokeSetup = document.getElementById('setup');
const jokePunchline = document.getElementById('punchline');
const jokeDiv = document.querySelector('.joke');
const jokeButton = document.getElementById('new-joke');
const languageSelect = document.getElementById('language');

const showLoading = () => {
  jokeButton.textContent = 'Loading...';
};

const hideLoading = () => {
  jokeButton.textContent = 'New Joke';
};

const fetchJoke = async () => {
  try {
    showLoading();
    const language = languageSelect.value;
    const response = await fetch(`https://v2.jokeapi.dev/joke/Programming?type=single&lang=${language}`);
    const data = await response.json();
    jokeSetup.textContent = data.joke;
    jokePunchline.textContent = '';
    jokeDiv.classList.remove('joke-show');
    setTimeout(() => {
      jokePunchline.textContent = data.answer;
      jokeDiv.classList.add('joke-show');
      hideLoading();
    }, 2000);
  } catch (error) {
    console.log(error);
  }
};

fetchJoke();

jokeButton.addEventListener('click', () => {
  fetchJoke();
});
