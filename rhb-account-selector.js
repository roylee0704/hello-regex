import fs from 'fs';


const s = fs.readFileSync('rhb-account-selector.in', 'utf-8').trim();

const re = new RegExp(/\s+(\d[\d|-]+)\s+/);

const [a, accountId] = s.match(re);


console.log(a, accountId);