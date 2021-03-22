function prevClick() {
  // console.log('prev');
  var firstImg = $('.active');
  if (firstImg.hasClass('first')) {

  }
  else {
    var prevImg = firstImg.prev('img');
    firstImg.removeClass('active');
    prevImg.addClass('active');
  }

}


function nextClick(){
  var firstImg = $('.active');   //seleziona qualsiasi elemento che ha  la classe active
  // console.log(firstImg);
  if (firstImg.hasClass('last')) {

  }
  else {
    var nextImg = firstImg.next('img') // quello che viene subito dopo
    // console.log(nextImg);
    firstImg.removeClass('active');
    nextImg.addClass('active');
  }


}






function init(){
  $('.prev').click(prevClick);
  $('.next').click(nextClick)
}
$(document).ready(init);
