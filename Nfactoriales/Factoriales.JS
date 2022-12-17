document.addEventListener('DOMContentLoaded', () => {

    Swal.fire({
        title: 'Números factoriales desde "a" hasta "b"',
        text: 'Ingresa el número desde donde quieres que inicie el cálculo de factoriales(a)',
        icon: 'question',
        backdrop: true,
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: true,
        stopKeydownPropagation: true,
        html:
      '<input id="numero1" placeholder = "Ingrese el número (a)" >' + '<br>' + '<br>' +
      '<input id="numero2" placeholder = "Ingrese el número (b)" >',
      
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          
          (hacer())
          
        } 
     })
    })
    
       function recargar(){
    location.reload()
}

function hacer(){
    var num1 = document.getElementById("numero1").value;
    var num2 = document.getElementById("numero2").value;
    if(num1 == num2){ 
            alert("Error. Los numeros son iguales.");
            }
    if(num1 > num2){ 
            var mayor = num1;
            var menor = num2;
            document.write("<h1> Números factoriales desde " + menor + " hasta " + mayor + "</h1>" );
          } 
          else{ 
            var mayor = num2;
            var menor = num1;
            document.write("<h1> Números factoriales desde " + menor + " hasta " + mayor + "</h1>" );
            } 
   
            
    for(menor; menor <= mayor; menor++){
            factorial(menor)
            } 
            document.write("<br>" + "<button id='BtnRecarga' onclick='recargar()'> Recargar</button>")
    }
    function factorial (data) {
        var total = 1; 
        for (i=1; i<=data; i++) {
            total = total * i; 
            
        }

        console.log("El factorial para " + data + " es: " + total);

       
        document.write("El factorial para " + data + " es: " + total + "<br>");
        
    }   

    