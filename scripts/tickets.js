//
// $('.this-event').append(
//     `<img src="${upcoming[i].img}" alt="${upcoming[i].imgAlt}">`
// )

//on 'click' of the modal button... the name date and all the shit become local data? and the modal is appended? no that's crazy talk.


// $('.this-event').append(
//     upcomObjInfo + modalBtn + modalGuts
// )

$('#tix-quantity').append(
    "Tickets: " + localStorage.getItem("tixQuant")
)
$('#price-total').append(
    "Total: $" + localStorage.getItem("subCost")
)


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
            You have purchased\n' +
                localStorage.getItem("tixQuant") + ' tickets for \n\
            April 7 at 8:00pm\n\
            Total:' + localStorage.getItem("subCost") + '\n\
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
