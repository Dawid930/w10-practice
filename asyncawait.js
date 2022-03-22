const showMessageLater = (msg) => {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            if (msg === "hello"){
                return reject("Something error happened")
            }
            return resolve(msg)
        }, 1000)
    })
}

const myFun = async () => {
    
    try {
        let result = ""
        result = await showMessageLater('hello5')
        console.log(result);
        result = await showMessageLater("hello6")
        console.log(result);
        result = await showMessageLater("hello7")
        console.log(result);
        result = await showMessageLater("hello")
        console.log(result);
        
    } catch (error) {
        console.log(error);
    }
}


myFun()

//megnezni hnap a videot error mert nem dob hibat
