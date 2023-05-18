//events for button on click
const butevent=document.querySelector('button')
const funbut=(event)=>{
    console.log(event)
}
butevent.addEventListener('click',funbut)

//key event
const bodyevent=document.querySelector('body')
bodyevent.addEventListener('keydown',(event)=>{
    console.log(`key pressed: ${event.key}`)
})

//heighlight where the person is clicking and get its position
bodyevent.addEventListener('mousemove',(event)=>{
    console.log(`you click on:${event.clientX} ${event.clientY}`)
    const ele=document.createElement('div')
    ele.style=`
    position: absolute;
    top:${event.clientY}px;
    left:${event.clientX}px;
    width: 10px;
    height: 10px;
    background-color: red;
    border-radius: 50%;
    `
    bodyevent.appendChild(ele)
})

document.addEventListener('scroll',(event)=>
{
    const ele=document.createElement('h1')
    ele.innerText='hello'
    bodyevent.appendChild(ele)
    ele.style=`position:absolute;top:450px`


})
