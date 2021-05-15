window.onload = function Greet() {
alert("welcome to website");
const name = document.getElementById("name") ;
const eye_color = document.getElementById("eye_color") ;
const gender = document.getElementById("gender") ;
const height = document.getElementById("height") ;
const mass = document.getElementById("mass") ;
const skin_color = document.getElementById("skin_color") ;
const button = document.querySelector(".RandomizeInfoHere") ;
 button.addEventListener('click', (e) => {
    e.preventDefault ()
    name.innerHTML = '<em>loading..</em>'
    mass.innerHTML = '<em>loading..</em>'
    height.innerHTML = ' <em>loading..</em>'
   skin_color.innerHTML = '<em>loading..</em>'
   gender.innerHTML = '<em>loading..</em>'
  eye_color .innerHTML = '<em>loading..</em>'
const randomN = Math.ceil(Math.random()*83)
 fetch(`https://swapi.dev/api/people/${randomN}/`)
       .then(response =>response.json())
        .then(data=>{
           name.innerHTML = data["name"]
          mass.innerHTML = data["mass"]
          height.innerHTML = data["height"]
         skin_color.innerHTML = data["skin_color"]
         gender.innerHTML = data["gender"]
        eye_color .innerHTML = data["eye_color"]
        })
})















