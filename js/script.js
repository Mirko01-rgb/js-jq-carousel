function prevClick() {
  // console.log('prev');
  var firstimg = $('img.active')
  // console.log(firstimg);
  $('img').addClass('active');
}


function nextClick(){
  // console.log('next');
}






function init(){
  $('.prev').click(prevClick);
  $('.next').click(nextClick)
}
$(document).ready(init);
