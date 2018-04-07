var pageCounter = 1;
var btn = document.getElementById("btn");
var animalcontainer = document.getElementById("animal-info");
	
	btn.addEventListener("click", function() {
		var Request = new XMLHttpRequest();
		Request.open('GET','https://learnwebcode.github.io/json-example/animals-'+ pageCounter +'.json');
		Request.onload = function() {
			var outdata =JSON.parse(Request.responseText);
			renderHTML(outdata);
		};
	Request.send();
	pageCounter++;
		if(pageCounter > 3)
			{
				btn.classList.add("disabled");
			}
	});
	
	function renderHTML(data){
		var htmlString = " ";
		
		for(i = 0; i < data.length; i++){
			htmlString += "<p>" + data[i].name +" is a " + data[i].species + ".</p>";
			
		}
			animalcontainer.insertAdjacentHTML('beforeend',htmlString);
		
	}