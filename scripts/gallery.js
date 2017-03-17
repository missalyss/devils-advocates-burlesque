$(document).ready(function(){
      $('.carousel').carousel();
   });


var gallery = [
  {id: '#one', photo: 'da1.jpg'},
  //  {id: '#two', photo: 'da2.jpg'},
   {id: '#three', photo: 'da3.jpg'},
   {id: '#four', photo: 'da4.jpg'},
   {id: '#five', photo: 'da5.jpg'},
   {id: '#six', photo: 'da6.jpg'},
   {id: '#seven', photo: 'da7.jpg'},
   {id: '#eight', photo: 'da8.jpg'},
  {id: '#nine', photo: 'da9.jpg'},
  {id: '#ten', photo: 'da10.jpg'},
  {id: '#eleven', photo: 'da11.jpg'},
  {id: '#twelve', photo: 'da12.jpg'},
  {id: '#thirteen', photo: 'da13.jpg'},
  {id: '#fourteen', photo: 'da14.jpg'},
  {id: '#fifteen', photo: 'da15.jpg'},
  {id: '#sixteen', photo: 'da16.jpg'},
  {id: '#twentytwo', photo: 'da22.jpg'},
  {id: '#twentyfive', photo: 'da25.jpg'},
  {id: '#nineteen', photo: 'Behind_the_Scenes_The_Devils_Advocates-13.jpg'}
 ]


//APPEND PHOTOS INTO MAIN BODY
function appendGallery() {
    for (var i = 0; i < gallery.length; i++) {
        $('.carousel').append(
          `<a class="carousel-item" href="${gallery[i].id}!"><img class="responsive-img" src="./images/burlesque/gallery/${gallery[i].photo}" alt="${gallery[i].photo}"></a>`
        )
    }
}

appendGallery()
