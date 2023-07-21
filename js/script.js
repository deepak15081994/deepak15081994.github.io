//Sticky Navigation Menu JS

let nav=document.querySelector("nav");
let scrollBtn=document.querySelector(".scroll-button a");

let val;

window.onscroll=function(){
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("sticky");
        scrollBtn.style.display="block";
    }else{
        nav.classList.remove("sticky");
        scrollBtn.style.display="none"; 
    }

}


//   // Get the current date and time
//   var currentDate = new Date();

//   // Define an array for the day names
//   var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

//   // Get the day, month, year, hours, and minutes
//   var day = days[currentDate.getDay()];
//   var date = currentDate.getDate();
//   var month = currentDate.getMonth() + 1; // Add 1 because months are zero-based
//   var year = currentDate.getFullYear();
//   var hours = currentDate.getHours();
//   var minutes = currentDate.getMinutes();

//   // Format the date and time as desired (e.g., "Monday, June 29, 2023 12:30 PM")
//   var formattedDateTime = day + ', ' + month + '/' + date + '/' + year + ' ' + hours + ':' + minutes;

//   // Set the content of the <h1> element to the formatted date and time
//   document.getElementById('datetime').innerHTML = formattedDateTime;


  
