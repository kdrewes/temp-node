// npm - global command, comes with node
// npm --version

// local dependence - use it only in this particular project
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <packageName>
// sudo npm install -g <packageName> (mac)

// package.json - manifest file (stores important info about project/package)
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

const l = require('lodash')
const items = [1,[3,5],[5,8,7]]
const newItems = l.flattenDeep(items);
console.log(newItems)