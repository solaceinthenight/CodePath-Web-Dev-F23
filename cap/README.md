# Cap Exemplar Lab

## Overview

This lab is an app that uses the ApiFlash API to take screenshots of a given website with a variety of parameters. Users can type in different attributes they would like for their screenshot, including the website, image format, and width and height of the screenshot. There is also a gallery of all screenshots taken before.

There is also the stretch goal for this lab included, which makes another query for the APIFlash quota, so users can also see how many remaining queries they have with this API.

## Project Demo

🌐 [See the project deployed here!](https://symphonious-piroshki-28238c.netlify.app/)

![demo with all features](readme_demo.gif)

## Setup

### Dependencies

* [Vite](https://www.npmjs.com/package/vite)
* [Vite React Plugin](https://www.npmjs.com/package/@vitejs/plugin-react)
* [React](https://www.npmjs.com/package/react)
* [React-DOM](https://www.npmjs.com/package/react-dom)

---

### Install Dependencies

Before installing dependiencies, you will need `node` and `npm` installed globally on your machine by installing  [NodeJS](https://nodejs.org/en/download/) onto your machine.

To install the dependencies, run:

```sh
npm install
```

### Run Cap

In the repo directory, run the following in your terminal:

```sh
npm run dev

```

Visit the web application in the browser

```console
http://localhost:5173/
```

### Deploy Cap

To deploy this application on Netlify, run the following in the repo directory:

```sh
npm install
npm run build

```

Upload the generated `dist` file to Netlify at:

```html
https://app.netlify.com/drop
```

<br/>

---

*Last Updated: December 2022*
