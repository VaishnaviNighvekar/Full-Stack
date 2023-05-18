console.log(document.body)
// dom is responsible to creating a nodes
// document is an obj


// select querry 
const headobj=document.querySelector('h2')
headobj.innerHTML="new data from js"
headobj.style.color='red'
console.log(headobj)

console.log(document)

// get element by id
const headobj2=document.getElementById("heading")
headobj2.innerHTML="new data from js bu changinge element by id"

//set interval
setInterval(() => {
    headobj2.innerHTML=new Date().toLocaleTimeString()
}, 1000);

headobj2.style= 'color:orange'

const listobj=document.getElementById('list')

// i want to add array element in ul list
const ele=['arr1','arr2','arr3','arr4']
ele.forEach((element)=>{
    const li=document.createElement('li')
    li.innerHTML=element
    listobj.appendChild(li)
   
    console.log(li)
    //NEW METHOD
    const textnode=document.createTextNode(element)
    li.appendChild(textnode)
    li.append('_vaishu')
})


// append will append anything  
// append child will not append anything like string


// get element by class name - gives result in form of array
const classele= document.getElementsByClassName('class1')
console.log(classele)
// get element by id return one element
console.log(headobj2)


// select querry 
const headobj3=document.querySelector('ul')
console.log(headobj3)

//on click button it will show result in console with count
const body=document.querySelector('body')
const buttonfun =()=>{
    console.log('clicked ')
   //we can also change style of bg from here
   if(body.classList.contains('dark')){
    body.classList.remove('dark')
    body.classList.add('light')}
    else{
        body.classList.remove('light')
        body.classList.add('dark')

    }
}
