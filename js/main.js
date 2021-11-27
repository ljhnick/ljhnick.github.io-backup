fetch('research.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
    	console.log(data);
    	appendData(data);
    })
    .catch(function (err) {
        console.log('error: ' + err);
    });

function appendData(data) {

    // var projects = document.getElementsByClassName("research-projects");
    var projects = $(".research-projects");
    // console.log(projects);
    for (var i = 0; i < data.length; i++) {

        var div = $('<div class="row"></div>');

        var divLeft = $('<div class="col-lg-3"></div>');
        var divRight = $('<div class="col-lg-9"></div>');

        

        var title = $('<p></p>');
        title.append(data[i].title); 
        divRight.append(title);


        // div.innerHTML = 'Name: ' + data[i].firstName + ' ' + data[i].lastName;
        // mainContainer.appendChild(div);
        div.append(divLeft);
        div.append(divRight);

        projects.append(div);
    }
}