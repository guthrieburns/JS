var $tbody = document.querySelector("tbody");
var $datetimeInput = document.querySelector("#datetime");
var $searchBtn1 = document.querySelector("#search1");
var $cityInput = document.querySelector("#city");
var $searchBtn2 = document.querySelector("#search2");
var $stateInput = document.querySelector("#state");
var $searchBtn3 = document.querySelector("#search3");
var $countryInput = document.querySelector("#country");
var $searchBtn4 = document.querySelector("#search4");
var $shapeInput = document.querySelector("#shape");
var $searchBtn5 = document.querySelector("#search5");

$searchBtn1.addEventListener("click", handleSearchButtonClick);
$searchBtn2.addEventListener("click", handleSearchButtonClick2);
$searchBtn3.addEventListener("click", handleSearchButtonClick3);
$searchBtn4.addEventListener("click", handleSearchButtonClick4);
$searchBtn5.addEventListener("click", handleSearchButtonClick5);

var filteredData = dataSet;

function renderTable() {
    $tbody.innerHTML = "";
    for (var i = 0; i < filteredData.length; i++) {
      var ufo_data = filteredData[i];
      var fields = Object.keys(ufo_data);
      var $row = $tbody.insertRow(i);
      for (var j = 0; j < fields.length; j++) {
        var field = fields[j];
        var $cell = $row.insertCell(j);
        $cell.innerText = ufo_data[field];
      }
    }
  }

function handleSearchButtonClick() {
    var filterState = $datetimeInput.value.trim();

    filteredData = dataSet.filter(function(ufo_data) {
    var addressState = ufo_data.datetime;
        return addressState === filterState;
    });
    renderTable();
  }

  function handleSearchButtonClick2() {

    var filterState = $cityInput.value.trim();

    filteredData = dataSet.filter(function(ufo_data) {
    var addressState = ufo_data.city;

        return addressState === filterState;
    });
    renderTable();
  }

  function handleSearchButtonClick3() {
    var filterState = $stateInput.value.trim();

    filteredData = dataSet.filter(function(ufo_data) {
    var addressState = ufo_data.state;

        return addressState === filterState;
    });
    renderTable();
  }

  function handleSearchButtonClick4() {
 
    var filterState = $countryInput.value.trim();

    filteredData = dataSet.filter(function(ufo_data) {
    var addressState = ufo_data.country;

        return addressState === filterState;
    });
    renderTable();
  }

  function handleSearchButtonClick5() {
    
    var filterState = $shapeInput.value.trim();

    filteredData = dataSet.filter(function(ufo_data) {
    var addressState = ufo_data.shape;

        return addressState === filterState;
    });
    renderTable();
  }

renderTable();