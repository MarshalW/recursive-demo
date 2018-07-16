let map = new Map()

console.log(map)
map.set('language', ['中文', '英文'])

// let value = map.get('language')
// console.log(value)
//
// map = JSON.stringify([...map])
// console.log(map)
// map = new Map(JSON.parse(map))
//
// console.log(map.get('language'))
//
// console.log('--->>>>')
//
// map.forEach((value, key) => {
//     console.log(value)
//     console.log(key)
//     console.log('---')
// })


Array.from(map).forEach((value) => {
    console.log(value)
})