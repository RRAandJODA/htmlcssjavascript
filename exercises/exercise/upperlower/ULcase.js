function upperlow(input){
    
    var text = "";
    
    for (var i = 0; i < input.length; i++){
      if (input[i] == input[i].toUpperCase()) {
         text += input[i].toLowerCase();

      }else{
          text += input[i].toUpperCase();

      }

    }

   return(text);



}

