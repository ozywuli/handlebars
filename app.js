
$(document).ready(function(){


var App = {

loadExternalContent: function() {
    $.when(

        // load your data from a json store or php backend
        $.ajax({
            dataType: "json",
            url: "data/data.json"
        }),

        // load your external HTML template
        $.ajax({
            url:"template/book_tpl.html"
        })

    ).done(function(data,html){
        // render the template and data, append it to your target in the DOM
        var template = Handlebars.compile(html[0]);
        $(template(data[0])).appendTo("#external");
        }
    );
    }

};


App.loadExternalContent();

});