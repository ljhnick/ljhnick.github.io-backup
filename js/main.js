fetch('research.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
    	appendData(data);
    })
    .catch(function (err) {
        console.log('error: ' + err);
    });

function appendData(data) {

    // var projects = document.getElementsByClassName("research-projects");
    var projects = $(".research-project");
    // console.log(projects);
    for (var i = 0; i < data.length; i++) {

        var div = $('<div class="row"></div>');

        var divLeft = $('<div class="col-lg-4"></div>');
        var divRight = $('<div class="col-lg-8"></div>');


        var thumbnail = $('<img src="" />');
        thumbnail.attr("src", data[i].gif);

        divLeft.append(thumbnail);
        

        var title = $('<h6></h6>');
        // title.css("font-weight", "bold") ;
        title.append(data[i].title); 
        divRight.append(title);

        var authors = $('<p class="text-muted"></p>');
        // authors.css("margin: 0px");
        authors.append(data[i].authors);

        if (data[i].conf != "") {
        	authors.append("<br>"); 
        	var conf = $("<i></i>");
        	conf.append(data[i].conf);
        	authors.append(conf);
        }

        authors.append('<br>');
        if (data[i].pdf != "") {
            var pdf = $('<a class="info" href=""><i class="far fa-file-pdf fa-lg"></i></a>');
            pdf.attr('href', data[i].pdf);
            authors.append(pdf);
        }
        
        if (data[i].video != "") {
            var video = $('<a class="info" href=""><i class="fas fa-video fa-lg"></i></a>');
            video.attr('href', data[i].video);
            authors.append(video);
        }

        if (data[i].doi != "") {
        	var doi = $('<a class="info" href=""><i class="ai ai-doi ai-lg"></i></a>');
	        doi.attr('href', data[i].doi);  
	        authors.append(doi);
        }

        if (data[i].page != "" && data[i].page != undefined) {
        	var doi = $('<a class="info" href="">[Project Page]</a>');
	        doi.attr('href', data[i].doi);  
	        authors.append(doi);
        }

		
		divRight.append(authors);

        // div.innerHTML = 'Name: ' + data[i].firstName + ' ' + data[i].lastName;
        // mainContainer.appendChild(div);
        div.append(divLeft);
        div.append(divRight);

        var dash = $('<div class="col-md-12"><hr class="dash"></div>');
        div.append(dash);

        projects.append(div);
    }
}


fetch('news.txt')
  .then(response => response.text())
  .then(text => updateNews(text))



function updateNews(text) {
	var lines = text.split('\n');
	// console.log(lines);
	var section = $('.news');

	for (var i=0; i < lines.length; i++) {
		var newsText = lines[i];
		var news = $('<li></li>');
		news.append(newsText);
		// console.log(newsText);
		section.append(news);
	}
	
	
}
