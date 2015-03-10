var main = function () {
    "use strict";
    var $button= $("#search");   
    $button.on("click",function(){
    var input_city= $("#city").val();
    if(input_city!=""){
        
    $.ajax({
            
            type: "GET",
            url: "/yelp?city="+input_city,
           
            jsonpCallback: "yelp",
            contentType: "application/jsonp; charset=utf-8",
            dataType: "jsonp"
          
        })
        .done(function (data,status){
        
            $('#list').html("");
            var i = 0;
            for(i=0; i < data.businesses.length; i++)
                {
                    $('#list').append("<div class='business'>");
                    $('#list').append("<div class='business_name'>");
                    $('#list').append(data.businesses[i].name);
                    $('#list').append("</div>");
                    $('#list').append("<div class='business_address'>");
                    $('#list').append(data.businesses[i].location.display_address);
                    $('#list').append("</div>");
                    $('#list').append("<div class='business_phone'>");
                    $('#list').append(data.businesses[i].phone);
                    $('#list').append("</div>");
                    $('#list').append("<div class='business_rating'>");
                    $('#list').append(data.businesses[i].rating);
                    $('#list').append("</div>");
                    $('#list').append("</div>");
                }
        })
        .fail(function (data, status){
            console.log("fail called");
            console.log(data);
            console.log(status);
        });
    
        }
        
    });
};

$(document).ready(main);

