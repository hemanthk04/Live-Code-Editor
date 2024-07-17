function run(){
    let HTMLcode = document.getElementById("HTMLcode").value;
    let CSScode = document.getElementById("CSScode").value;
    let JScode = document.getElementById("JScode").value;
    let Output = document.getElementById("output");


    Output.contentDocument.body.innerHTML = HTMLcode;

}