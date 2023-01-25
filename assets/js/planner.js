

let timeNow = $("#currentDay");

timeNow.text(dayjs().format('dddd, MMMM d'));

// Get current time
let myData;
// Set some jQuery variables, but I find easier to select them  as they are.
const allLabels = $("a");
const saveButtons = $(".save");
const allInputs = $("input");
var today = new Date();
let hours = today.getHours(); // Finding out current hour.

// I have left line below for testing to see if colouring actually works.
// let hours = 13;

var currentTime = today.getHours() + ":" + today.getMinutes();



//colouring times depending on current hour. 

$("a").each(function(index){
    // console.log(index);
    let labelHoursIndex = $("a").eq(index);
    let labelHours = $("a").eq(index).attr("data-time");
    // console.log($("a").eq(index).attr("data-time"));

    if (hours == $("a").eq(index).attr("data-time")) {
        $("a").eq(index).addClass("bg-danger");
        console.log(labelHours);
        
    }
    else if (hours < labelHours) {
        
        $("a").eq(index).addClass("bg-success");
    }
})
   

// Function to get saved data from Local storage
const show = function() {
    for (let i=0; i < localStorage.length; i++){
        $("input").eq(i).val(localStorage.getItem(i));
        console.log(localStorage.getItem(i));
        
       
        
    }
}

// Function to save data in the local storage
const save = function() {
    let btnId = parseInt($(this).attr("id"));
    
    // myData = this.value;
    // localStorage.setItem("toDo",myData);
    myData = $("input").eq(btnId).val();
    localStorage.setItem(btnId,myData);
    console.log(myData);
    // myData = localStorage.setItem("toDo",allInputs.eq(key).value);
    // localStorage.setItem("toDo",myData);
    
}
show();
// Event listener for every save button.
saveButtons.on("click",save);
// saveButtons.each(save())

