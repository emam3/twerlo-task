# Quiz - twerlo task

It's a quiz which gives you ten words and you've to choose the type of the words.

There's only four choices for every quesion : 'adverb', 'verb', 'noun' and 'adjective' .

If the answear is right, the background color will be converted to green, and if it is not, the backgound color will be converted to red

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install required libraries for both front-end and back-end.

```bash
npm install
```

## Build

After installing, run this command in the terminal at the back-end folder.

```bash
node --experimental-specifier-resolution=node --loader ts-node/esm index.ts
```

and this command for the front-end.
```bash
ng serve
```

## Back-end logic

For the first request, the words are divided by their types in JSON files, and then we choose words randomly from every file and then we send an array of ten random words.

Note : JSON files are created after the first request only, any get request will get the data from the created files.

## Project UI

![Practice screen](https://images2.imgbox.com/09/e6/LnlWOQn5_o.png)

![Rank screen](https://images2.imgbox.com/ca/6b/yVmcEBK6_o.png)



## Used technologies

<p align="left">
<a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/typescript-colored.svg" width="36" height="36" alt="TypeScript" /></a>
<a href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg" width="36" height="36" alt="HTML5" /></a>
<a href="https://www.w3.org/TR/CSS/#css" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg" width="36" height="36" alt="CSS3" /></a>
<a href="https://angular.io/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/angularjs-colored.svg" width="36" height="36" alt="Angular" /></a>
<a href="https://nodejs.org/en/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg" width="36" height="36" alt="NodeJS" /></a>
<a href="https://expressjs.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/express-colored.svg" width="36" height="36" alt="Express" /></a>
</p>

