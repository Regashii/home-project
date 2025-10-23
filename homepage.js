const callButton = document.getElementById("call");
const searchButton = document.getElementById("search");
const socials = document.querySelectorAll(".social-card");
const radios = document.querySelectorAll('input[name="radio-btn"]');
const search = document.getElementById("search");
const modal1 = document.getElementById("modal1");
const modal2 = document.getElementById("modal2");
const closeModal1 = document.getElementById("closeModal1");
const closeModal2 = document.getElementById("closeModal2");
const openMapModal = document.getElementById("openMapModal");
const searchForm = document.getElementById("searchForm");
const searchBtn = document.getElementById("searchBtn");
const todayHours = document.getElementById("todayHours");
const hoursList = document.getElementById("hoursList");
const dropdown = document.getElementById("hoursDropdown");
const menuToggle = document.querySelector(".menu-toggle");
const pages = document.querySelector(".pages");

const modal = document.getElementById("contactModal");
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.querySelector(".close");

const watsApp = document.getElementById("watsapp");

const schedule = {
  Monday: "08:00 am – 07:00 pm",
  Tuesday: "08:00 am – 07:00 pm",
  Wednesday: "08:00 am – 07:00 pm",
  Thursday: "08:00 am – 07:00 pm",
  Friday: "08:00 am – 07:00 pm",
  Saturday: "08:00 am – 07:00 pm",
  Sunday: "08:00 am – 07:00 pm",
};

const today = new Date();
const dayName = today.toLocaleString("en-US", { weekday: "long" });
todayHours.textContent = `Open today ${schedule[dayName]}`;

let counter = 1;

callButton.addEventListener("click", () => {
  window.location.href = "tel:(206) 919-6886";
});

socials.forEach((btn) => {
  btn.addEventListener("click", () => {
    const name = btn.id;
    switch (name) {
      case "social1":
        window.open("https://www.facebook.com/MarciHomes/", "_blank");
        break;
      case "social2":
        window.open(
          "https://www.instagram.com/marciandlauren_nvrealtors/",
          "_blank"
        );
        break;
      case "social3":
        window.open(
          "https://www.linkedin.com/in/marci-metzger-30642496/",
          "_blank"
        );
        break;
      case "social4":
        window.open(
          "https://www.yelp.com/biz/marci-metzger-the-ridge-realty-pahrump",
          "_blank"
        );
        break;
    }
  });
});

setInterval(() => {
  document.getElementById("radio" + counter).checked = true;
  counter++;
  if (counter > 7) counter = 1;
}, 5000);

radios.forEach((radio, index) => {
  radio.addEventListener("click", () => {
    counter = index + 1;
  });
});

search.addEventListener("click", () => {
  modal1.style.display = "flex";
});

closeModal1.addEventListener("click", () => {
  modal1.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal1) modal1.style.display = "none";
  if (e.target === modal2) modal2.style.display = "none";
});

openMapModal.addEventListener("click", () => {
  modal1.style.display = "none";
  modal2.style.display = "flex";
});

closeModal2.addEventListener("click", () => {
  modal2.style.display = "none";
});

searchForm.addEventListener("input", () => {
  const inputs = searchForm.querySelectorAll("select, input");
  const allFilled = Array.from(inputs).every(
    (input) => input.value.trim() !== ""
  );
  searchBtn.disabled = !allFilled;
});

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Search initiated with selected filters!");
  modal1.style.display = "none";
});

Object.keys(schedule).forEach((day) => {
  const li = document.createElement("li");
  li.textContent = `${day.slice(0, 3)} ${schedule[day]}`;
  if (day === dayName) li.classList.add("today");
  hoursList.appendChild(li);
});

todayHours.addEventListener("click", () => {
  dropdown.classList.toggle("active");
});

menuToggle.addEventListener("click", () => {
  pages.classList.toggle("active");
});

fetch("images.json")
  .then((res) => res.json())
  .then((data) => {
    for (let x = 1; x <= 7; x++) {
      document.getElementById(`img${x}`).src = data.images[x - 1];
      document.getElementById(`slide${x}`).src = data.slideImg[x - 1];
    }
    for (let x = 1; x <= 5; x++) {
      document.getElementById(`logo${x}`).src = data.logos[x - 1];
    }
  });

openModalBtn.addEventListener("click", () => {
  modal.style.display = "flex";
});

closeModalBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

watsApp.addEventListener("click", () => {
  window.open("https://wa.me/12069196886", "_blank");
});
