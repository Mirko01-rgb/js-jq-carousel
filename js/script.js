function prevClick() {
  // console.log('prev');
  var activeImg = $('.active');
  if (activeImg.hasClass('first')) {
    var nextImg = $('img.last');
    activeImg.removeClass('active');
    nextImg.addClass('active');
  }
  else {
    var prevImg = activeImg.prev('img');
    activeImg.removeClass('active');
    prevImg.addClass('active');
  }

}


function nextClick(){
  var activeImg = $('.active');   //seleziona qualsiasi elemento che ha  la classe active
  // console.log(activeImg);
  if (activeImg.hasClass('last')) {
    var nextImg = $('img.first');
    activeImg.removeClass('active');
    nextImg.addClass('active');
  }
  else {
    var nextImg = activeImg.next('img') // quello che viene subito dopo
    // console.log(nextImg);
    activeImg.removeClass('active');
    nextImg.addClass('active');
  }


}






function init(){
  $('.prev').click(prevClick);
  $('.next').click(nextClick)
}
$(document).ready(init);
