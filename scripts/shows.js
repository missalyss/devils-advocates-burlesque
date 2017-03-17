console.log("sanity!!!!!!!!!");

//ACTIVATES A DROPDOWN I THINK?
$(document).ready(function() {
    $('select').material_select();
});

//ACTIVATES MODAL ACTIONS
$(document).ready(function() {
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('#0').modal();
    $('#1').modal();
    $('#2').modal();
});

//UPCOMING SHOWS
var upcoming = [{
    id: '0',
    img: "http://fillmurray.com/300/300",
    imgAlt: "this is picture",
    title: "Den of Indecency",
    date: "March 3, 11:00pm",
    tixAvailable: 20,
    price: [17, 12],
    about: "Now what are the possibilities of warp drive? Cmdr Riker's nervous system has been invaded by an unknown microorganism. The organisms fuse to the nerve, intertwining at the molecular level. That's why the transporter's biofilters couldn't extract it. The vertex waves show a K-complex corresponding to an REM state. The engineering section's critical. Destruction is imminent. Their robes contain ultritium, highly explosive, virtually undetectable by your transporter."
},
{
    id: '1',
    img: "http://fillmurray.com/300/300",
    imgAlt: "this is picture",
    title: "this is a show",
    date: "April 8, 9, 10 show time",
    tixAvailable: 20,
    price: [17, 12],
    about: "Communication is not possible. The shuttle has no power. Using the gravitational pull of a star to slingshot back in time? We are going to Starbase Montgomery for Engineering consultations prompted by minor read-out anomalies. Probes have recorded unusual levels of geological activity in all five planetary systems. Assemble a team. Look at records of the Drema quadrant. Would these scans detect artificial transmissions as well as natural signals?"
},
  {
    id: '2',
    img: "http://fillmurray.com/350/350",
    imgAlt: "this is picture",
    title: "Guilty Pleasures",
    date: "May 5 11:00pm",
    tixAvailable: 20,
    price: [17, 12],
    about: "Deflector power at maximum. Energy discharge in six seconds. Warp reactor core primary coolant failure. Fluctuate phaser resonance frequencies. Resistance is futile. Recommend we adjust shield harmonics to the upper EM band when proceeding. These appear to be some kind of power-wave-guide conduits which allow them to work collectively as they perform ship functions. Increase deflector modulation to upper frequency band. Resistance is futile."
  }
]

// APPEND OBJECTS INTO MAIN BODY

function appendArticle(i, picLocation, artLocation) {
  var upcomObjInfo =
    `<h3>${upcoming[i].title}</h3>
    <h5>${upcoming[i].date}</h5>
    <p>${upcoming[i].about}</p>`

  var modalBtn = `<a class="modal-trigger waves-effect waves-light btn" href="#${upcoming[i].id}">Buy tickets</a>`

  var modalSelectDate = `
  <div class="input-field col s4">
    <select id="ticketDate">
      <option disabled selected>Select Date</option>
      <option value="apr7">${upcoming[i].date}</option>
    </select>
  </div>`

  var modalSelectType =`
  <div class="input-field col s4">
    <select id="ticketType">
      <option disabled selected>Select Type</option>
      <option value="${upcoming[i].price[0]}">General Admission $${upcoming[i].price[0]}</option>
      <option value="${upcoming[i].price[1]}">Cornish Alum $${upcoming[i].price[1]}</option>
    </select>
  </div>`

  var modalSelectAmount =`
  <div class="input-field col s4">
    <select id="ticketNumber">
      <option disabled selected>Select Number of Tickets</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
    </select>
  </div>`

  var modalSubtotal = `
  <div class="row">
    <div class="col l12">
      <p id="subtotal">Subtotal: $0</p>
    </div>
  </div>`

  var modalGuts =
      `<div id="${upcoming[i].id}" class="modal">
     <div class="modal-content">
     <h4>${upcoming[i].title}</h4>
     <p>${upcoming[i].about}</p>
     <div class="row">` + modalSelectDate + modalSelectType + modalSelectAmount + `</div>` + modalSubtotal +
     `<div class="modal-footer">
     <a href="./tickets.html" id="addCart" class="modal-action modal-close waves-effect waves-green btn-flat">Add to Cart</a>
     <a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat ">Cancel</a>
     </div>
     </div>
     </div>`

  $(picLocation).append(
      `<img src="${upcoming[i].img}" alt="${upcoming[i].imgAlt}">`
  )
$(artLocation).append(
      upcomObjInfo + modalBtn + modalGuts
  )
}

appendArticle(1, '#show2pic', '#show2art')

var numOfTix;
var typeOfTix;
var subResult;

$('#ticketNumber, #ticketType').on('change', function(){
  console.log($('#ticketNumber').val());
    numOfTix = $('#ticketNumber').val()
    typeOfTix = $('#ticketType').val()
    var result
    subResult = numOfTix * typeOfTix
    console.log(numOfTix, typeOfTix, subResult);
    $('#subtotal').replaceWith(function() {
        result = `<p id="subtotal">Subtotal: $${subResult}</p>`;
        return result;
    })
  })

  var cart = [
    numOfTix, typeOfTix, subResult
  ]
$('#addCart').on('click', function(){
  localStorage.setItem("tixQuant", cart[0])
  localStorage.setItem("tixType", cart[1])
  localStorage.setItem("subCost", cart[2])
})
