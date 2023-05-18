 //clone array using map
 console.log('clone array using map')

 arr=[1,2,3,4,5]
 arr1=arr.map(val=>val)
 console.log(arr1)

 // another way to clone using sperad
    console.log('another way to clone using sperad')
 const b=[... arr]
 console.log(b)

//  merge array using spread
arr2=[5,6,7,8]
const c=[...arr1,...arr2]
console.log(c)

// making copy of object
const a={
    name1:'v1',
    name2:'v2',
    car:{
        brand:30

    }
}

const aa={
    ...a
}
// so we can say b is indipendant obj
a.name1='vaishu'
a.car.brand=50

// so we can say b is indipendant obj but new obj inside 'a'  remain same
console.log(aa)


for(let key in a){
    console.log(key,a[key])
}
// op-name1 vaishu
// script.js:40 name2 v2
// script.js:40 car {brand: 50}

Object.keys(a).forEach(key => {
    console.log(key)
    // op-name1 name2 car
})

const{name1,name2,car}=a
console.log(name1,name2,car)

const{name1:a1,name2:b1,car:c1}=a
console.log(a1,b1,c1)


const [val1,...restval]=['v1','v2','v3']
console.log(val1)
console.log(restval)
