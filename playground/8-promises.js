const doWorkCallback = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve([7,4,1])
        reject('Things went wrong!')
    }, 2000)
})

doWorkCallback.then(resolve => {
    console.log('Success!', resolve);
}).catch((error) => {
    console.log('Error!', error);
})

// มันทำงานแบบนี้

//                                 fulfilled
//
//                             /
// Promise     -- pending -->
//
//                             \   rejected
//