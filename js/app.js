
function changeStylesheet(filename){
	var path = 'css/' + filename;
	document.getElementById('main-style').setAttribute('href', path);
}

// changeStylesheet('dark.css');