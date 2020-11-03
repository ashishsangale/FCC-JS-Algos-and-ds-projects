function rot13(str) {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let cipher = str.split('').map(i => {
    const val = alphabet.indexOf(i);
    return val >= 0 ? alphabet[(val + 13) % 26] : i;
  })
  return cipher.join('')
}



//rot13("SERR PBQR PNZC");
