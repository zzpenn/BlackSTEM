
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
            page = 'Eve.html';
        } else if (body === 'lois') {
            page = 'Lois.html';
        } else {
            page= 'dynamic_compose.html';
        }
    }
    sessionStorage.setItem("mind", mind);
    sessionStorage.setItem("body", body);
    sessionStorage.setItem('soul', soul);
    location.assign(comp_url+page);
}

const
    screen = {
        small : null,
        medium: window.matchMedia('(min-width: 400px)'),
        large : window.matchMedia('(min-width: 800px)'),
        xlarge : window.matchMedia('(min-width: 1300px)')
    },

    confirm  = document.getElementById('confirm');

// add media query events
for (let [scr, mq] of Object.entries(screen)) {
    if (mq) mq.addEventListener('change', mqHandler);
}

// first event
mqHandler();

// media query handler function
function mqHandler() {

    let size = null;
    for (let [scr, mq] of Object.entries(screen)) {
        if (!mq || mq.matches) size = scr;
    }
    if (size != 'xlarge') {
        alert("We like big screens and we cannot lie.\n This site is best viewed on a wide screen of 1300 pixels or greater.");
    }
    
}

