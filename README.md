# HTML Boilerplate 
This is a boilerplate for HTML Project.

## Getting Started
Set up the project on your local with these step:

### 1. Clone the repo on your PC

```git clone https://github.com/kashanshah/html-boilderplate.git```

### 2. Install dependencies

```npm install```
or
```yarn install```

### 4. Run project by starting dev server

```npm run serve```
or
```yarn server```

### 3. Start development

```npm run start```
or
```yarn start```

> If you are running the project on Windows: make sure to set your end of file settings as follows to avoid difference in EOL:
>
> ```git config core.autocrlf false```

### 4. Create build
The build will be created in `dist` folder by running the following command:
```npm run build```
or
```yarn build```

## Build and Test
To execute the tests, run: ```npm run test```.

> Note: Currently there are no test cases added.

## Contribute
Create a new branch from `development`. Commit your code in that branch. Create a pull request from your branch to the `main`. Add relevent reviewers and publish that pull request.

### Packages
- [Gulp 4](https://gulpjs.com/)
- [Webpack 5](https://www.npmjs.com/package/webpack)
- [Webpack Dev Server](https://github.com/webpack/webpack-dev-server)
- [SASS](https://github.com/sass/dart-sass)
- [Bootstrap 4](https://getbootstrap.com/docs/4.6.2/getting-started/introduction/)

### Understand the Repo

```
.
├── README.md
├── dist
    .
    ├── assets
        ├── css
        ├── fonts
        ├── images
        ├── js
    |── index.html
    └── index.js
├── node_modules
├── src
    .
    ├── assets
    │   ├── fonts
    │   ├── images
    │   ├── js
    │   ├── styles
    ├── index.html
    └── index.js
├── .editorconfig
├── .prettierrc
├── gulpfile.mjs
├── package.json
├── package-lock.json
├── README.md
└── webpack.config.js
```

### Have questions?
If you're not sure about anything, kindly reach out anyone in the frontend development team member to help you.
