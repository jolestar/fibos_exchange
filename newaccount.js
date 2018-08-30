function makeid() {
  var text = "";
  var possible = "abcdefghijklmnopqrstuvwxyz12345";

  for (var i = 0; i < 12; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

console.log(makeid());
