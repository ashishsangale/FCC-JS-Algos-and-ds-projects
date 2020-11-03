function palindrome(str) {
  var regex = /[\W_]/g;
  var newStr = str.toLowerCase().replace(regex, '');
  var len = newStr.length - 1;
  for(var i=0;i<len/2;i++){
    if(newStr[i] !== newStr[len - i]){
      return false;
    }
  }
  return true;
}


//palindrome("A man, a plan, a canal. Panama");