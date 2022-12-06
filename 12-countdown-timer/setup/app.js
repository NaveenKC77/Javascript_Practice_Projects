const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');

// let futureDate = new Date(2022,3,22,12,09,0);

let tempDate=new Date();
let tempYear=tempDate.getFullYear();
let tempMonth =tempDate.getMonth();
let tempDay=tempDate.getDate();
let tempHour=tempDate.getHours();
let tempMinute=tempDate.getMinutes();
let tempSecond =tempDate.getSeconds();

let futureDate=new Date(tempYear,tempMonth,tempDay,tempHour,tempMinute,tempSecond+20)
const year = futureDate.getFullYear();
const hours=futureDate.getHours();
const minutes=futureDate.getMinutes();


let month=futureDate.getMonth();
month=months[month];

const date=futureDate.getDate();

let weekday=futureDate.getDay();
weekday=weekdays[weekday];
giveaway.textContent=`giveaway ends on  ${weekday}, ${date} ${month}  ${year} ${hours}:${minutes} am` ;

console.log(futureDate);
function getRemainingTime(){
  let todayTime=new Date().getTime();

  let futureTime = futureDate.getTime();

  let t=futureTime-todayTime;
  console.log(t/(24*60*60*1000));

  let oneDay=24*60*60*1000;
  let oneHour=60*60*1000;
  let oneMinute=60*1000;
  let oneSecond=1000;

let days = Math.floor(t/oneDay);
let hours=Math.floor((t % oneDay) /oneHour);
let minutes=Math.floor((t % oneHour)/oneMinute);
let seconds=Math.floor((t % oneMinute)/oneSecond);
  let values=[days,hours,minutes,seconds];


function formatTime(item){
  if(item<10){
  return  (`0 ${item}`);
  }
  else
  return(item);

}
  items.forEach((item,index)=>{
    item.textContent=formatTime(values[index]);
  })

  if(t<0){
    clearInterval(countdown);
    deadline.innerHTML=`<h4 class="expired"> The giveaway has expired for now. Another will be online in no time!! Thanks</h4>`;
  }
}

let countdown=setInterval(getRemainingTime,1000);
getRemainingTime();
