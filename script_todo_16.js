const input=document.querySelector('input')
const button=document.querySelector('button')
const ulcontainer=document.querySelector('ul')
todo=[]
const list=()=>{
    ulcontainer.innerHTML=''
    todo.forEach((todo) => {
        const li=document.createElement('li')
        const button=document.createElement('button')
        button.addEventListener('click',(ele)=>{
            li.remove()
        }

        )
        li.innerHTML=todo.text
        button.innerHTML='delete'
        ulcontainer.appendChild(li)
        li.appendChild(button)
        
    })
}
const ele =(ele)=>
{
    const inputele =input.value
    if(inputele!==null && inputele!==''){
        todo.push({
            text:inputele,
            completed:false,
            id:Date.now
        })
        
        list()

        console.log(todo)
        return    
    }
    else{
        return window.alert('adding empty ele is not possible')
    }

}
button.addEventListener('click',ele)