# The PSA History Page

This is the source repo for the [PSA History page](https://www.psa-history.org/).

This site is maintained using Eleventy using the following plugins:
- eleventy-plugin-metagen
- eleventy-navigation
- eleventy-img
- terser
- clean-css
- bootstrap 5.3

The original template was from [Eleventy Photo Gallery](https://github.com/tannerdolby/eleventy-photo-gallery) but has been highly modified.

Fonts used can be found in the following repos:

## Getting Started

- Ensure Node 20 is installed on your machine.
- Clone the project and install packages with `npm i`.



## Local Setup
1. Install Node 20 locally.
2. Clone this repo: `git clone https://github.com/tannerdolby/eleventy-photo-gallery.git`
3. Navigate to your local copy of the project: `cd eleventy-photo-gallery`
4. Install dependencies: `npm install`
5. Build: `npm run build`
6. Serve locally: `npm run start` or `npm run dev`

## Usage
Add images to a folder in your project and then supply image metadata in a file in the data directory:

```
{
    "title": "Terrace with green plants on night street",
    "date": "October 20, 2020",
    "credit": "Photo by Aldiyar Seitkassymov",
    "linkToAuthor": "https://www.pexels.com/photo/terrace-with-green-plants-on-night-street-3100835/",
    "src": "terrace-window.jpg",
    "alt": "Terrace outside shop window with green plants and pink tree on night street",
    "widths": [320, 640, 1024],
    "sizes": "(min-width: 450px) 33.3vw, 100vw",
    "class": "my-img",
    imgDir: "./src/images/"
}
```

Once the image data is supplied within the data file, add a page to use the data:

## Future tasks

- Add Github actions for automated build and deploy to Azure Storage.
