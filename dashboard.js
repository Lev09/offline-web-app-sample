window.onload = function () {
    document.querySelector('#uninstallBtn').onclick = function () {
        var confirmed = alert("You will be redirected to another page to confirm action");
        window.location.assign("appManager.html?uninstall=true");
    }
}
