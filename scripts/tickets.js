
$('#tix-quantity').append(
    "Tickets: " + localStorage.getItem("tixQuant")
)
$('#price-total').append(
    "Total: $" + localStorage.getItem("subCost")
)

$('#show-pic').append(
    `<img src="${localStorage.getItem("this-show-pic")}" alt="">`
)
$('#show-name').prepend(
    `<h3>${localStorage.getItem("this-show-name")}</h3>`
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
            Thank you for your recent purchase to Devil\'s Advocates upcoming show, "' +
            localStorage.getItem("this-show-name") + '"\n\
            You have purchased\n' +
            localStorage.getItem("tixQuant") + ' tickets for \n\
            '
            +localStorage.getItem("tixDate")+ '\n\
            Total:' + localStorage.getItem("subCost") + '\n\
            \n\
            Please keep this email! It is your receipt and your Will Call ticket. Please bring your ID to verify your tickets. If you selected the Cornish Alum ticket type, make sure you bring your student ID!\n\
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
        window.location.href = "./ticketsredirect.html"
    }).catch(function(error) {
        console.log('Errorrrrrrrrrrrrrr:', error);
    })
})
