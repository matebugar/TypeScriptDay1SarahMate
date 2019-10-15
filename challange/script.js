var menuu = dishes;
console.table(dishes);
for (var i = 0; i < menuu.length; i++) {
    document.getElementById("dishDisplay").innerHTML +=
        "<div class=\"col-lg-3 col-md-6 mb-4\">\n        <div class=\"card h-100\">\n          <img class=\"card-img-top\" src=\"" + menuu[i].image + "\" alt=\"\">\n          <div class=\"card-body\">\n            <h4 class=\"card-title\">" + menuu[i].name + "</h4>\n            <p class=\"card-text\">" + menuu[i].description + "</p>\n          </div>\n          <div class=\"card-footer\">\n            <p>Rating: " + menuu[i].rating + "</p>\n          </div>\n        </div>\n      </div>";
}
;


