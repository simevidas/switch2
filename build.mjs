import fs from 'fs';

let html = fs.readFileSync('./local.html', 'utf-8');
let css = fs.readFileSync('./styles.css', 'utf-8');
let js = fs.readFileSync('./script.js', 'utf-8');

html = html
  .replace(
    '<link rel="stylesheet" href="styles.css" />',
    `<style>${css}</style>`
  )
  .replace('<script src="script.js"></script>', `<script>${js}</script>`);

fs.writeFileSync('./index.html', html);

// Building and deploying:

// 1. update version number in local.html
// 2. node build.mjs
// 3. commit both local.html and newly generated index.html with message “version X.Y.Z”
// 4. git push
