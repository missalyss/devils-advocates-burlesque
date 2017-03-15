
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



 // $('#email-setup').on('submit', function(e){
 //     e.preventDefault()
 //     var email = $('#email').val()

 $.ajax({
   url: 'http://galvanize-cors-proxy.herokuapp.com/https://api.mailgun.net/v3/sandbox2fe140c527144a9285414c87b24372b2.mailgun.org/messages',
  //  username: 'api',
  //  password: 'api:key-eda7e95057a36fdee3ca6f8beb90a734',
   method: "POST",
   dataType: 'json',
   data: {
     from: 'Mailgun Sandbox <postmaster@sandbox2fe140c527144a9285414c87b24372b2.mailgun.org>',
     to: 'Alyssa <alyssa.m.evans@gmail.com>',
     subject: 'cool beans',
     text: 'Hello things and stuff is rad dope'
   },
   beforeSend: function (xhr) {
     xhr.setRequestHeader('Authorization', 'Basic ' + btoa('api:key-eda7e95057a36fdee3ca6f8beb90a734'))
   }
 }).then(function (result) {
   console.log(result);
 }).catch(function(error) {
   console.log('Errorrrrrrrrrrrrrr:', error); //also can console.error
 })
 // })


 // $.ajax({
 //     headers: {"Authorization": "Basic api:key-b50a9065a7b9bdf464f3d7a418ca96bb"},
 //
 //     url: "https://api.mailgun.net/v3/sandbox93d8299f673a4c32952b7592956cb3d9.mailgun.org/messages",
 //     type: "POST",
 //     dataType: 'json',
 //     data: {
 //         name: name,
 //         phone: phone,
 //         email: email,
 //         message: message
 //     },
 //     success: function() {
 //         alert('ok');
 //     },
 //     error: function() {
 //         alert('problems');
 //     }
 // }
