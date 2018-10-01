// javaScript to load table data into index.html. If a date is provided as a filter, retrieve
// the date and reload with filtered data only into the DOM.
// data  is defined in  data.js
// Author. Siva V. 
var tableData = data;

//Getting a reference to the button on the page with the id propertyfilter-btn 
var filtButton = d3.select("#filter-btn");
// Getting a reference to the input element on the page with the id property set to 'datetime'
var inputDate = d3.select("#datetime");

//Create a var for the d3select of tbody.
var inputTbody = d3.select("tbody");

//Getting a reference to state and other fields. 
var inputState = d3.select("#state");
var inputCountry = d3.select("#country")
var inputShape   = d3.select("#shape")

var defDate = '1/1/2010';
var loadFiltData = "n";
var dateInput ;

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

//Filter the data based on input parameters like data and only return values for which
// //criteria is satisfied. 
// function filterData(date) {
//   console.log("In filterData" + date)
//   if (date)
//     var filtData = tableData.filter(fData => fData.datetime == date);
//     //loadFiltData = 'y';
//     console.log("loadFiltData " + FiltData)
//     console.log(filtData);
//     return(filtData)
      
//}

//Main logic.
// Load all the table data of UFO sightings and render in html template.

if (loadFiltData == 'y') {
  console.log("in filt data y")
  finalData = filtData;
  }
else {
  console.log("in filt data n")
  finalData = tableData;
  }
console.log("First time main logic")
console.log(finalData)
inputTbody.html("");
loadTableData(finalData)

// User clicks the button to filter data
filtButton.on("click", function() {

 // Prevent the whole page from refreshing.
 d3.event.preventDefault();

 // Get the value property of the input element
 var dateValue = inputDate.property("value");
 var stateValue = inputState.property("value");

 console.log(" in filtbutton.on code ")
 console.log(dateValue);
 console.log(stateValue);
 console.log(" after getting date/state value")
 var filtData = tableData.filter(fData => (fData.datetime == dateValue) && fData.state == stateValue) ;
 console.log(filtData) 
 loadFiltData = "y";
 if (loadFiltData == 'y') {
  console.log("in filt data y")
  finalData = filtData;
  }
else {
  console.log("in filt data n")
  finalData = tableData;
  }
console.log(finalData)
//Clear all previuos data from UFO table
inputTbody.html("");
loadTableData(finalData)
});


