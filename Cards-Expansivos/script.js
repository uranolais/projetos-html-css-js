const painels = document.querySelectorAll('.painel')

painels.forEach(painel => {
    painel.addEventListener('click',()=>{
        removeClassesAtivas()
        painel.classList.add('active')
    })
})

function removeClassesAtivas(){
    painels.forEach(painel =>{
        painel.classList.remove('active')
    })
}