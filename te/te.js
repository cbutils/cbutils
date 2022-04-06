function download(filename, content) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(content));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

document.addEventListener('DOMContentLoaded', (event) => {	
	// Start file download.
	document.getElementById("save-button").addEventListener("click", function() {
	    var filename = document.getElementById("filename-box").value;
	    if (filename == "") {
		filename = "filename.txt";
	    }
	    var content = document.getElementById("edit-box").value;
	    download(filename, content);
	}, false);

	document.getElementById("open-button").addEventListener("click", function() {
	    var filename = document.getElementById("load-button").files[0].name;
	    document.getElementById("filename-box").value = filename;
	}, false);


	document.getElementById("home-button").addEventListener("click", function() {
		location.href = "../index.html";
	}, false);
})
