function prevClick() {
  console.log('prev');

}


function nextClick(){
  console.log('next');
}






function init(){
  $('.prev').click(prevClick);
  $('.next').click(nextClick)
}
$(document).ready(init);
