import fs from 'fs';
import gamesHTML from './generate.js';

let html = fs.readFileSync('./local.html', 'utf-8');
let css = fs.readFileSync('./styles.css', 'utf-8');
let js = fs.readFileSync('./script.js', 'utf-8');
let jsDays = fs.readFileSync('./daysSinceLaunch.js', 'utf-8');

// remove daysSinceLaunch() import and directly add it to the end of the script
// (this is kinda nuts, I know)
js =
  js.replace(`import daysSinceLaunch from './daysSinceLaunch.js';`, '') +
  jsDays.replace('export default', '');

html = html
  // inline styles.css
  .replace(
    '<link rel="stylesheet" href="styles.css" />',
    `<style>${css}</style>`
  )

  // remove local.js
  .replace('<script type="module" src="local.js"></script>', '')

  // inline script.js
  .replace(
    '<script type="module" src="script.js"></script>',
    `<script>${js}</script>`
  )

  // inject games HTML
  .replace('<br id="placeholder" />', gamesHTML());

fs.writeFileSync('./index.html', html);

// Building and deploying:

// 1. update version number in local.html
// 2. node build.js
// 3. commit both local.html and newly generated index.html with message “version X.Y.Z”
// 4. git push
