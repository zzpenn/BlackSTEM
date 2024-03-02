
let comp_url = "../bokeh/"
$(document).ready(function() {
    $("#compose").click(compose);
})

let compose = function() {
    let page = 'dynamic_compose.html';
    let body = $("#body").val();
    let soul = $("#soul").val();
    let mind = $("#mind").val();
    if ((body == "") || (soul == "") || (mind == "")) {
        alert("Please select the mind, body and soul options");
        return;
    }
    if ((body === soul) && (body === mind)) {
        if (body === 'eve') {
            page = 'Eve.html'
        } else {
            page= 'dynamic_compose.html';
        }
    }
    sessionStorage.setItem("mind", mind);
    sessionStorage.setItem("body", body);
    sessionStorage.setItem('soul', soul);
    location.replace(comp_url+page);
}
