let infom=  getSavedInfom()

console.log(infom);

const filters={
    searchText: ''
}

renderInfom(infom, filters)
//Setup form for submit
document.querySelector('#new-info').addEventListener('submit', function(e){
    e.preventDefault()
    const id = uuid()
    infom.push({
        id: id,
        Firstname: e.target.elements.Firstname.value,
        Lastname: e.target.elements.Lastname.value,
        Email: e.target.elements.email.value,
        password: e.target.elements.password.value
    })
    savedinfom(infom)
    renderInfom(infom,filters)
    e.target.elements.Firstname.value = ''
    e.target.elements.Lastname.value = ''
    e.target.elements.email.value = ''
    e.target.elements.password.value = ''
    e.target.elements.confpassword.value = ''
})

//Setup input for search
document.querySelector('#search').addEventListener('input', function(e){
    filters.searchText = e.target.value
    renderInfom(infom,filters)
})

//Set data across page on edit.html
window.addEventListener('storage',function(e){
    if(e.key === 'infom'){
        infom = JSON.parse(e.newValue)
        renderInfom(infom,filters)
    }
})

