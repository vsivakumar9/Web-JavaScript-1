// javaScript to load table data into index.html. If a date is provided as a filter, retrieve
// the date and reload with filtered data only into the DOM.
// data  is defined in  data.js
var tableData = data;

//Getting a reference to the button on the page with the id propertyfilter-btn 
var button = d3.select("#filter-btn");
// Getting a reference to the input element on the page with the id property set to 'input-field'
var inputDate = d3.select("#datetime");
//Getting a reference to state
var inputState = d3.select("#state");
var defDate = '1/11/2010'

// Select all tbody from using d3 select and add  table rows dynamically from tableData.
function loadTableData(dataArray) {
d3.select("tbody")
  .selectAll("tr")
  .data(dataArray)
  .enter()
  .append("tr")
  .html(function(d) {
    return `<td>${d.datetime}</td> <td>${d.city}</td> <td>${d.state}</td> <td>${d.country}</td>
            <td>${d.shape}</td> <td>${d.durationMinutes}</td> <td>${d.comments}</td>     `;
  });

}

// // This function is triggered when the button filter-data is clicked.
// function handleClick() {
//   console.log("A button was clicked!");
//   // We can use d3 to see the object that dispatched the event
//   console.log(d3.event.target);
// }

// // We can use the `on` function in d3 to attach an event to the handler function.
// function getInput () {
//   button.on("click", handleClick);
// }
var iDate  = defDate
function getInput() {
  console.log("in getInput function");
  //Input fields can trigger a change event when new text is entered.
  inputDate.on("change", function() {
    d3.event.preventDefault();
    var newDate = d3.event.target.value
    if (newDate) {
      console.log(newDate)
      var iDate  = newDate
      console.log("New Date: " + iDate)
      } 
    else {
      iDate = defDate
      console.log("default date :" + iDate )
      }
  
    return(iDate)
  });

}

inputState.on("change",function(){
  d3.event.preventDefault();
  var newState = d3.event.target.value
  console.log("New State: " +  newState)
});

function filterData(date) {

  console.log("In filterData" + date)
      
}

//Main logic.
// Load all the table data of UFO sightings and render in html template. 
loadTableData(tableData);

// You can also define the click handler inline
button.on("click", function() {
  // Prevent the form from refreshing the page
  d3.event.preventDefault();
  console.log("Hi, filter button was clicked!");
  console.log(d3.event.target);
  //Filter the UFO sightings data based on the date and reload table in DOM.
  filterData(iDate) ;
});

//On a submit, get date from the html form.
dateInput = getInput();

// inputDate.on("change", function() {
//   d3.event.preventDefault();
//   var newDate = d3.event.target.value
//   if (newDate) {
//     console.log(newDate)
//     var iDate  = newDate
//     console.log("New Date: " + iDate)
//     } 
//   else {
//     iDate = '1/11/2011'
//     console.log("default date :" + iDate )
//     }

//  //return(newDate)
// });



