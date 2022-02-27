const doWorkPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve('This is my resolved data')
        reject('This is my error')
    }, 2000);
})

doWorkPromise.then((result) => {
    console.log(result)
}).catch((error) => {
    console.log('Error', error)
})