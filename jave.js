const path=require("path")
const os=require("os")
console.log(path.sep);
console.log(path.delimiter);
// common methhod in path modules
// path.basename(path, [,ext])
// path.dirname(path)
// path.extname(path)
// path.format(pathObj)
// path.isAbsolute(path)
// path.join(...path)
// path.normalize(path)
// path.parse(path)
// path.relative(from, to)
// path.resolve(...path)
console.log(path.extname('index.html'));
console.log(path.extname('app.js'));
console.log(path.extname('node.js.md'));
let pathToFile = path.format({
    dir: 'public_html/home/js',
    base: 'app.js'
});
let currentOS = {
    name: os.type(),
    architecture: os.arch(),
    platform: os.platform(),
    release: os.release(),
    version: os.version()
};
const EventEmitter = require('events');

const emitter = new EventEmitter();

emitter.on('saved',  (arg) => {
    console.log(`A saved event occurred: name: ${arg.name}, id: ${arg.id}`);
});

emitter.emit('saved', {
    id: 1,
    name: 'John Doe'
});
console.log(pathToFile, currentOS);
console.log(os.EOL);