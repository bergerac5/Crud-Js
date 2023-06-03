let FirstnameElement = document.querySelector('#Firstname')
let LastnameElement = document.querySelector('#LastName')
let submitElement = document.querySelector('#submit')
let EmailElement = document.querySelector('#Email')
let passwordElement = document.querySelector('#Password')
let infoId = location.hash.substring(1)

let infom = getSavedInfom()
let info = infom.find(function (info){
    return info.id === infoId
})
if(info === undefined){
    location.assign('/view/index.html')
}

FirstnameElement.value = info.Firstname;
LastnameElement.value = info.Lastname;
EmailElement.value = info.Email;
passwordElement.value = info.password;

//Setup input event for edit First name
FirstnameElement.addEventListener('input', function(e){
    info.Firstname = e.target.value
    savedinfom(infom)
})

//Setup input event for edit last name
LastnameElement.addEventListener('input', function(e){
    info.Lastname = e.target.value
    savedinfom(infom)
})

//Setup input event for edit Email
EmailElement.addEventListener('input', function(e){
    info.Email = e.target.value
    savedinfom(infom)
})

//Setup input event for edit password
passwordElement.addEventListener('input', function(e){
    info.password = e.target.value
    savedinfom(infom)
})

//Setup a remove button
document.querySelector('#remevo').addEventListener('click', function(){
    removeInfo(info.id)
    savedinfom(infom)
    location.assign('/view/index.html')
})

//Setup a submit button
submitElement.addEventListener('click', function(){
    savedinfom(infom)
    location.assign('/view/index.html')
})

//Set data across page on edit.html
window.addEventListener('storage',function(e){
    if(e.key === 'infom'){
        infom = JSON.parse(e.newValue)
        info = infom.find(function(info){
            return info.id === infoId
        })
        if(info === undefined){
            location.assign('/view/index.html')
        }
        FirstnameElement.value = info.Firstname
        LastnameElement.value = info.Lastname
        EmailElement.value = info.Email
        passwordElement.value = info.password
    }
})