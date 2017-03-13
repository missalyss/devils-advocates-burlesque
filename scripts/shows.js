console.log("sanity!!!!!!!!!");

// ACTIVATES DROPDOWN MENU ON HOMEPAGE
$(document).ready(function() {
    $(".dropdown-button").dropdown();
})

$(document).ready(function() {
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('#modal1').modal();
});

//UPCOMING SHOWS
var upcoming = [{
        img: "http://fillmurray.com/300/300",
        imgAlt: "this is picture",
        title: "Den of Indecency",
        date: "March 3, 11:00pm",
        about: "Now what are the possibilities of warp drive? Cmdr Riker's nervous system has been invaded by an unknown microorganism. The organisms fuse to the nerve, intertwining at the molecular level. That's why the transporter's biofilters couldn't extract it. The vertex waves show a K-complex corresponding to an REM state. The engineering section's critical. Destruction is imminent. Their robes contain ultritium, highly explosive, virtually undetectable by your transporter."
    },
    {
        img: "http://fillmurray.com/400/300",
        imgAlt: "this is picture",
        title: "Flora and Fauna",
        date: "April 8, 9, 10",
        about: "Now what are the possibilities of warp drive? Cmdr Riker's nervous system has been invaded by an unknown microorganism. The organisms fuse to the nerve, intertwining at the molecular level. That's why the transporter's biofilters couldn't extract it. The vertex waves show a K-complex corresponding to an REM state. The engineering section's critical. Destruction is imminent. Their robes contain ultritium, highly explosive, virtually undetectable by your transporter."
    },
    {
        img: "http://fillmurray.com/350/350",
        imgAlt: "this is picture",
        title: "Guilty Pleasures",
        date: "May 5 11:00pm",
        about: "Now what are the possibilities of warp drive? Cmdr Riker's nervous system has been invaded by an unknown microorganism. The organisms fuse to the nerve, intertwining at the molecular level. That's why the transporter's biofilters couldn't extract it. The vertex waves show a K-complex corresponding to an REM state. The engineering section's critical. Destruction is imminent. Their robes contain ultritium, highly explosive, virtually undetectable by your transporter."
    }

]


// var rowOpen = `<div class="row">`
// var pictureColOpen = `<div class="col l5 s12">`
// var articleColOpen = `<div class="col l7 s12">`
// var divClose = `</div>`
// var br = `</br>`

//APPEND OBJECTS INTO MAIN BODY
// function appendArticle() {
//     for (var i = 0; i < upcoming.length; i++) {
//         $('.shows-main').append(rowOpen + pictureColOpen + `<img src="${upcoming[i].img}" alt="${upcoming[i].imgAlt}">` + divClose + articleColOpen + `<h3>${upcoming[i].title}</h3>` + `<h5>${upcoming[i].date}</h5>` + `<p>${upcoming[i].about}</p>` + `<a href="../html/tickets.html">Buy tickets here!</a>`+divClose + divClose + `<div class="divider"></div>` + br)
//     }
// }

var modalGuts =
    `<div id="modal1" class="modal modal-fixed-footer">
<div class="modal-content">
<h4>${this.title}</h4>
<p>A bunch of text</p>
</div>
<div class="modal-footer">
<a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat ">Agree</a>
</div>
</div>`



//APPEND OBJECTS INTO MAIN BODY
function appendArticle() {
  var resultString;
    for (var i = 0; i < upcoming.length; i++) {
      resultString= `<img src="${upcoming[i].img}" alt="${upcoming[i].imgAlt}">` +
        `</div>` +
        `<div class="col l7 s12">` +
        `<h3>${upcoming[i].title}</h3>` +
        `<h5>${upcoming[i].date}</h5>` +
        `<p>${upcoming[i].about}</p>`
    }
    return resultString;
}


$('.shows-main').append(
    `<div class="row">` +
    `<div class="col l5 s12">` + appendArticle() + `<a class="modal-trigger waves-effect waves-light btn" href="#modal1">Buy tickets</a>` +
    modalGuts +
    `</div>` +
    `</div>` +
    `<div class="divider"></div>` +
    `</br>`)
