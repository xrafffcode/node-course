const doWorkCallback = (callback) => {
    setTimeout(() => {
        // callback('This is my error', undefined);
        callback(undefined, [1, 2, 3, 4, 5])
    }, 2000);
}

doWorkCallback((error, result) => {
    if (error) {
        return console.log('Error', error)
    }

    console.log(result)
})