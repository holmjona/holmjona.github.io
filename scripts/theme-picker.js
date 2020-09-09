window.onload = function () {
    var ddlThemes = document.getElementById("ddlThemes");
    var btnSaveTheme = document.getElementById("btnSaveSettings");

    if (typeof ddlThemes !== "undefined" && ddlThemes !== null) {
        ddlThemes.onchange = function () {
            setPageTheme("ssPage", this.value);
            if (Storage) {
                // we have storage
                if (this.value === "") {
                    sessionStorage.removeItem("theme");
                } else {
                    sessionStorage.setItem("theme",
                        this.value);
                }

            }
        }
    };
    //if (Storage) {
    //    // we have storage
    //    var theme = sessionStorage.theme;
    //    if (typeof theme !== "undefined") {
    //        setPageTheme("ssPage", theme);
    //    }
    //}
    if (typeof btnSaveTheme !== "undefined" && btnSaveTheme !== null) {
        btnSaveTheme.onclick = function () {
            if (Storage) {
                var selTheme = ddlThemes.value;
                var myTheme = {
                    theme: selTheme,
                };
                // PII
                // Personally
                // Identifiable
                // Information
                var myThemeAsString = JSON.stringify(myTheme);
                localStorage.theme = myThemeAsString;
            }
        };
    }

    setThemeData();

};

function setPageTheme(styleID, themeName) {
    var stySheet = document.getElementById(styleID);
    stySheet.setAttribute("href",
        "styles/" + themeName + ".css"
    );
}

function setThemeData() {
    if (Storage) {
        if (typeof localStorage["theme"]
            !== "undefined") {
            var myThemeOut = localStorage["theme"];
            var myThemeObject = JSON.parse(myThemeOut);
            setPageTheme("ssPage", myThemeObject.theme);
        }
    }
}

