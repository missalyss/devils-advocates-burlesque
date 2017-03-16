console.log("sanity");

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


//UPCOMING SHOWS
var upcoming = [{
        img: `<div class="video-container"> <iframe width="560" height="315" src="https://www.youtube.com/embed/vAB2KSiBn-s" frameborder="0" allowfullscreen></iframe></div>`,
        imgAlt: "trying to put in a video",
        title: "Beauty in Bedlam Trailer",
        subtitle: "Our show last November",
        about: "Now what are the possibilities of warp drive? Cmdr Riker's nervous system has been invaded by an unknown microorganism. The organisms fuse to the nerve, intertwining at the molecular level. That's why the transporter's biofilters couldn't extract it. The vertex waves show a K-complex corresponding to an REM state. The engineering section's critical. Destruction is imminent. Their robes contain ultritium, highly explosive, virtually undetectable by your transporter."
    },
    {
        img: `<img src="http://fillmurray.com/400/300" alt="this is picture">`,
        title: "Don't miss our upcoming show: Flora and Fauna!",
        subtitle: "April 8, 9, 10",
        about: "Now what are the possibilities of warp drive? Cmdr Riker's nervous system has been invaded by an unknown microorganism. The organisms fuse to the nerve, intertwining at the molecular level. That's why the transporter's biofilters couldn't extract it. The vertex waves show a K-complex corresponding to an REM state. The engineering section's critical. Destruction is imminent. Their robes contain ultritium, highly explosive, virtually undetectable by your transporter."
    },
    {
        img: `<img src="http://fillmurray.com/350/350" alt="this is picture">`,
        title: "Devil's Advocates are thinking of starting a Cabaret. Wanna get on board?",
        subtitle: "Send us an email today!",
        about: "Now what are the possibilities of warp drive? Cmdr Riker's nervous system has been invaded by an unknown microorganism. The organisms fuse to the nerve, intertwining at the molecular level. That's why the transporter's biofilters couldn't extract it. The vertex waves show a K-complex corresponding to an REM state. The engineering section's critical. Destruction is imminent. Their robes contain ultritium, highly explosive, virtually undetectable by your transporter."
    }

]


var rowOpen = `<div class="row">`
var pictureColOpen = `<div class="col l5 s12">`
var articleColOpen = `<div class="col l7 s12">`
var divClose = `</div>`
var br = `</br>`

//APPEND OBJECTS INTO MAIN BODY
function appendArticle() {
    for (var i = 0; i < upcoming.length; i++) {
        $('.home-main').append(rowOpen + pictureColOpen + upcoming[i].img + divClose + articleColOpen + `<h4>${upcoming[i].title}</h4>` + `<h5>${upcoming[i].subtitle}</h5>` + `<p>${upcoming[i].about}</p>` + divClose + divClose + `<div class="divider"></div>` + br)
    }
}

appendArticle()
