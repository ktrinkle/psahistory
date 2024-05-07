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

```json
  {
    "title": "<picture title>",
    "src": "<file name, no path>",
    "tags": "<page tag>",
    "alt": "",
    "imgDir": "./src/images/<directory>/",
    "outputDir": "/images/<directory>",
    "pathToRoot": "../../..",
    "credit": ""
  }
```

Once the image data is supplied within the data file, add a page to use the data:

```
---
title: 1996 PSA Picnic
eleventyNavigation:
  key: 1996 PSA Picnic
  order:
  parent: PSA Picnic
layout: gallery.njk
permalink: "oldtimer/psa_picnic/1996-psa-picnic/index.html"
meta_desc: "Photos from the 1996 PSA Picnic, held in San Diego, CA"
url: "https://www.psa-history.org/oldtimer/psa_picnic/1996-psa-picnic/index.html"
collectionName: "<same name as data file>"
tags: "<same tag as parent>"
---
```

## Future tasks

- Add Github actions for automated build and deploy to Cloudflare Pages.

## Deployment setup

Deployments require one Azure secret to be established in Github Action secrets. The secret is named AZURE_CREDENTIALS, and is in the following format:

```json
{
  "clientId": "",
  "clientSecret": "",
  "subscriptionId": "",
  "tenantId": "",
  "activeDirectoryEndpointUrl": "https://login.microsoftonline.com",
  "resourceManagerEndpointUrl": "",
  "activeDirectoryGraphResourceId": "",
  "sqlManagementEndpointUrl": "",
  "galleryEndpointUrl": "",
  "managementEndpointUrl": ""
}
```

Only the first four values are required for login. The remainder are included as part of scaffolding.