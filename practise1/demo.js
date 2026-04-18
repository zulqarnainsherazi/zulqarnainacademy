let heloworld=document.querySelector('button')
heloworld.addEventListener('click',inputmsg)
function inputmsg(){
    /*alert("Laraib sherazi is here!");*/
    let name=prompt("Enter name:");
    heloworld.textContent="Roll no:1 " +name;
}