import fs from 'fs';

const re = new RegExp(/(\d+) (.+?) bags?[,.]/g);
const s = fs.readFileSync('aoc.in', 'utf-8').trim();
// safe
let m;
do {
    m = re.exec(s);
    if (m) {
        console.log(m);// m is same as matchAll output
    }
} while (m);


// es-9
console.log([...s.matchAll(re)]);








//





// interestingly, this has group within a group. Notice the outputs capture 
// every single groups (including the one in the inner!)
const tests = [
    'Mr. Scahafer',
    'Mr Smith',
    'Ms Davis',
    'Mrs. Robinson'];



tests.forEach((t) => {

    const matches = t.match(/(M(r|rs|s)\.?)\s(\w+)/);
    const [, title, , name] = matches;

    console.log(matches)
    console.log(title, name)


});