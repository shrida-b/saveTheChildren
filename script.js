var statList = [
  "In the world’s poorest countries, slightly more than 1 in 4 children are engaged in child labour.",
  "There are 9 million more children at risk due to the Covid-19 pandemic.",
  "Nearly 1 in 10 children are subjected to child labour worldwide, with some forced into hazardous work through trafficking.",
  "Progress to end child labour has stalled for the first time in 20 years, reversing the previous downward trend that saw child labour fall by 94 million between 2000 and 2016.",
  "The incidence of hazardous work in countries affected by armed conflict is 50% higher than the global average.",
  "30 million children live outside their country of birth, increasing their risk of being trafficked for sexual exploitation and other work.",
  "There has been an increase of 8.4 million children engaged in child labour in the last four years"
];
var stat = document.getElementById("stat");
var statButton = document.getElementById("statButton");
var count = 0;
statButton.addEventListener("click",displayStat);

function displayStat() {
  stat.innerHTML = statList[count];
  count += 1;
  if(count == 6){
      count = 0;
  }
}
