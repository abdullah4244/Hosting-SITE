var countDownDate = new Date("Jul 25, 2021 16:37:52").getTime();
 // Run myfunc every second
 var myfunc = setInterval(function() {

    var now = new Date().getTime();
    var timeleft = countDownDate - now;
        
    // Calculating the days, hours, minutes and seconds left
    var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
        
    // Result is output to the specific element
    if(days<10){
        document.getElementById("days").innerHTML = "0"+days+ " : "
    }
    else{
    document.getElementById("days").innerHTML = days + " : "
    }
    if(hours<10){
        document.getElementById("hours").innerHTML = "0"+hours+ " : " 
    }
    else {
    document.getElementById("hours").innerHTML = hours + " : "
    }
    
    if(minutes<10){
        document.getElementById("mins").innerHTML =  "0"+minutes + " : " 
    }
    else{
    document.getElementById("mins").innerHTML = minutes + " : "
    }
    if(seconds<10){
        document.getElementById("secs").innerHTML = "0"+seconds + "" 
    } 
    else{
    document.getElementById("secs").innerHTML = seconds + "" 
    }           
    // Display the message when countdown is over
    if (timeleft < 0) {
        clearInterval(myfunc);
        document.getElementById("days").innerHTML = ""
        document.getElementById("hours").innerHTML = "" 
        document.getElementById("mins").innerHTML = ""
        document.getElementById("secs").innerHTML = ""
      
    }
    }, 1000);