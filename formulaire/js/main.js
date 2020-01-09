$("#buttonSend").on("click", function(event,target){
checkEmptyInputs();
});

function checkEmptyInputs(){
  $(".notempty").each(function (i , elt){
    if(elt.value == ""){
      $(elt).toggleClass("border-danger");
      $(elt).next().toggleClass("d-none");
      retour = false;
    }
    let  bp;
  });
  return retour;
}


function checkMailFormat(email){
  

}


function checkPasswords(){

}
