const path = require('path');


path.basename('c://tenp\\myfile.html');

const a1 = path.basename('c://tenp\\myfile.html');
const a2 = path.basename('c://tenp\\myfile.html','.html');

console.log(a1);
console.log(a2);
const a3 = path.dirname('c://tenp\\myfile.html');
console.log(a3)