let planetmoon = document.getElementById("planetmoon");
let planetmars = document.getElementById("planetmars");
let planeteuropa = document.getElementById("planeteuropa");
let planettitan = document.getElementById("planettitan");
let planettitle = document.getElementById("planettitle");
let planetdescp = document.getElementById("planetdescp");
let distancedata = document.getElementById("distancedata");
let traveldata = document.getElementById("traveldata");

planetmoon.addEventListener("click", moondisplay);
planetmars.addEventListener("click", marsdisplay);
planeteuropa.addEventListener("click", europadisplay);
planettitan.addEventListener("click", titandisplay);

function moondisplay() {
  planetmoon.classList.add("activeplanet");
  planetmoon.classList.remove("activehover");

  planetmars.classList.add("activehover");
  planetmars.classList.remove("activeplanet");

  planeteuropa.classList.remove("activeplanet");
  planeteuropa.classList.add("activehover");

  planettitan.classList.remove("activeplanet");
  planettitan.classList.add("activehover");

  planettitle.innerText = "Moon";
  planetdescp.innerText =
    "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites. ";
  distancedata.innerText = "384,400 km";
  traveldata.innerText = "3 days";
}

function marsdisplay() {
  planetmoon.classList.remove("activeplanet");
  planetmoon.classList.add("activehover");

  planetmars.classList.add("activeplanet");
  planetmars.classList.remove("activehover");

  planeteuropa.classList.remove("activeplanet");
  planeteuropa.classList.add("activehover");

  planettitan.classList.remove("activeplanet");
  planettitan.classList.add("activehover");

  planettitle.innerText = "Mars";
  planetdescp.innerText =
    "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!";
  distancedata.innerText = "225 mil. km";
  traveldata.innerText = "9 months";
}
function europadisplay() {
  planetmoon.classList.remove("activeplanet");
  planetmoon.classList.add("activehover");

  planetmars.classList.add("activehover");
  planetmars.classList.remove("activeplanet");

  planeteuropa.classList.remove("activehover");
  planeteuropa.classList.add("activeplanet");

  planettitan.classList.remove("activeplanet");
  planettitan.classList.add("activehover");

  planettitle.innerText = "europa";
  planetdescp.innerText =
    "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.";
  distancedata.innerText = "628 mil. km ";
  traveldata.innerText = "3 years";
}
function titandisplay() {
  planetmoon.classList.remove("activeplanet");
  planetmoon.classList.add("activehover");

  planetmars.classList.add("activehover");
  planetmars.classList.remove("activeplanet");

  planeteuropa.classList.remove("activeplanet");
  planeteuropa.classList.add("activehover");

  planettitan.classList.remove("activehover");
  planettitan.classList.add("activeplanet");

  planettitle.innerText = "titan";
  planetdescp.innerText =
    "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.";
  distancedata.innerText = "1.6 bil. km";
  traveldata.innerText = "7 years";
}
