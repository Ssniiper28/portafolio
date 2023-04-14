var scrollId;


function resolver(id){
	var scrolling = false;
	var textField = document.getElementById("display");
	var container = document.getElementById("msgcontainer");
	var text = document.getElementById("userinput").value;

	document.getElementById("userinput").value = "";

	textField.style.top = "0px";
	clearInterval(scrollId);

	if (id == 1){
		var encrypt = text.replaceAll("e","enter").replaceAll("i","imes").replaceAll("a","ai").replaceAll("o","ober").replaceAll("u", "ufat")
	}

	if (id == 0) {
		var encrypt = text.replaceAll("enter","e").replaceAll("imes","i").replaceAll("ai","a").replaceAll("ober","o").replaceAll("ufat", "u");
	}
	

	if (text.trim() != ""){
		hideError();
		textField.style.top = "0px";
		textField.innerHTML = encrypt;
		textField.style.textAlign = "left";

		if (container.scrollHeight > container.offsetHeight && !scrolling) {
			scrolling = true;
			var scrollDistance = container.scrollHeight + container.offsetHeight / 15;
			var i = 0;
			scrollId = setInterval(function(){
				textField.style.top = i + "px";
				i = i - 0.5;
				if (-i > scrollDistance){
					i = container.offsetHeight;
				}
			}, 30);
		}
	} else {
		textField.innerHTML = "Ningun mensaje fue encontrado";
		textField.style.textAlign = "center"
		showError();
	}
}


function copiar(){
	var text = document.getElementById("display").innerHTML;
	navigator.clipboard.writeText(text);
}

function hideError(){
	var errorimg = document.getElementById("imgerror");
	var error = document.getElementById("error");
	var btnCopiar = document.getElementById("copiar");
	errorimg.style.display = "none";
	error.style.display = "none";
	btnCopiar.style.display = "block";
}

function showError(){
	var errorimg = document.getElementById("imgerror");
	var error = document.getElementById("error");
	var btnCopiar = document.getElementById("copiar");
	errorimg.style.display = "block";
	error.style.display = "block";
	btnCopiar.style.display = "none";
}

/*
function title(){
	var title = "Proyecto Encriptador";
	var specialChars = "123456789@#$;"
	var count = 0;
	setInterval(function(){
		var titleC = title[Math.floor(Math.random() * title.length)]
		var subsC = specialChars[Math.floor(Math.random() * specialChars.length)]
		title = title.replaceAll(titleC, subsC)
		count++;

		if (count == 3){
			count = 0;
			title = "Proyecto Encriptador";
		}

		console.log(titleC + " " + subsC + " " + title);
		document.getElementById("title").innerHTML = title;
	}, 1000);
}

window.onload = title;

*/