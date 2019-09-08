const countdown = document.querySelector('.countdown')

// launch date
const launchDate = new Date ('Sept 1, 2019 12:00:00 ').getTime();

//Update time
const inval = setInterval(() => {

//get date and time 

const timeDate = new Date().getTime();

//time from today to launch date 
const goLive = launchDate - timeDate;

//time & date calculations

const days =  Math.floor(goLive /(1000* 60 * 60 * 24));
const hours = Math.floor ((goLive % (1000* 60 * 60 * 24))/ (1000* 60 * 60));
const mins =  Math.floor ((goLive % (1000* 60 * 60 ))/ (1000* 60));
const secs =  Math.floor ((goLive % (1000* 60 ))/ 1000);

// Display

countdown.innerHTML = `
<div>${days}<span>Days</span></div>
<div>${hours}<span>Hours</span></div>
<div>${mins}<span>Minutes</span></div>
<div>${secs}<span>Seonds</span></div>
`;
// goLive Day

if(goLive <0){
//stop timer
clearInterval(intvl);

//message
countdown.getElementsByClassName.color = '#17a2b6';
countdown.innerHTML = 'We are Live !!';
}
},1000);


