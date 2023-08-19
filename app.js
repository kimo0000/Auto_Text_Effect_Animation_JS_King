const jobs = ["Developper", "Designer", "programmer", "Editor", "Youtuber"];

const text = document.querySelector(".text");

let count = 0;
let counter = 0;

setInterval(() => {
  resultJob();
}, 400);

function resultJob() {
  counter++;
  text.innerHTML = `I'm ${jobs[count].slice(0, 1) === "Y" ? "An" : "A"} ${jobs[
    count
  ].slice(0, counter)}`;
  if (counter === jobs[count].length) {
    count++;
    counter = 0;
  }

  if (count === jobs.length) {
    count = 0;
  }
}

resultJob();
