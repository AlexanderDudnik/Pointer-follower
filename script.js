const input = document.getElementById('text');
const btn = document.getElementById('btn');

 
btn.addEventListener('click',(e) => {
  e.preventDefault();
  showText();
});
 
function showText(){
  const div = document.createElement('div');
  const inputValue = input.value.split('');
  input.value = '';
 
  div.classList.add('text');
  document.querySelector('body').appendChild(div);
  makeElement(div,inputValue)
}
 
function makeElement(div,inputValue){
    inputValue.forEach(word => {
      const content = document.createElement('span');
      content.innerHTML = word;
      div.appendChild(content);
 
      moveValue(div,content)
    })
}
 
 
function moveValue(div,content){

  content.addEventListener('click', e => {

    const span = e.target;
    span.classList.add('positionAbs');
    const wrapper = document.querySelector('.text');

    let movement = (e) =>{
      span.style.top = `${e.layerY}px`;
      span.style.left = `${e.layerX}px`;
    }
    wrapper.addEventListener('mousemove', movement,false);

    div.addEventListener('click', e => {
      if(e.target.nodeName === 'DIV'){
          wrapper.removeEventListener('mousemove', movement,false)
      } 
    });
  })
}