let outer = require('../../src/outer.js')

let inner = () => {
    outer()
    console.log('inner函数')
}
