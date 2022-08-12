// from data.js
const tableData = data;

// get table references
var tbody = d3.select("tbody");

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}




// 1. Create a variable to keep track of all the filters as an object.
var filters ={};

 // 2. Attach an event to listen for changes to each filter


  function handleClick() {
    //Grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    let city = d3.select("#city").property("value");
    let state = d3.select("#state").property("value");
    let country = d3.select("#country").property("value");
    let shape = d3.select("#shape").property("value");
    let filteredData = tableData;

    //Check to see if a date was entered and filter
    //the data using that date.
    if(date) {
        //Apply 'filter' to the table data to only keep the
        //rows where the 'datetime' value matches the filter value
        filteredData = filteredData.filter(row => row.datetime === date);

    };

    if (city) {
      filteredData = filteredData.filter(row => row.city === city);
    };

    if (state) {
      filteredData = filteredData.filter(row => row.state === state);
    };

    if (country) {
      filteredData = filteredData.filter(row => row.country === country;
    };

    if (shape) {
      filteredData = filteredData.filter(row => row.shape === shape;
    };

    buildTable(filteredData);


    if (filteredData != tableData) {
      tbody.selectAll('tr').remove();
      tbody.selectAll('td').remove();

      filteredData.forEach((search) => {
          var new_tr = tbody.append("tr");
          for (key in search) {
              new_tr.append("td").text(search[key]);
          }
      })
  } else {
      // Revert to displaying all the ufo sightings in a table format
      table(tableData);
  }
};

    //Rebuild the table using the filtered data.
    //buildTable(filteredData);


//Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);



// 3. Use this function to update the filters. 
function updateFilters() 
{

  let changedElement = d3.select(this);

  let elementValue = changedElement.property("value");
  console.log(elementValue);

  let filterID = changedElement.attr("id");
  console.log(filterId);

  if (elementValue) {
    filters[filterId]= elementValue;
  }
  else {
    delete filters[filterId];
  }

  updateTable();
}


function updateTable()
d3.selectAll("input").on("change, updateFilters"); {
};


    // 4a. Save the element that was changed as a variable.

    // 4b. Save the value that was changed as a variable.

    // 4c. Save the id of the filter that was changed as a variable.
    filters.datetime = d3.select("#datetime").property("value").toLowerCase();
    filters.city = d3.select("#city").property("value").toLowerCase();
    filters.state = d3.select("#state").property("value").toLowerCase();
    filters.country = d3.select("#country").property("value").toLowerCase();
    filters.shape = d3.select("#shape").property("value").toLowerCase();
  
    // 5. If a filter value was entered then add that filterId and value
    // to the filters list. Otherwise, clear that filter from the filters object.
    Object.keys(filters).forEach(key => filters[key] === "" ? delete filters[key] : {});
    
    
    // 6. Call function to apply all filters and rebuild the table
    filterTable();
  
  
  
  // 7. Use this function to filter the table when data is entered.
  function filterTable() {
  
    // 8. Set the filtered data to the tableData.
    let filteredData = tableData;
  
    // 9. Loop through all of the filters and keep any data that
    // matches the filter values
    Object.entries(filters).forEach(([key, value]) => {
      filteredData = filteredData.filter(row => row[key] === value);
    });
  
      // Revert to displaying all the ufo sightings in a table format
      table(tableData);
  }
};
    // 10. Finally, rebuild the table using the filtered data
    buildTable(filteredData);
  
  
  
  
 
  
  // Build the table when the page loads
  buildTable(tableData);


  

  function reset() {

    //Clear the input elements
    // input0 = "";
    // input1 = "";
    // input2 = "";
    // input3 = "";
    // input4 = "";
    document.getElementById("datetime").value = "";
    document.getElementById("city").value = "";
    document.getElementById("state").value = "";
    document.getElementById("country").value = "";
    document.getElementById("shape").value = "";

    // Remove any children from the table
    tbody.html("");

    // Revert to displaying all the ufo sightings in the table format
    table(tableData);
}