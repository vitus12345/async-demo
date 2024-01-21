// const p = new Promise((resolve, reject) => {
//        // reject(new Error('message’))
//        setTimeout(()=>{
//         // resolve({id: 1, name: 'vitus'})
//         reject(new Error('message'))
//        }, 3000)
//     })
//     p
//     .then(result => console.log('Result', result))
//     .catch(err => console.log('Error',err.message))



    // const p1 = new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       console.log('Asynchronous operation 1..');
    //        reject(new Error('Because something failed...'))

    //     }, 3000)
    //     });
    //     const p2 = new Promise((resolve) => {
    //     setTimeout(() => {
    //       console.log('Asynchronous operation 2..');
    //       resolve(2)
    //     }, 3000)
    //     });
    //     Promise.all([p1, p2])
    //     .then(result => console.log('Result', result))
    //     .catch(err => console.log('Error',err.message))




            const p1 = new Promise((resolve,) => {
            setTimeout(() => {
              console.log('Asynchronous operation 1..');
              resolve(1)
            //   reject(new Error('Because something failed...'))
    
            }, 3000)
            });

            const p2 = new Promise((resolve) => {
            setTimeout(() => {
              console.log('Asynchronous operation 2..');
              resolve(2)
            }, 3000)
            });
            
            Promise.race([p1, p2])
            .then(result => console.log('Result', result))
            .catch(err => console.log('Error',err.message))
        