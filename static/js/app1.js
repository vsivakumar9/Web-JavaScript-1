// javaScript to load table data into index.html. If a date is provided as a filter, retrieve
// the date and reload with filtered data only into the DOM.
// data  is defined in  data.js
var tableData = data;

//Getting a reference to the button on the page with the id propertyfilter-btn 
var button = d3.select("#filter-btn");
// Getting a reference to the input element on the page with the id property set to 'input-field'
var inputDate = d3.select("#datetime");

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

//Getting a reference to state
var state = d3.select("state");

//Main logic.
// Load all the table data of UFO sightings and render in html template. 
loadTableData(tableData);

//On a submit, get date from the html form.
getInput();

// You can also define the click handler inline
button.on("click", function() {
  console.log("Hi, a button was clicked!");
  console.log(d3.event.target);
});

//Input fields can trigger a change event when new text is entered.
inputDate.on("change", function() {
  var newText = d3.event.target.value
  console.log(newText);
)};







