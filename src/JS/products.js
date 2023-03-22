// Given Data 

var data = [
  {
    id: "100",
    name: "iPhone 4S",
    brand: "Apple",
    os: "IOS",
  },
  {
    id: "101",
    name: "Moto X",
    brand: "Motorola",
    os: "Android",
  },
  {
    id: "102",
    name: "iPhone 6",
    brand: "Apple",
    os: "IOS",
  },
  {
    id: "103",
    name: "Samsung Galaxy S",
    brand: "Samsung",
    os: "Android",
  },
  {
    id: "104",
    name: "Google Nexus",
    brand: "Asus",
    os: "Android",
  },
  {
    id: "105",
    name: "Surface",
    brand: "Microsoft",
    os: "Windows",
  },
];

// Display Function 
let cnt = 0;
function display() {
  cnt = 0;
  let txt = "";
  data.forEach((element) => {
    txt += `<tr><td>${element.id}</td>
		<td>${element.name}</td>
		<td>${element.brand}</td>
		<td>${element.os}</td>
		<td><button id="search" onclick="delete_row(${cnt++})">X</button></td></tr>`;
  });
  $("#table_body").html(txt);
}
display();

// Delete Function 
function delete_row(val) {
  data.splice(val, 1);
  display();
}

// Filter Function 
function filtering() {
  debugger;
  word = "";
  cnt = 0;
  let f_os = $("#filter_os").val();
  let f_brand = $("#filter_brand").val();
  console.log(f_os, f_brand);
  data.forEach((element) => {
    if (f_os && f_brand) {
      if (element.os == f_os && element.brand == f_brand) {
        word += `<tr><td>${element.id}</td>
				<td>${element.name}</td>
				<td>${element.brand}</td>
				<td>${element.os}</td>
				<td><button id="search" disabled>X</button></td></tr>`;
      }
    } else if (f_os) {
      if (element.os == f_os) {
        word += `<tr><td>${element.id}</td>
				<td>${element.name}</td>
				<td>${element.brand}</td>
				<td>${element.os}</td>
				<td><button id="search" disabled>X</button></td></tr>`;
      }
    } else if (f_brand) {
      if (element.brand == f_brand) {
        word += `<tr><td>${element.id}</td>
				<td>${element.name}</td>
				<td>${element.brand}</td>
				<td>${element.os}</td>
				<td><button id="search" disabled>X</button></td></tr>`;
      }
    } else {
      word += `<tr><td>${element.id}</td>
			<td>${element.name}</td>
			<td>${element.brand}</td>
			<td>${element.os}</td>
			<td><button id="search" onclick="delete_row(${cnt++})">X</button></td></tr>`;
    }
  });
  $("#table_body").html(word);
}

// Search Function 
function searching() {
  let word = "";
  let search_input = $("#search_panel").val();
  data.forEach((element) => {
    if (element.id == search_input || element.name == search_input) {
      word += `<tr><td>${element.id}</td>
			<td>${element.name}</td>
			<td>${element.brand}</td>
			<td>${element.os}</td></tr>`;
    }
  });
  $("#table_search").html(word);
}
