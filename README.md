# GDG POA

### Prerequisites

Before start, please make sure that you have all requirements installed
* [Node](https://nodejs.org/en/) - JavaScript runtime built on Chrome's V8 JavaScript engine

### How to install
Clone tihs repo and:

```
npm install or yarn
```

### Development (Client-side only rendering)
```
run npm run start
```
which will start ng serve
### Production (also for testing SSR/Pre-rendering locally)
Compiles your application and spins up a Node Express to serve your Universal application on http://localhost:4000.
```
npm run build:ssr && npm run serve:ssr
```


 Compiles your application and prerenders your applications files, spinning up a demo http-server so you can view it on http://localhost:8080 Note: To deploy your static site to a static hosting platform you will have to deploy the dist/browser folder, rather than the usual dist
```
npm run build:prerender && npm run serve:prerender
```

## Built With

* [Angular](https://angular.io/) - The web framework used
* [TypeScript](https://www.typescriptlang.org/) - Language
* [Angular Material](https://material.angular.io/) - Front-end component-based framework

# Authors
* **David Gonçalves** - *Initial work* - [Github](https://github.com/davidsgoncalves)
* **Filipe Nunes** - *Initial work* - [Github](https://github.com/ksdrof500)