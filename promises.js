let p = new Promise((resolve, reject) => {

    const a = 2
    const b = 2

    if(a + b == 4)
        resolve('\nSuccess\n')
    else 
        reject('Fail\n')
})

p.then((message) => {
    console.log(message)
}).catch((message) => {
    console.log(message)
})