const qwe = { sdf: 123, asd: 234 }
const zxc = { asd: 345, ...qwe, sdf: 456, zxc: 567 }
const { sdf, asd } = zxc
console.log(asd)
console.log(sdf)