import fs from 'fs';


const s = fs.readFileSync('rhb-account-selector.in', 'utf-8').trim();

const re = new RegExp(/\s+(\d[\d|-]+)\s+/);

console.log('account id:', s.match(re)[0]);