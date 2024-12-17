// Inizial variables
const teamMembers = [
  {
      name: "Marco Bianchi",
      role: "Designer",
      email: "marcobianchi@team.com",
      img: "img/male1.png"
  },
  {
      name: "Laura Rossi",
      role: "Front-end Developer",
      email: "laurarossi@team.com",
      img: "img/female1.png"
  },
  {
      name: "Giorgio Verdi",
      role: "Back-end Developer",
      email: "giorgioverdi@team.com",
      img: "img/male2.png"
  },
  {
      name: "Marta Ipsum",
      role: "SEO Specialist",
      email: "martarossi@team.com",
      img: "img/female2.png"
  },
  {
      name: "Roberto Lorem",
      role: "SEO Specialist",
      email: "robertolorem@team.com",
      img: "img/male3.png"
  },
  {
      name: "Daniela Amet",
      role: "Analyst",
      email: "danielaamet@team.com",
      img: "img/female3.png"
  }
];

//dom elements
const containerElm = document.getElementById('team-container');

// funzione per vedere attuali membri
function Team() {
  teamMembers.forEach(teamMembers => {
    const memberCard = `
    <div class="col">
      <div class="img">
        <img src="${teamMembers.img}" alt="${teamMembers.name}">
      </div>
      <div class="info">
        <h3>${teamMembers.name}</h3>
        <p>${teamMembers.role}</p>
        <p>${teamMembers.email}</p>
      </div>
    </div>
    `;

    containerElm.innerHTML += memberCard;
  });
}

Team();
