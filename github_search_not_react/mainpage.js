$(document).ready(function () {

    var value = $("#container");
    var container = $("#user-info");
    


    value.change(function (event) {
        fetch('https://api.github.com/search/users?q=' + event.target.value)
            .then(function (response) {
                return response.json();
            })
            .then(function (response) {
                console.log(response);

                var users = response.items;
                container.empty();

                users.forEach(function (element) {
                    


                    container.append("<div><img src='" +
                        element.avatar_url +
                        "' /> <a href='user.html'> <p> Name: " +
                        element.login +
                        "</p> </a></div>");

                });
            })
            


    });

    


    

});
