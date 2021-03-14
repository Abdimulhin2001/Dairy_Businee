function totalProduction() {
  
    var shades = [];
  
    shades.push(document.getElementById("pro1").value);
    shades.push(document.getElementById("pro2").value);
    shades.push(document.getElementById("pro3").value);
    shades.push(document.getElementById("pro4").value);
    var [a,b,c,d] = shades;
    var display = document.getElementById("display");
    var explanation = document.getElementById("explanation");
    if(a.value + b.value + c.value + d.value === 510 + 308 + 486 + 572) {
      display.innerHTML = "<p>The total PRODUCTION <span class='fill'> 1876 litres</span> per day</p>" 
    } else {
      a = parseFloat(a);
      b = parseFloat(b);
      c = parseFloat(c);
      d = parseFloat(d);
    }
}