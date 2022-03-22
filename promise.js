
const showMessageLater = (msg) =>{
    return new Promise((resolve, reject) =>{
        setTimeout( () =>{
            if (msg === "hello"){
                return reject("Something error happened")
            }
            return resolve(msg)
        }, 1000)
    })
}

//ezt csinaljuk az asyncawait.js nel egyszerubben -->

showMessageLater("hello2").then( (result) =>{
    console.log(result);
    showMessageLater("hello3").then( (result) =>{
        console.log(result);
        showMessageLater("hello4").then( (result) =>{
            console.log(result);
        })
    })                          
}).catch( (err) => {
    console.log(err);
})



