function checkLogin() {
    var check = getCookie("login");

    if (check == "yes") {
        document.getElementById("login").style.display = "none";
        document.getElementById("signup").style.display = "none";
    }
}

