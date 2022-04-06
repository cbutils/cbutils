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
	    var file = document.getElementById("load-button").files[0];
	    document.getElementById("filename-box").value = file.name;
		
		

        var reader = new FileReader();

        // Closure to capture the file information.
        reader.onload = (function(theFile) {
            return function(e) {

                var content = e.target.result;
                if (content) {
                    // Inserting content into textarea, change id if you need
                    var textarea = document.getElementById('textareaid');
                    textarea.innerHTML = content;

                }
            };
        })(file);

        reader.readAsText(file);
	}, false);


	document.getElementById("home-button").addEventListener("click", function() {
		location.href = "home.html";
	}, false);
})
