function totalProduction() {
    //create an array to store the sides
    var shades = [];
    //push all the sides into the array
    shades.push(document.getElementById("shadeA").value);
    shades.push(document.getElementById("shadeB").value);
    shades.push(document.getElementById("shadeC").value);
    shades.push(document.getElementById("shadeD").value);
    var [a,b,c,d] = shades;
    var display = document.getElementById("display");
    var explanation = document.getElementById("explanation");
    if ( a === 0, b === 0, c === 0, c === 0 ) {
      display.innerHTML = "<p>Please <span class='fill'>FILL</span> all the fields</p>" 
      } else {
        //convert the strings to numbers
        a = parseInt(a);
        b = parseInt(b);
        c = parseInt(c);
        d = parseInt(d)
        //track the triangle
        track(a,b,c,d);
      }
      }
    
    }

parseInt
