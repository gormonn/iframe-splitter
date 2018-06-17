Iframe Splitter is a simple tool to divide computer screen into multiple sections to be displayed on TV dashboard. The tool is based on library [angular-split](https://github.com/bertrandg/angular-split) for area resizing by dragging. Configuration data is stored in browsers local storage.

[![CircleCI](https://circleci.com/gh/onebesky/iframe-splitter.svg?style=svg)](https://circleci.com/gh/onebesky/iframe-splitter)

# Features

* Splits screen in any way
* Configurable zoom per frame
* Configurable auto-refresh per frame
* Easy full-screen mode
* Free


Demo: [https://iframe-splitter.firebaseapp.com](https://iframe-splitter.firebaseapp.com)

<img src="docs/edit.png?raw=true" width="425"/> <img src="docs/display.png?raw=true" width="425"/> 

## Limitations

Some websites don't allow their content to be rendered in an iframe by sending **X-Frame-Options** header. However, this limitation can sometimes be resolved by using dedicated embedable url. Youtube embedable url example: https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1

You can also install [chrome extension](https://chrome.google.com/webstore/detail/ignore-x-frame-headers/gleekbfjekiniecknbkamfmkohkpodhe) that allows any page to be rendered in iframe.

## Development

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Hosting
Project demo is hosted on Google Firebase.

Install firebase tools
```bash
npm install -g firebase-tools
firebase login
firebase init
```

## Deployment
```
ng build --prod
firebase deploy
```
