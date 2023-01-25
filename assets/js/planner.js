

let test = $("#currentDay");

test.text(dayjs().format('dddd'));

// * Display the current day at the top of the calender when a user opens the planner. +++
 
// * Present timeblocks for standard business hours when the user scrolls down. 

 
// * Color-code each timeblock based on past, present, and future when the timeblock is viewed.



// * Allow a user to enter an event when they click a timeblock
 // on click of li element. (check class activities).
// * Save the event in local storage when the save button is clicked in that timeblock.
    //Function to add new event and save it in local storage.
// * Persist events between refreshes of a page


// Get current time
let myData;
const allLabels = $("a");
const saveButtons = $(".save");
const allInputs = $("input");
var today = new Date();
let hours = today.getHours(); // Finding out current hour.
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
   
// console.log($(".save")); 
// console.log(allInputs);


    
    // if (allInputs[index].value !== ""){
    //    const myData = localStorage.setItem("toDo",allInputs[index].value) ;     
    //    console.log(myData[index]);
    // }
    
// })

const show = function() {
    for (let i=0; i < localStorage.length; i++){
        // $("input").eq(i).text(localStorage.key(i));
        console.log(localStorage.key(i));
    }
}


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
saveButtons.on("click",save);
// saveButtons.each(save())

