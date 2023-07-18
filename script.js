document.addEventListener("DOMContentLoaded", function () {
  setEventListener();
  setFridayFrog();
  setFrogs();
});

function setEventListener() {
  document.getElementById('frogs-navigation').addEventListener('click', () => {
    document.getElementById('frogs-page').scrollIntoView({ behavior: 'smooth' });
  });
  document.getElementById('friday-frog-navigation').addEventListener('click', () => {
    document.getElementById('friday-frog-page').scrollIntoView({ behavior: 'smooth' });
  });
}

function setFridayFrog() {
  var daysOfWeek = ['Söndag', 'Måndag', 'Tisdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lördag'];
  var today = new Date();
  var dayIndex = today.getDay();
  var dayName = daysOfWeek[dayIndex];
  var frogText = `DET ÄR ${dayName} MINA BEKANTA`;
  dayName === 'Fredag' ? friday() : otherday(dayName);
  document.getElementById('frog-text').textContent = frogText;
}

function friday() {
  document.getElementById('frog-image').src = 'frogs/friday-frog.png';
  confetti();
}

function confetti() {
  party.confetti(document.querySelector('.friday-frog-page'), {
    count: party.variation.range(50, 100),
  });

  setInterval(() => {
    party.confetti(document.querySelector('.friday-frog-page'), {
      count: party.variation.range(50, 100),
    });
  }, 3000)
}

function otherday(dayName) {
  setBackgroundColor(dayName);
  makeItRain();
}

function setBackgroundColor(dayName) {
  var color;
  var opacity;
  switch (dayName) {
    case 'Lördag': {
      color = 45;
      opacity = '0.1';
      break;
    }
    case 'Söndag': {
      color = 80;
      opacity = '0.25';
      break;
    }
    case 'Måndag': {
      color = 115;
      opacity = '0.4';
      break;
    }
    case 'Tisdag': {
      color = 150;
      opacity = '0.55';
      break;
    }
    case 'Onsdag': {
      color = 185;
      opacity = '0.7';
      break;
    }
    case 'Torsdag': {
      opacity = '0.85';
      color = 220;
      break;
    }
    default: {
      opacity = '1.0';
      color = 255;
    }
  }
  document.getElementById('frog-image').src = 'frogs/other-day-frog.png';
  document.getElementById('frog-image').style.opacity = opacity;
  document.getElementById('friday-frog-page').style.backgroundColor = `rgb(${color},${color},${color})`;
}

function makeItRain() {
  let amount = 100;
  let body = document.getElementById("friday-frog-page");
  let count = 0;
  while (count < amount) {
    let drop = document.createElement("span");
    let size = Math.random() * 5;
    let posX = Math.floor(Math.random() * window.innerWidth);
    let delay = Math.random() * -20;
    let duration = Math.random() * 5;
    drop.style.width = `${0.1 + size}px`;
    drop.style.left = `${posX}px`;
    drop.style.animationDelay = `${delay}s`;
    drop.style.animationDuration = `${1 + duration}s`;
    body.appendChild(drop);
    count++;
  }
}

function setFrogs() {
  var imageElement = document.getElementById("frogs-container");
  for (let index = 0; index < frogs.length; index++) {
    const frog = frogs[index];
    var frogDiv = document.createElement('div');
    frogDiv.className = 'frog-image';
    frogDiv.onclick = () => { window.open(`frogs/${frog.src}.png`) };
    var frogImage = document.createElement('img');
    frogImage.src = `frogs/${frog.src}.png`;
    var frogCaption = document.createElement('p');
    frogCaption.style = 'margin: 0';
    frogCaption.textContent = `Credit: ${frog.caption}`;
    frogDiv.appendChild(frogImage);
    frogDiv.appendChild(frogCaption);
    imageElement.appendChild(frogDiv);
  }
}
