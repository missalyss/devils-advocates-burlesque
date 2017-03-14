console.log("am i sane?");

//Eventually, this page will become a legitimate checkout when I have a server for this. subResult will get saved in the server and transfer to this page. $('#total').replaceWith(subResult) basically.


$('input.autocomplete').autocomplete({
   data: {
     "Apple": null,
     "Microsoft": null,
     "Google": 'http://placehold.it/250x250'
   },
   limit: 20, // The max amount of results that can be shown at once. Default: Infinity.
 });
       
