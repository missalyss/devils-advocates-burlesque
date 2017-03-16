console.log("sanity!!!!!!!!!");

// ACTIVATES DROPDOWN MENU ON HOMEPAGE
$(document).ready(function() {
    $(".dropdown-button").dropdown({
        inDuration: 300,
        outDuration: 225,
        constrainWidth: true, // Does not change width of dropdown to that of the activator
        hover: false, // Activate on hover
        gutter: 0, // Spacing from edge
        belowOrigin: true, // Displays dropdown below the button
        alignment: 'left', // Displays dropdown with edge aligned to the left of button
        stopPropagation: false // Stops event propagation
    });
})

$(document).ready(function() {
    $('select').material_select();
});

$(document).ready(function() {
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('#0').modal();
    $('#1').modal();
    $('#2').modal();
});

var subResult;

$('#ticketNumber, #ticketType').on('change', function() {
    var numOfTix = $('#ticketNumber').val()
    var typeOfTix = $('#ticketType').val()
    var result
    subResult = numOfTix * typeOfTix
    console.log(subResult);
    $('#subtotal').replaceWith(function() {
        result = `<p id="subtotal">Subtotal: $${subResult}</p>`;
        return result;
    })
    var cart = [
        numOfTix, typeOfTix, subResult
    ]
    localStorage.setItem("tixQuant", cart[0])
    localStorage.setItem("tixType", cart[1])
    localStorage.setItem("subCost", cart[2])
})



// function saveCart() {
// }
//
// saveCart()
//
// localStorage.setItem("username", "joe")


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
        img: "http://fillmurray.com/300/300",
        imgAlt: "this is picture",
        title: "this is a show",
        date: "April 8, 9, 10 show time",
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



// APPEND OBJECTS INTO MAIN BODY

function appendArticle1() {
    var $pictureCol
    var $objString;
    var $modalBtn;
    var $modalGuts;
    pictureCol = `<img src="${upcoming[1].img}" alt="${upcoming[1].imgAlt}">`

    objString =
        `<h3>${upcoming[1].title}</h3>
      <h5>${upcoming[1].date}</h5>
      <p>${upcoming[1].about}</p>`

    modalBtn = `<a class="modal-trigger waves-effect waves-light btn" href="${upcoming[1].id}">Buy tickets</a>`

    modalGuts =
    `<p>hey</p>`
      //   `<div id="${upcoming[1].id}" class="modal modal-fixed-footer">
      // <div class="modal-content">
      // <h4>${upcoming[1].title}</h4>
      // <p>${upcoming[1].about}</p>
      // </div>
      // <div class="modal-footer">
      // <a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat ">Go to Billing</a>
      // </div>
      // </div>`
    //the modal button wont open. everything else seems pretty ok.


  $('#show1pic').append(
      `<img src="${upcoming[1].img}" alt="${upcoming[1].imgAlt}">`
    )
console.log($('#show1art').append(
    objString + modalBtn
  ))
}

appendArticle1()
