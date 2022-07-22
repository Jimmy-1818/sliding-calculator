//$(document).ready( function () {
//
//
//    // VARIABLES
//    // ----------------------------------------------------------
//
//    var amount, percent, result;
//    var calculator = $('.calculator');
//    var calculatorBill = calculator.find('.calculator__bill');
//    var calculatorTip = calculator.find('.calculator__tip');
//    var calculatorResult = calculator.find('.calculator__result');
//    var tipAmount = calculator.find('.tip-amount');
//
//
//    // INIT BILL
//    // ----------------------------------------------------------
//
//    $(window).on('DOMContentLoaded', function () {
//        tipAmount.text( calculatorTip.val() + '%' );
//        amount = calculatorBill.val() * 1;
//        percent = calculatorTip.val() * 1;
//        result = amount + amount * ( percent / 100 );
//        calculatorResult.text( result.toFixed(2) + '$' );
//    });
//
//
//    // RANGE FUNCTION
//    // ----------------------------------------------------------
//
//    calculatorTip.on('change', function () {
//
//        if ( calculatorBill.val() === '' || isNaN( calculatorBill.val() ) ) {
//            alert('Enter bill amount, please!')
//        } else {
//            amount = calculatorBill.val() * 1;
//        }
//
//        tipAmount.text( calculatorTip.val() + '%' );
//        percent = calculatorTip.val() * 1;
//        result = amount + amount * ( percent / 100 );
//        calculatorResult.text( result.toFixed(2) + '$' );
//    });
//
//});/


document.getElementById("tip1").addEventListener("change", autentica_calc);
document.getElementById("tip2").addEventListener("change", autentica_calc);
document.getElementById("tip3").addEventListener("change", autentica_calc);
document.getElementById("tip4").addEventListener("change", autentica_calc);
document.getElementById("tip5").addEventListener("change", autentica_calc);



var calculator__rows = document.getElementsByClassName("calculator__row")
function pointer_slider_update(){
    document.getElementById("slider-value-1").innerHTML = "x "+document.getElementsByClassName("calculator__tip")[0].value
    document.getElementById("slider-value-2").innerHTML = "x "+document.getElementsByClassName("calculator__tip")[1].value
    document.getElementById("slider-value-3").innerHTML = "x "+document.getElementsByClassName("calculator__tip")[2].value
    document.getElementById("slider-value-4").innerHTML = "x "+document.getElementsByClassName("calculator__tip")[3].value
    document.getElementById("slider-value-5").innerHTML = "x "+document.getElementsByClassName("calculator__tip")[4].value
}


function autentica_calc(){
    pointer_slider_update()

    var s1 = document.getElementById("tip1").value
    var s2 = document.getElementById("tip2").value
    var s3 = document.getElementById("tip3").value
    var s4 = document.getElementById("tip4").value
    var s5 = document.getElementById("tip5").value


    var result = 0

    var result2 = 0
    var monthly = 30


    result = ((s1*10) + (s1*s2*0.5) + (s1*s2*s3*1) + (s1*s2*s3*s4*1.5) + (s1*s2*s3*s4*s5*2))
    result2 = (s1*(monthly/50)) + (s1*s2*(monthly/100)) + (s1*s2*s3*(monthly/100)) + (s1*s2*s3*s4*(monthly/100)) + (s1*s2*s3*s4*s5*(monthly/50))

    var result2_eur = new Intl.NumberFormat("de-DE", { style: "currency", "currency":"EUR" }).format(result2);
    var result_eur = new Intl.NumberFormat("de-DE", { style: "currency", "currency":"EUR" }).format(result);



    document.getElementById("rendita_result").innerHTML = result2_eur
    document.getElementById("autentica_result").innerHTML = result_eur

}

pointer_slider_update()