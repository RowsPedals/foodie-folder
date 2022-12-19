import * as bootstrap from 'bootstrap';
import "./import-jquery"
import "jquery-ui-dist/jquery-ui.js";

// normal javascript

// jquery
var links = $(".link");
links.on('click', function(e) {
    var buttonClicked = e.currentTarget;
    console.log($(e.currentTarget));
});
