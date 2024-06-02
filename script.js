document.addEventListener("DOMContentLoaded", function() {
  google.script.run.withSuccessHandler(data=>{


  document.getElementById('air_temp1').innerHTML=data[0]
  document.getElementById('soil_temp1').innerHTML=data[1]
  document.getElementById('air_humi1').innerHTML=data[2]
  document.getElementById('soil_humi1').innerHTML=data[3]
  document.getElementById('light1').innerHTML=data[4]
  document.getElementById('ppfd1').innerHTML=data[5]
  document.getElementById('ph1').innerHTML=data[6]  
  document.getElementById('wflow1').innerHTML=data[7]
  document.getElementById('wind1').innerHTML=data[8]
  document.getElementById('rain1').innerHTML=data[9]
  document.getElementById('time1').innerHTML=data[10]    

  }).getData1()
  var contentDivs = document.querySelectorAll('.main-container');

  function showContent(id) {
    contentDivs.forEach(function(div) {
      div.style.display = 'none';
    });

    var selectedDiv = document.getElementById(id);
    if (selectedDiv) {
      selectedDiv.style.display = 'block';
    }
  }

  var sidebarLinks = document.querySelectorAll('.sidebar-list-item a');
  sidebarLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      var targetId = link.getAttribute('href').substr(1);
      showContent(targetId);
    });
  });
});

// SIDEBAR TOGGLE

let sidebarOpen = false;
const sidebar = document.getElementById('sidebar');

function openSidebar() {
  if (!sidebarOpen) {
    sidebar.classList.add('sidebar-responsive');
    sidebarOpen = true;
  }
}

function closeSidebar() {
  if (sidebarOpen) {
    sidebar.classList.remove('sidebar-responsive');
    sidebarOpen = false;
  }
}

var firebaseConfig = {
    apiKey: "AIzaSyCe-EwsCFqM93AL869xHZAKTprTg_sM4po",
    authDomain: "smart-farm-f1480.firebaseapp.com",
    databaseURL: "https://smart-farm-f1480-default-rtdb.firebaseio.com",
    projectId: "smart-farm-f1480",
    storageBucket: "smart-farm-f1480.appspot.com",
    messagingSenderId: "571595503423",
    appId: "1:571595503423:web:a3aa2941075952effc458a",
    measurementId: "G-CPV22X4W20"
  };
// Initialize Firebase
  firebase.initializeApp(firebaseConfig);

$(document).ready(function(){
	var database = firebase.database();
	var Led1Status;
	var Led2Status;
	var Led3Status;
	var Led4Status;
	var Led5Status;
	var Led6Status;
	database.ref().on("value", function(snap){
		Led1Status = snap.val().Led1Status;
		Led2Status = snap.val().Led2Status;
    Led3Status = snap.val().Led3Status;
		Led4Status = snap.val().Led4Status;
		Led5Status = snap.val().Led5Status;
		Led6Status = snap.val().Led6Status;
		if(Led1Status == "1"){
			document.getElementById("unact").style.display = "none";
			document.getElementById("act").style.display = "block";
		} else {
			document.getElementById("unact").style.display = "block";
			document.getElementById("act").style.display = "none";
		}
		if(Led2Status == "1"){
			document.getElementById("unact1").style.display = "none";
			document.getElementById("act1").style.display = "block";
		} else {
			document.getElementById("unact1").style.display = "block";
			document.getElementById("act1").style.display = "none";
		}
    if(Led3Status == "1"){
			document.getElementById("unact2").style.display = "none";
			document.getElementById("act2").style.display = "block";
		} else {
			document.getElementById("unact2").style.display = "block";
			document.getElementById("act2").style.display = "none";
		}
    if(Led4Status == "1"){
			document.getElementById("unact3").style.display = "none";
			document.getElementById("act3").style.display = "block";
		} else {
			document.getElementById("unact3").style.display = "block";
			document.getElementById("act3").style.display = "none";
		}
    if(Led5Status == "1"){
			document.getElementById("unact4").style.display = "none";
			document.getElementById("act4").style.display = "block";
		} else {
			document.getElementById("unact4").style.display = "block";
			document.getElementById("act4").style.display = "none";
		}
    if(Led6Status == "1"){
			document.getElementById("unact5").style.display = "none";
			document.getElementById("act5").style.display = "block";
		} else {
			document.getElementById("unact5").style.display = "block";
			document.getElementById("act5").style.display = "none";
		}
	})

$(".toggle-btn").click(function(){
  var firebaseRef = firebase.database().ref().child("Led1Status");
  if(Led1Status == "1"){
    firebaseRef.set("0");
    Led1Status = "0";
  } else {
    firebaseRef.set("1");
    Led1Status = "1";
  }
})
$(".toggle-btn1").click(function(){
  var firebaseRef = firebase.database().ref().child("Led2Status");
  if(Led2Status == "1"){
    firebaseRef.set("0");
    Led2Status = "0";
  } else {
    firebaseRef.set("1");
    Led2Status = "1";
  }
})

$(".toggle-btn2").click(function(){
  var firebaseRef = firebase.database().ref().child("Led3Status");
  if(Led3Status == "1"){
    firebaseRef.set("0");
    Led3Status = "0";
  } else {
    firebaseRef.set("1");
    Led3Status = "1";
  }
})
$(".toggle-btn3").click(function(){
  var firebaseRef = firebase.database().ref().child("Led4Status");
  if(Led4Status == "1"){
    firebaseRef.set("0");
    Led4Status = "0";
  } else {
    firebaseRef.set("1");
    Led4Status = "1";
  }
})
$(".toggle-btn4").click(function(){
  var firebaseRef = firebase.database().ref().child("Led5Status");
  if(Led5Status == "1"){
    firebaseRef.set("0");
    Led5Status = "0";
  } else {
    firebaseRef.set("1");
    Led5Status = "1";
  }
})
$(".toggle-btn5").click(function(){
  var firebaseRef = firebase.database().ref().child("Led6Status");
  if(Led6Status == "1"){
    firebaseRef.set("0");
    Led6Status = "0";
  } else {
    firebaseRef.set("1");
    Led6Status = "1";
  }
})
});
let seconds = [0, 0, 0, 0];
let countdowns = [];
let isRunning = [false, false, false, false];

const secondsInputs = document.querySelectorAll('input[type="number"]');
const increaseBtns = document.querySelectorAll('button[id^="increase"]');
const decreaseBtns = document.querySelectorAll('button[id^="decrease"]');
const startBtns = document.querySelectorAll('button[id^="start"]');
const countdownDisplays = document.querySelectorAll('span[id^="countdown"]');

increaseBtns.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    seconds[index]++;
    secondsInputs[index].value = seconds[index];
  });
});

decreaseBtns.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    if (seconds[index] > 0) {
      seconds[index]--;
      secondsInputs[index].value = seconds[index];
    }
  });
});

startBtns.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    if (!isRunning[index]) {
      startCountdown(index);
    } else {
      stopCountdown(index);
    }
  });
});

function startCountdown(index) {
  let remaining = seconds[index];
  relaySwitch(true, index + 1); // เปิดสวิตช์
  countdownDisplays[index].textContent = formatTime(remaining);
  isRunning[index] = true;
  startBtns[index].textContent = 'on';
  countdowns[index] = setInterval(() => {
    remaining--;
    countdownDisplays[index].textContent = formatTime(remaining);
    if (remaining <= 0) {
      clearInterval(countdowns[index]);
      relaySwitch(false, index + 1); // ปิดสวิตช์
      isRunning[index] = false;
      startBtns[index].textContent = 'off';
    }
  }, 1000);
}

function stopCountdown(index) {
  clearInterval(countdowns[index]);
  isRunning[index] = false;
  relaySwitch(false, index + 1); // ปิดสวิตช์
  startBtns[index].textContent = 'off';
}


function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
}

function relaySwitch(on, switchNumber) {
  console.log(on ? `Switch ${switchNumber} turned on` : `Switch ${switchNumber} turned off`);
  
  // เรียกใช้งานฟังก์ชั่นเพื่อส่งข้อมูลสถานะไปยัง Firebase
  updateFirebaseSwitchStatus(switchNumber, on ? 1 : 0);
}

function updateFirebaseSwitchStatus(switchNumber, status) {
  // สร้าง reference ไปยังโหนดของสวิตช์ใน Firebase Realtime Database
  const switchRef = firebase.database().ref(`switches/switch${switchNumber}`);

  // ส่งข้อมูลสถานะของสวิตช์ไปยัง Firebase
  switchRef.set(status);
}

function drawChart(data) {
  const chartDivs = [
    'chart-air-temp', // คอลัมน์ C
    'chart-soil-temp', // คอลัมน์ D
    'chart-air-humi', // คอลัมน์ E
    'chart-soil-humi', // คอลัมน์ F
    'chart-light', // คอลัมน์ G
    'chart-ppfd', // คอลัมน์ H
    'chart-ph', // คอลัมน์ J
  ];

  // กำหนดสีของเส้นกราฟที่แตกต่างกัน
  const lineColors = [
    '#ff5722',
    '#FF4560',
    '#008FFB',
    '#00E396',
    '#ffeb3b',
    '#607d8b',
    '#9c27b0',
  ];

  // ชื่อแกน Y สำหรับแต่ละกราฟ
  const yAxisTitles = [
    'Temperature (°C)',
    'Temperature (°C)',
    'Humidity (%)',
    'Humidity (%)',
    'Light (Lux)',
    'PPFD (μmol/m²/s)',
    'pH',
  ];

  chartDivs.forEach((chartDiv, index) => {
    const categories = data.map(row => row[10]);
    const series = [{ 
      name: chartDiv.replace('chart-', ''),
      data: data.map(row => row[index]) 
    }];

    const options = {
      series: series,
      chart: {
        height: 350,
        type: 'area',
        animations: {
          enabled: true,
          easing: 'linear',
          dynamicAnimation: {
            speed: 1000
          }
        },
        toolbar: {
          show: false
        },
      },
      colors: [lineColors[index]],
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth'
      },
      xaxis: {
        categories: categories,
        title: {
          text: 'Time', // ชื่อแกน X
          offsetX: 0, // เลื่อนชื่อแกน X ไปทางซ้ายหรือขวา (ค่าบวกไปทางขวา, ค่าลบไปทางซ้าย)
          style: {
            fontSize: '14px' // ขนาดของชื่อแกน X
          }
        }
      },
      yaxis: {
        title: {
          text: yAxisTitles[index]
        },
        labels: {
          formatter: (value) => parseFloat(value).toFixed(2)
        }
      }
    };

    const chart = new ApexCharts(document.querySelector(`#${chartDiv}`), options);
    chart.render();
  });

}

