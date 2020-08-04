window.onload = function () {
    var hypShow = this.document.getElementById("hypShowModal");
    var hypClosers = this.document.getElementsByClassName("closer");
    hypShow.onclick = function () {
        var holder = window.document.getElementById("shadowBox");
        holder.className = "";
        return false;
    };

    for (var i = 0; i < hypClosers.length; i++) {
        hypClosers[i].onclick = function () {
            var holder = window.document.getElementById("shadowBox");
            holder.className = "hidden";
            return false;
        };
    }
};