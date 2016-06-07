window.onload = function (e) {
    var url = window.location.toString();

    if (url.match("uninstall=true")) {
        initUninstall();
    }
    else {
        initInstall();
    }
};

function initInstall() {
    document.querySelector("#installBtn").onclick = install;

    function install() {
        document.querySelector("#installBtn").classList.toggle('hidden');
        document.querySelector('#installProgress').classList.toggle('hidden');
        setTimeout(function () {
            window.location.assign("/dashboard.html");
        }, 3000)
    }
}

function initUninstall() {
    document.querySelector("#installation").classList.add('hidden');
    document.querySelector("#uninstallation").classList.remove('hidden');
    document.querySelector("#uninstallBtn").onclick = uninstall;
    document.querySelector("#cancel").onclick = function (e) {
        window.history.back();
    }

    function uninstall() {
        document.querySelector("#uninstallBtn").classList.toggle('hidden');
        document.querySelector("#cancel").classList.toggle('hidden');
        document.querySelector('#uninstallProgress').classList.toggle('hidden');
        cleanCacheAndRedirect();
    }

    function cleanCacheAndRedirect() {
        window.applicationCache.status = 0;

        setTimeout(function () {
            window.location.assign("/");
        }, 3000)
    }
}
