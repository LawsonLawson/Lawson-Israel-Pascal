This repository contains the source code for my personal developer portfolio.
I built it as a place to introduce myself, share selected projects, show the
tools I work with, and make it easier for people to get in touch.

The interface takes inspiration from a desktop terminal. The main content is
organised into tabs, with a layout that adjusts for smaller screens.

## What is included

- **About:** A short introduction and the areas of software development I am interested in.
- **Projects:** A selection of projects with links to their repositories.
- **StackTrace:** My experience, education, and the technologies displayed in the portfolio.
- **Contact:** A contact section with name, email, and message fields.
- **Responsive layout:** A sidebar layout on larger screens and a mobile-friendly layout on smaller screens.

The tabs can also be opened directly using the page URL hash. For example,
adding `#projects` to the URL opens the Projects section.

## Built with

- HTML5 — page structure and content
- CSS3 — layout, styling, and responsive behaviour
- JavaScript — tab navigation and URL hash handling

The fonts and image assets used by the page are stored locally in the `assets
directory. There is no package manager or build tool required for the current version.

## Project structure

```text
Lawson-Israel-Pascal/
├── assets/
│   ├── fonts/
│   └── images/
├── index.html
├── script.js
├── style.css
└── README.md
```

## Run locally

This is a static website for now, so it can be viewed directly in a browser.

1. Clone the repository:

   ```bash
   git clone https://github.com/LawsonLawson/Lawson-Israel-Pascal.git
   ```

2. Move into the project directory:

   ```bash
   cd Lawson-Israel-Pascal
   ```

3. Open `index.html` in your browser.

You can also use a local development server if you prefer.
No dependency installation or compilation step is needed.

## A note about the contact form

The current source includes the contact form's HTML and styling, but it does
not include JavaScript or a backend endpoint to process form submissions yet.
The form is therefore a front-end interface only in this version.


- [Site URL](https://lawsonlawson.github.io/Lawson-Israel-Pascal)

---

Built by Lawson Israel Pascal.
