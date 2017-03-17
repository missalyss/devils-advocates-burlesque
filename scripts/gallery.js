$(document).ready(function(){
      $('.carousel').carousel({fullWidth: true});
   });


var gallery = [
  {id: '#one', photo: 'da1.jpg'},
   {id: '#two', photo: 'da2.jpg'},
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
  {id: '#seventeen', photo: 'da17.jpg'} ]


//APPEND PHOTOS INTO MAIN BODY
function appendGallery() {
    for (var i = 0; i < gallery.length; i++) {
        $('.carousel').append(
          `<a class="carousel-item" href="${gallery[i].id}!"><img src="./images/burlesque/gallery/${gallery[i].photo}" alt="${gallery[i].photo}"></a>`
        )
    }
}

console.log(appendGallery())


// <div class="carousel">
//   <a class="carousel-item" href="#one!"><img src="http://lorempixel.com/250/250/nature/1"></a>
//   <a class="carousel-item" href="#two!"><img src="http://lorempixel.com/250/250/nature/2"></a>
//   <a class="carousel-item" href="#three!"><img src="http://lorempixel.com/250/250/nature/3"></a>
//   <a class="carousel-item" href="#four!"><img src="http://lorempixel.com/250/250/nature/4"></a>
//   <a class="carousel-item" href="#five!"><img src="http://lorempixel.com/250/250/nature/5"></a>
// </div>
