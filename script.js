
function calcular(event){

    event.preventDefault();

    let alcoolInput = document.getElementById("alcool").value;
    let gasolinaInput = document.getElementById("gasolina").value;
    let contentResult = document.getElementById("content-result");
    let textResult = document.getElementById("text-result");
    let gosolinaspam = document.getElementById("gasolina-result");
    let alcoolspam = document.getElementById("alcool-result");

    let calculo = (alcoolInput / gasolinaInput);

    if(calculo < 0.7){

        textResult.innerHTML = "Compensa usar Ácool";


    }else{

        textResult.innerHTML = "Compensa usar Gasolina";

    }

    gosolinaspam.innerHTML = "Gasolina R$ " + gasolinaInput;
    alcoolspam.innerHTML = "Álcool R$ " + alcoolInput;

    contentResult.classList.remove("hide")

}