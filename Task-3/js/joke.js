lucide.createIcons();

const getJokeBtn = document.getElementById('get-joke-btn');
const jokeTextEl = document.getElementById('joke-text');
const jokePunchlineEl = document.getElementById('joke-punchline');
const jokeLoader = document.getElementById('joke-loader');

const apiUrl = 'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart';

async function getJoke() {
    jokeLoader.classList.remove('hidden');
    jokeTextEl.classList.add('hidden');
    jokePunchlineEl.classList.add('hidden');
    getJokeBtn.disabled = true;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Joke transmission failed!');
        }
        const data = await response.json();
        
        if (data.error) {
            throw new Error('Joke API returned an error.');
        }

        jokeTextEl.textContent = data.setup;
        jokePunchlineEl.textContent = data.delivery;

    } catch (error) {
        console.error("Error fetching joke:", error);
        jokeTextEl.textContent = "Oops! The cosmic joke transmitter seems to be offline.";
        jokePunchlineEl.textContent = "Please try again later.";
    } finally {
        jokeLoader.classList.add('hidden');
        jokeTextEl.classList.remove('hidden');
        jokePunchlineEl.classList.remove('hidden');
        getJokeBtn.disabled = false;
    }
}

getJokeBtn.addEventListener('click', getJoke);
