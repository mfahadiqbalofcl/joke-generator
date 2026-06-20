# Joke Generator

A tiny, dependency-free web app that fetches and displays random programming jokes. Pick a language, hit the button, and the punchline reveals after a short suspense delay.

Live, no build step, no API key required — it calls the free public [JokeAPI](https://jokeapi.dev/).

## Features

- Random programming jokes on demand
- Language selector (English, German, Spanish)
- Animated punchline reveal
- Social share buttons (Facebook / Twitter / Reddit — currently placeholder links)
- Pure HTML, CSS, and vanilla JavaScript — no framework, no bundler

## Tech

- HTML5
- CSS3
- Vanilla JavaScript (Fetch API, async/await)
- [JokeAPI v2](https://v2.jokeapi.dev/) — public, keyless joke endpoint
- [Font Awesome 5](https://fontawesome.com/) (via CDN) for the share icons

## Getting started

No build tools needed. Either:

**Open directly**
- Clone the repo and open `index.html` in your browser.

```bash
git clone https://github.com/mfahadiqbalofcl/joke-generator.git
cd joke-generator
open index.html   # or just double-click the file
```

**Or serve locally** (recommended, avoids any file:// quirks):

```bash
# Python 3
python3 -m http.server 8000
# then visit http://localhost:8000
```

## How it works

`assets/js/app.js` sends a request to:

```
https://v2.jokeapi.dev/joke/Programming?type=single&lang=<language>
```

and renders the returned joke. The selected language comes from the dropdown.

## Project structure

```
.
├── index.html
├── assets/
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── app.js
├── LICENSE
└── README.md
```

## Screenshot

<!-- Add a screenshot of the app here, e.g.: -->
<!-- ![Joke Generator screenshot](assets/screenshot.png) -->
_Screenshot coming soon._

## License

Released under the [MIT License](LICENSE). © 2023 M Fahad Iqbal.