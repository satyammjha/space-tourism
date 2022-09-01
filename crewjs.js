
let crew1 = document.getElementById("crew_1");
let crew2 = document.getElementById("crew_2");
let crew3 = document.getElementById("crew_3");
let crew4 = document.getElementById("crew_4");

let crewDesig = document.getElementById("crew_desig")
let crewName = document.getElementById("crew_name")
let crewDescp = document.getElementById("designation_details")
let crew_img = document.getElementById("crew_img")
crew1.addEventListener("click", crew1display)
crew2.addEventListener("click", crew2display)
crew3.addEventListener("click", crew3display)
crew4.addEventListener("click", crew4display)

function crew1display() {
  console.log("clicked")
  crew1.classList.add("crew_list_active_dot")
  crew1.classList.remove("crew_list_dot")
  crew2.classList.add("crew_list_dot")
  crew2.classList.remove("crew_list_active_dot")
  crew3.classList.add("crew_list_dot")
  crew3.classList.remove("crew_list_active_dot")
  crew4.classList.remove("crew_list_active_dot")
  crew4.classList.add("crew_list_dot")
  
  crewDesig.innerHTML = "COMMANDER"
  crewDesig.classList.add("fade-in-left")
  crewName.innerHTML = "Douglas hurley"
  crewDescp.innerText = "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo - 2."
  crew_img.src = "./assets/crew/image-douglas-hurley.png"
}
function crew2display() {
  console.log("clicked")
  crew1.classList.add("crew_list_dot")
  crew1.classList.remove("crew_list_active_dot")
  crew2.classList.add("crew_list_active_dot")
  crew2.classList.remove("crew_list_dot")
  crew3.classList.add("crew_list_dot")
  crew3.classList.remove("crew_list_active_dot")
  crew4.classList.remove("crew_list_active_dot")
  crew4.classList.add("crew_list_dot")

  crewDesig.innerHTML = "Flight Engineer"
  crewName.innerHTML = "Anousheh Ansari"
  crewDescp.innerText = "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems.Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."
  crew_img.src = "./assets/crew/image-anousheh-ansari.png"
}
function crew3display() {
  console.log("clicked")
  crew1.classList.add("crew_list_dot")
  crew1.classList.remove("crew_list_active_dot")
  crew2.classList.add("crew_list_dot")
  crew2.classList.remove("crew_list_active_dot")
  crew3.classList.add("crew_list_active_dot")
  crew3.classList.remove("crew_list_dot")
  crew4.classList.remove("crew_list_active_dot")
  crew4.classList.add("crew_list_dot")

  crewDesig.innerHTML = "Pilot"
  crewName.innerHTML = "Victor Glover"
  crewDescp.innerText = "  Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station.Glover is a commander in the U.S.Navy where he pilots an F / A - 18.He was a crew member of Expedition 64, and served as a station systems flight engineer. "
  crew_img.src = "./assets/crew/image-victor-glover.png"
}
function crew4display() {
  console.log("clicked")
  crew1.classList.add("crew_list_dot")
  crew1.classList.remove("crew_list_active_dot")
  crew2.classList.add("crew_list_dot")
  crew2.classList.remove("crew_list_active_dot")
  crew3.classList.add("crew_list_dot")
  crew3.classList.remove("crew_list_active_dot")
  crew4.classList.remove("crew_list_dot")
  crew4.classList.add("crew_list_active_dot")

  crewDesig.innerHTML = "Mission Specialist"
  crewName.innerHTML = "Mark Shuttleworth"
  crewDescp.innerText = "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
  crew_img.src = "./assets/crew/image-mark-shuttleworth.png"
}