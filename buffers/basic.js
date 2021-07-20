
/**
 * Max is defined: 4294967296
 * On 32-bit architectures, this value currently is 230 - 1 (~1GB)
 * On 64-bit architectures, this value currently is 232 (~4GB).
 * */ 
const buff = Buffer.alloc(2, 'hola-papa', 'utf8');
console.log(buff)
console.log(buff.toString())

// hello world
const buf = Buffer.alloc(11, 'aGVsbG8gd29ybGQ=', 'base64');
console.log(buf);
console.log(buf.toString())


