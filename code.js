const txtoper1 = document.getElementById('op1')
const txtoper2 = document.getElementById('op2')
const txtoper3 = document.getElementById('op3')
const cmb = document.getElementById('Calcular')
const cmbrefrescar = document.getElementById('Refrescar')
const presultado = document.getElementById('resultado')
const presultado2 = document.getElementById('resultado2')

cmb.addEventListener('click', calcular)
cmbrefrescar.addEventListener('click', refrescar)

function calcular(){
    const operador = txtoper2.value
    const op1 = parseFloat(txtoper1.value)
    const op3 = parseFloat(txtoper3.value)

    if((operador == "+" || operador == "-" || operador == "*" || operador == "/") && !isNaN(op1) && !isNaN(op3)){
        let resultado;
        switch (operador){
            case "+":
               resultado = op1 + op3
               break
            case "-":
                resultado = op1 - op3
                break
            case "*":
                resultado = op1 * op3
                break
            case "/":
                resultado = op1 / op3
                break
        }

        presultado.style="color:white"
        presultado.innerText = "Total " + resultado
        presultado2.style="color:yellow"
        presultado2.innerText = "Resultado Correcto"

    }else {
        presultado.style="color:#DF6000"
        presultado.innerText = "Resultado Incorrecto"
        presultado2.style="color:yellow"
        presultado2.innerText = "Error en la Operación"
    }
}

function refrescar(){
    const op1=document.getElementById('op1').value = ""
    const op2=document.getElementById('op2').value = ""
    const op3=document.getElementById('op3').value = ""

    var nparrafo1=document.getElementById('resultado');
    var nparrafo=document.getElementById('resultado2');
    if (nparrafo1.hasChildNodes())
    {
        nparrafo1.removeChild(nparrafo1.lastChild);
       
    }
     
    if(nparrafo.hasChildNodes())
    {
        nparrafo.removeChild(nparrafo.lastChild);
       
    }
    
    
}




