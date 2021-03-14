function totalProduction() {
    //create an array to store the sides
    var shades = [];
    //push all the sides into the array
    shades.push(document.getElementById("shadeA").value);
    shades.push(document.getElementById("shadeB").value);
    shades.push(document.getElementById("shadeC").value);
    shades.push(document.getElementById("shadeD").value);
    //assign the values of the array to variables a,b,c
    var [a,b,c,d] = shades;
    var display = document.getElementById("display");
    var explanation = document.getElementById("explanation");
    if(a.shade === 0 || b.shade === 0 || c.shade === 0 || d.shade === 0 ) {
      //check whether the user has typed something
      display.innerHTML = "<p>Please <span class='fill'>FILL</span> all the fields</p>" }
      console.log(display);