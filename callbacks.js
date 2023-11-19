const names = ['Kyle','Olivita','Deborah','Randy']

const myForEach = (array,cb) => {
    for(let i = 0; i < array.length; i++){
        const subscript = array[i]
        cb(subscript)
    }

}

myForEach (names, (n) => {
    console.log(n)
})

