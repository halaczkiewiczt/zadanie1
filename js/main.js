var _json;
var template = "<div class='card card-outline-primary mb-3 text-center'><div class='card-block '><blockquote class='card-blockquote'><p><b>{{title}}</b></p> <footer>{{body}}</footer></blockquote></div></div>";

// <div class="card-block">
//     <blockquote class="card-blockquote">
//     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
// <footer>Someone famous in <cite title="Source Title">Source Title</cite></footer>
// </blockquote>
// </div>



var html = "";


var getJson = $.getJSON( "http://jsonplaceholder.typicode.com/posts", function( json ) {
    _json = json;
});



getJson.complete(function() {
    for (i = 0; i < _json.length; i++) {
        html += Mustache.to_html(template, _json[i]);
    }
    $('#wall').html(html);
});
