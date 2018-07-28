import showMagazine from './showMagazine';
function refresh() {

    document.getElementById("chef").addEventListener('click', function () {
        console.log("chef");
        showMagazine.showMagazine();
    });

};

refresh();