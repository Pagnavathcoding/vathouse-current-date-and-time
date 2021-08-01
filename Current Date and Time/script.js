let dates = document.getElementById("date");
let times = document.getElementById("time");

function currentDateTime() {
    let getData = new Date();
    // Date
    let day = getData.getDay();
    let month = getData.getMonth();
    let date = getData.getDate();
    let year = getData.getFullYear();
    // display date
    date = (date < 10) ? "0" + date : date;
    // switch the day index to the name of day
    switch (day) {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;
    }
    // switch the month index to the name of month
    switch (month) {
        case 0:
            month = "January";
            break;
        case 1:
            month = "February";
            break;
        case 2:
            month = "March";
            break;
        case 3:
            month = "April";
            break;
        case 4:
            month = "May";
            break;
        case 5:
            month = "June";
            break;
        case 6:
            month = "July";
            break;
        case 7:
            month = "August";
            break;
        case 8:
            month = "September";
            break;
        case 9:
            month = "October";
            break;
        case 10:
            month = "November";
            break;
        case 11:
            month = "December";
            break;
    }
    displayDate = `${day}, ${date} ${month} ${year}`;
    dates.textContent = displayDate;
    // Time
    let hour = getData.getHours();
    let minute = getData.getMinutes();
    let second = getData.getSeconds();
    let am_pm = "AM";
    if (hour > 12) {
        hour = hour - 12;
        am_pm = "PM"
    }
    if (hour === 0) {
        hour = 12;
    }
    // this is the short cut condition if else
    hour = (hour < 10) ? "0" + hour : hour;
    minute = (minute < 10) ? "0" + minute : minute;
    second = (second < 10) ? "0" + second : second;
    displayTime = `${hour} : ${minute} : ${second} ${am_pm}`;
    times.textContent = displayTime;
    setTimeout(currentDateTime, 1000);
}
currentDateTime();