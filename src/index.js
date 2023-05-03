let ramenMenuDiv=document.querySelector("#ramen-menu")
function menu(){
    fetch(`http://localhost:3000/ramens`)
    .then(response=>{
return response.json()
    }).then(data=>{
        console.log(data)
        data.map(item=>{

let imageElement=document.createElement("img")
imageElement.src=item.image
ramenMenuDiv.appendChild(imageElement)
        })
    })
}
menu()