function myFunction() {
    document.getElementById("progressid").style.width = "100%";
}

function myFunction1() {
    document.getElementById("progressid").style.width = "50%";
}

$(document).ready(function () {
    $(".fa-search").click(function () {
        $(".textbox").toggle();
        $(".btn-search").toggle();
        $("input[type='text']").focus();
    });
});
