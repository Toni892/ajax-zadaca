$(document).ready(function() {
    // GET: LIST USERS
    $.ajax({
        url: "https://reqres.in/api/users/?page=2",
        type: "GET",
        success: function(response) {
            console.log(response["data"]);
            for (const i in response["data"]) {
                let firstName = response["data"][i]["first_name"];
                let lastName = response["data"][i]["last_name"];
                let email = response["data"][i]["email"];
                let avatar = response["data"][i]["avatar"];
                
                $("#users").append(`<p>${firstName} ${lastName} ${email}<br><img src=${avatar}></p>`)
            }
        }
    });

    // Ostali pozivi na API.
    /*
    GET: SINGLE USER
    $.ajax({
        url: "https://reqres.in/api/users/2",
        type: "GET",
        success: function(response) {
            console.log(response);
        }
    });

     GET: SINGLE USER NOT FOUND (404)
    $.ajax({
        url: "https://reqres.in/api/users/23",
        type: "GET",
        success: function(response) {
            console.log(response);
        }
    });

     GET: LIST <RESOURCE>
    $.ajax({
        url: "https://reqres.in/api/unknown",
        type: "GET",
        success: function(response) {
            console.log(response);
        }
    });

     GET: SINGLE <RESOURCE>
    $.ajax({
        url: "https://reqres.in/api/unknown/2",
        type: "GET",
        success: function(response) {
            console.log(response);
        }
    });

     GET: SINGLE <RESOURCE> NOT FOUND (404)
    $.ajax({
        url: "https://reqres.in/api/unknown/23",
        type: "GET",
        success: function(response) {
            console.log(response);
        }
    });

    POST: CREATE
    $.ajax({
        url: "https://reqres.in/api/users/",
        type: "POST",
        data: {
            name: "morpheus",
            job: "leader",
        },
        success: function(response) {
            console.log(response);
        }
    });

    PUT: UPDATE
    $.ajax({
        url: "https://reqres.in/api/users/2",
        type: "PUT",
        data: {
            name: "morpheus",
            job: "zion resident",
        },
        success: function(response) {
            console.log(response);
        }
    });

    PATCH: UPDATE
    $.ajax({
        url: "https://reqres.in/api/users/",
        type: "PATCH",
        data: {
            name: "morpheus",
            job: "leader",
        },
        success: function(response) {
            console.log(response);
        }
    });

    DELETE: DELETE
    $.ajax({
        url: "https://reqres.in/api/users/2",
        type: "DELETE",
        success: function(response) {
            console.log(response);
        }
    });

    POST: REGISTER - SUCCESSFUL
    $.ajax({
        url: "https://reqres.in/api/register",
        type: "POST",
        data: {
            email: "eva.holt@reqres.in",
            password: "pistol",
        },
        success: function(response) {
            console.log(response);
        }
    });

    POST: REGISTER - UNSUCCESSFUL
    $.ajax({
        url: "https://reqres.in/api/register",
        type: "POST",
        data: {
            email: "sydney@fife",
        },
        success: function(response) {
            console.log(response);
        }
    });

    POST: LOGIN - SUCCESSFUL
    $.ajax({
        url: "https://reqres.in/api/login",
        type: "POST",
        data: {
            email: "eve.holt@reqres.in",
            password: "cityslicka",
        },
        success: function(response) {
            console.log(response);
        }
    });

    POST: LOGIN - UNSUCCESSFUL
    $.ajax({
        url: "https://reqres.in/api/login",
        type: "POST",
        data: {
            email: "peter@klaven",
        },
        success: function(response) {
            console.log(response);
        }
    });

    GET: DELAYED RESPONSE
    $.ajax({
        url: "https://reqres.in/api/users?delay=3",
        type: "GET",
        success: function(response) {
            console.log(response);
        }
    });
    */
});