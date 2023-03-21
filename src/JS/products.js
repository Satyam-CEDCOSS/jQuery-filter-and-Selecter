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

function display(){
	let cnt=0
	let txt=""
	data.forEach(element => {
		txt+=`<tr><td>${element.id}</td>
		<td>${element.name}</td>
		<td>${element.brand}</td>
		<td>${element.os}</td>
		<td><button id="search" onclick="delete_row(${cnt++})">X</button></td></tr>`
	});
	$("#table_body").html(txt)
}
display()

function delete_row(val) {
	data.splice(val,1)
	display()
}

function sorting(){
	let sortby = $("#sort_by").val()
	let sortfor = $("#sort_for").val()
	if (sortby == "ascending") {
		data = data.sort((a, b) => {
		  let fa = a[sortfor]
			fb = b[sortfor];
  
		  if (fa < fb) {
			return -1;
		  }
		  if (fa > fb) {
			return 1;
		  }
		  return 0;
		});
	}
	else if (sortby== "decending"){
		data = data.sort((a, b) => {
			let fa = a[sortfor].toLowerCase(),
			  fb = b[sortfor].toLowerCase();
	
			if (fa > fb) {
			  return -1;
			}
			if (fa < fb) {
			  return 1;
			}
			return 0;
		  });
	}
	display()
}

function searching(){
	let word = ""
	let search_choose = $("#search_select").val();
	let search_input = $("#search_panel").val();
	data.forEach(element => {
		if(element[search_choose]==search_input){
			word+=`<tr><td>${element.id}</td>
			<td>${element.name}</td>
			<td>${element.brand}</td>
			<td>${element.os}</td></tr>`
		}
	});
	$("#table_search").html(word)
}



