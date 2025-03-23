

function myFunction() {
	let beginNum = prompt('Enter the number of the FIRST ticket. Don\'t add beginning zeroes. \n(Ex. type "10" instead of "0010")');
	let endNum = prompt('Enter the number of the LAST ticket. Don\'t add beginning zeroes. \n(Ex. type "10" instead of "0010")');

	let printTicket = "";

	for (let printNum = beginNum; printNum <= endNum; printNum++) {
		printTicket += "<div><h2>Rafflesia</h2><div><p>Ticket No.</p><p>" + String(printNum).padStart(4, '0') + "</p></div></div>";
	}
	
	document.getElementById("generatorOut").innerHTML = printTicket;
}