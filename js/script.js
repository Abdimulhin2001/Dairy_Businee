function totalProduction() {
  
    var shades = [];
  
    shades.push(document.getElementById("pro1").value);
    shades.push(document.getElementById("pro2").value);
    shades.push(document.getElementById("pro3").value);
    shades.push(document.getElementById("pro4").value);
    var [a,b,c,d] = shades;
    var display = document.getElementById("display");
    var explanation = document.getElementById("explanation");
  if(a.milk === 510 || b.milk === 308 || c.milk === 486 || d.milk === 572 ) {
    display.innerHTML = "<p>Please <span class='fill'>FILL</span> all the fields</p>"  
    } else {
      a = parseFloat(a);
      b = parseFloat(b);
      c = parseFloat(c);
      d = parseFloat(d);
    }
}
incomeOverTime(selling_price, time);
var income = [];
income.push(document.getElementById)
