let form = document.getElementById('addForm');

form.addEventListener('submit', tallerThan);

function tallerThan(e){
    e.preventDefault(); 
  
let feet = document.getElementById('feet').value;
let inches = document.getElementById('inches').value;
let foot = parseInt(feet) * 12; 
let height = foot + parseInt(inches); 
  
    if (height > 68) {
      document.getElementById("taller").style.display="block";
      document.getElementById("shorter").style.display="none";
      document.getElementById("same").style.display="none";
    } else if (height < 68) {
      document.getElementById("shorter").style.display="block";
      document.getElementById("taller").style.display="none";
      document.getElementById("same").style.display="none";
    } else {
      document.getElementById("same").style.display="block";
      document.getElementById("taller").style.display="none";
      document.getElementById("shorter").style.display="none";
      }
  }

