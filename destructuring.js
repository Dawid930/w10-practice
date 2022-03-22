const userProfile = {
    name: 'David',
    age: '28',
    country: 'Hungary'
};

//const name = userProfile.name;
//const age = userProfile.age; //alatta ugyanez van, gyorsabb jobb

//const {name, age} = userProfile
//console.log("name: ", name, "age: ", age);


/* 
const logNameAndAge = (incomingUser) => {
    console.log(incomingUser.name);
    console.log(incomingUser.age);
}

logNameAndAge(userProfile)
 */


//a fenti helyett ez lesz:

const logNameAndAge = ({name, age}) => {
    console.log("name: ", name);
    console.log("age: ", age);
}

logNameAndAge(userProfile)



const arr1 = [1,2,3,4];


const first = arr1[0]
const second =arr1[1]

console.log('first: ', first);
console.log('second: ', second);

//ez a fent destructuringgal:  //obj nel a kulcsot kell hasznalni, arraynel csak a sorrend szamit, barmi lehet valtozo amit letrehozunk
const [a, b] = arr1
console.log('a: ', a);
console.log('b: ', b);


const [x, ...y] = arr1
console.log('x: ', x);
console.log('y: ', y);

