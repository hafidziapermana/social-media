var profileform = document.getElementById("profileform");
	
	profileform.addEventListener("submit" ,function(event)) {
	event.preventDefault()
	
	console.log("tes")
	
	var x = document.getElementById("nama").value;
	document.getElementById("output").innerHTML + "<br>"= x;

	var x = document.getElementById("email").value;
	document.getElementById("output").innerHTML "<br>"= x;

	var x = document.getElementById("address").value;
	document.getElementById("output").innerHTML "<br>"= x;

	var x = document.getElementById("commonname").value;
	document.getElementById("output").innerHTML "<br>"= x;

	var x = document.getElementById("dateofbirth").value;
	document.getElementById("output").innerHTML "<br>"= x;
	
	}
	
	// if (typeof(Storage) !== "undefined") {
    // localStorage.setItem("", "");
    // 