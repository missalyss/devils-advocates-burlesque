//Eventually, this page will become a legitimate checkout when I have a server for this. subResult will get saved in the server and transfer to this page. $('#total').replaceWith(subResult) basically.

//LOL I'M NOT SURE WHAT THIS IS
// $('input.autocomplete').autocomplete({
//    data: {
//      "Apple": null,
//      "Microsoft": null,
//      "Google": 'http://placehold.it/250x250'
//    },
//    limit: 20, // The max amount of results that can be shown at once. Default: Infinity.
//  });

console.log($('#tix-quantity'));

$('#email-setup').on('submit', function(e) {
    e.preventDefault()
    var $email = $('#email').val()
    var $firstName = $('#first_name').val()
    var $lastName = $('#last_name').val()


    $.ajax({
        url: 'http://galvanize-cors-proxy.herokuapp.com/https://api.mailgun.net/v3/sandbox2fe140c527144a9285414c87b24372b2.mailgun.org/messages',
        method: "POST",
        dataType: 'json',
        data: {
            from: 'Mailgun Sandbox <postmaster@sandbox2fe140c527144a9285414c87b24372b2.mailgun.org>',
            to: $email,
            subject: 'Tickets for Devil\'s Advocates Burlesque',
            text: $firstName + ' ' + $lastName + ',\n\
            \n\
            Thank you for your recent purchase to Devil\'s Advocates upcoming show, "Flora and Fauna."\n\
            You have purchased\n\
            2 tickets for \n\
            April 7 at 8:00pm\n\
            Total: $34 \n\
            Please keep this email, as this is your receipt and ticket into the show. \n\
            We are excited to see you there! \n\
            \n\
            With love,\n\
            The Devil\'s Advocates'
        },
        beforeSend: function(xhr) {
            xhr.setRequestHeader('Authorization', 'Basic ' + btoa('api:key-eda7e95057a36fdee3ca6f8beb90a734'))
        }
    }).then(function(result) {
        console.log(result);
    }).catch(function(error) {
        console.log('Errorrrrrrrrrrrrrr:', error); //also can console.error
    })
})
