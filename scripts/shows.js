console.log("sanity!!!!!!!!!");

// ACTIVATES DROPDOWN MENU ON HOMEPAGE
$(document).ready(function() {
    $(".dropdown-button").dropdown();
})

$(document).ready(function() {
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('#0').modal();
});
$(document).ready(function() {
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('#1').modal();
});
$(document).ready(function() {
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('#2').modal();
});


//UPCOMING SHOWS
var upcoming = [{
    id: '#0',
    img: "http://fillmurray.com/300/300",
    imgAlt: "this is picture",
    title: "Den of Indecency",
    date: "March 3, 11:00pm",
    about: "Now what are the possibilities of warp drive? Cmdr Riker's nervous system has been invaded by an unknown microorganism. The organisms fuse to the nerve, intertwining at the molecular level. That's why the transporter's biofilters couldn't extract it. The vertex waves show a K-complex corresponding to an REM state. The engineering section's critical. Destruction is imminent. Their robes contain ultritium, highly explosive, virtually undetectable by your transporter."
},
{
    id: '#1',
    img: "http://fillmurray.com/400/300",
    imgAlt: "this is picture",
    title: "Flora and Fauna",
    date: "April 8, 9, 10",
    about: "Communication is not possible. The shuttle has no power. Using the gravitational pull of a star to slingshot back in time? We are going to Starbase Montgomery for Engineering consultations prompted by minor read-out anomalies. Probes have recorded unusual levels of geological activity in all five planetary systems. Assemble a team. Look at records of the Drema quadrant. Would these scans detect artificial transmissions as well as natural signals?"
},
{
    id: '#2',
    img: "http://fillmurray.com/350/350",
    imgAlt: "this is picture",
    title: "Guilty Pleasures",
    date: "May 5 11:00pm",
    about: "Deflector power at maximum. Energy discharge in six seconds. Warp reactor core primary coolant failure. Fluctuate phaser resonance frequencies. Resistance is futile. Recommend we adjust shield harmonics to the upper EM band when proceeding. These appear to be some kind of power-wave-guide conduits which allow them to work collectively as they perform ship functions. Increase deflector modulation to upper frequency band. Resistance is futile."
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




//APPEND OBJECTS INTO MAIN BODY
function appendArticle() {
  var $pictureCol
  var $objString;

  for (var i = 0; i < upcoming.length; i++) {
    var $modalBtn;
    var $modalGuts;
        $pictureCol = `<div class="col l5 s12">
      <img src="${upcoming[i].img}" alt="${upcoming[i].imgAlt}">
      </div>`

        $objString =
            `<div class="col l7 s12">
      <h3>${upcoming[i].title}</h3>
      <h5>${upcoming[i].date}</h5>
      <p>${upcoming[i].about}</p>`

        $modalBtn = `<a class="modal-trigger waves-effect waves-light btn" href="${upcoming[i].id}">Buy tickets</a>`

        $modalGuts =
            `<div id="${upcoming[i].id}" class="modal modal-fixed-footer">
      <div class="modal-content">
      <h4>${upcoming[i].title}</h4>
      <p>${upcoming[i].about}</p>
      </div>
      <div class="modal-footer">
      <a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat ">Go to Billing</a>
      </div>
      </div>`
//the modal button wont open. everything else seems pretty ok.


      console.log($('.shows-main').append(
        `<div class="row">` + $pictureCol + $objString + $modalBtn + $modalGuts +
        `</div>` +
        `</div>` +
        `<div class="divider"></div>` +
        `</br>`))
    }
}

appendArticle()
