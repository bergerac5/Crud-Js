//Read existing infom from localStorage
const getSavedInfom =function(){
    const infomJSON = localStorage.getItem('infom')

    if(infomJSON !== null){
        return JSON.parse(infomJSON)
    }
}

// Save the infom to localStorage
const savedinfom = function(infom){
    localStorage.setItem('infom', JSON.stringify(infom))
}

//Remove note from the list
const removeInfo = function(id){
    const infoIndex = infom.findIndex(function (info){
        return info.id === id
    })
    if(infoIndex >-1){
        infom.splice(infoIndex,1)
    }
}

// // Edit function
// const editInfo = function(id){
//     console.log(id);
//     let info = infom.find(function (info){
//         return info.id === infomId
//     })
//     if(info !== undefined){
//         info.Firstname.value
//         info.Lastname.value
//         info.Email.value
//         info.password.value
//     }
// }


//Generate DOM
const GenerateDOM = function (info){
    const div = document.createElement('div')
    const p1 = document.createElement('p')
    const p2 = document.createElement('p')
    const p3 = document.createElement('p')
    const p4 = document.createElement('p')
    const action = document.createElement('p')
    const deleteButt = document.createElement('button')
    const editButt = document.createElement('button')
    deleteButt.textContent ='delete'
    editButt.textContent = 'edit'
    action.appendChild(deleteButt)
    action.appendChild(editButt)
    p1.textContent = `First name: ${info.Firstname}`
    p2.textContent = `Last name: ${info.Lastname}`
    p3.textContent = `Email: ${info.Email}`
    p4.textContent = `Password: ${info.password}`
    div.appendChild(action)
    div.appendChild(p1)
    div.appendChild(p2)
    div.appendChild(p3)
    div.appendChild(p4)
    action.style.float='right'
    editButt.style.margin='5px'
    editButt.style.borderRadius='5px'
    editButt.style.color ='white'
    editButt.style.backgroundColor = 'blue'
    deleteButt.style.borderRadius='5px'
    deleteButt.style.color ='white'
    deleteButt.style.backgroundColor = 'red'

    //Set up delete button
    deleteButt.addEventListener('click', function (){
        removeInfo(info.id)
        savedinfom(infom)
        renderInfom(infom,filters)
    })

    // Setup for edit button
    editButt.addEventListener('click', function(){
    
        info.Firstname = document.querySelector('#Firstname')
        location.assign(`/view/edit.html#${info.id}`)
    })

    return div
}

//RenderInfom
const renderInfom = function(infom,filters){
    const filteredInfo = infom.filter(function(info){
        return info.Firstname.toLowerCase().includes(filters.searchText.toLowerCase())
    })
    
    document.querySelector('#infom').innerHTML = ''

    // generete Dom 
    filteredInfo.forEach(function(info){
        const div = GenerateDOM(info)
        document.querySelector('#infom').appendChild(div)
    }) 
}

//generate uuid
const uuid = () =>
([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
  (c ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))).toString(16)
);

const locaId = localStorage.getItem('infom')

