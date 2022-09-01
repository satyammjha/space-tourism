
let vehicle1 = document.getElementById("vehicle1")
let vehicle2 = document.getElementById("vehicle2")
let vehicle3 = document.getElementById("vehicle3")
let vehicle_title = document.getElementById("vehicle_title")
let vehicle_descp = document.getElementById("vehicle_descp")
let vehicle_img = document.getElementById("vehicle_img")

vehicle1.addEventListener("click", vehicle1funct)
vehicle2.addEventListener("click", vehicle2funct)
vehicle3.addEventListener("click", vehicle3funct)

function vehicle1funct(){
  vehicle1.classList.add("vehicle_dot_active")
  vehicle1.classList.remove("vehicle_dot_active")
  vehicle2.classList.add("vehicle_dot")
  vehicle2.classList.remove("vehicle_dot_active")
  vehicle3.classList.add("vehicle_dot")
  vehicle3.classList.remove("vehicle_dot_active")
  vehicle_title.innerHTML = "Spaceport"
  vehicle_descp.innerHTML = "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
  vehicle_img.src = "./assets/technology/image-launch-vehicle-portrait.jpg"
}
function vehicle2funct(){
  vehicle1.classList.add("vehicle_dot")
  vehicle1.classList.remove("vehicle_dot_active")
  vehicle2.classList.add("vehicle_dot_active")
  vehicle2.classList.remove("vehicle_dot")
  vehicle3.classList.add("vehicle_dot")
  vehicle3.classList.remove("vehicle_dot_active")
  vehicle_title.innerHTML = "Spaceport"
  vehicle_descp.innerHTML = "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft,by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
  vehicle_img.src = "./assets/technology/image-spaceport-portrait.jpg"
}
function vehicle3funct(){
  vehicle1.classList.add("vehicle_dot")
  vehicle1.classList.remove("vehicle_dot_active")
  vehicle2.classList.add("vehicle_dot")
  vehicle2.classList.remove("vehicle_dot_active")
  vehicle3.classList.add("vehicle_dot_active")
  vehicle3.classList.remove("vehicle_dot")
  vehicle_title.innerHTML = "Space capsule"
  vehicle_descp.innerHTML = "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
  vehicle_img.src = "./assets/technology/image-space-capsule-portrait.jpg"

}