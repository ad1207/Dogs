document.addEventListener("DOMContentLoaded", function (event){
    var image = document.getElementById("image")
    document.getElementById("change").addEventListener("click",function(){
        fetch("https://dog.ceo/api/breeds/image/random").then(res => res.json()).then(data =>{
            console.log(data.message)
            image.src=data.message
        })
    })
})