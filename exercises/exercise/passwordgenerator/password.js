function pass(mini,maxi){
    var allowed = "0123456789abcdefghijklmnopqrstuvwxyzABCEDFGHIJKLMNOPQRSTUVWXYZ"
    var pwlength = 0;
    var pw;
    var password= "";

    pwlength = Math.floor(Math.random() * (maxi - mini)) + mini;

    for(var i= 0; i < pwlength; i++){
        pw = Math.floor(Math.random() * allowed.length-1);
        password += allowed[pw];
    }

    return(password);
}
