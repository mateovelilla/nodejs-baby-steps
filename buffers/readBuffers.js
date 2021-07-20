const buf = Buffer.from([12, 44, 56, 56, 56, 56, 56, 56]);
console.log(buf)
console.log(buf.readBigUInt64BE(0));
console.log(buf.readDoubleBE(0));
console.log(buf.readDoubleLE(0));
console.log(buf.readFloatBE(0))

// https://nodejs.org/api/buffer.html#buffer_buf_readfloatbe_offset
