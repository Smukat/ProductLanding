/**
 * Created by jesica on 8/12/2018.
 */
var selectedButtonSection1Id = 1;
var selectedButtonSection2Id = 4;
AOS.init({
    duration: 1200
});

/*Update Navbar when scroll */
/*It also updates the color of the <a> element in the collapsible menu*/
window.onscroll = function () {updateNav()};
function updateNav() {
    var nav = document.getElementById("nav");
    var collapsibleMenuLi = document.getElementsByClassName("nav__li_a");
    var navParagraph = document.getElementById("nav-button");
    if (document.body.scrollTop >= 5 || document.documentElement.scrollTop >= 5) {
        nav.classList.add("nav-scroll");
        navParagraph.classList.remove("nav__button-color");
        navParagraph.classList.add("nav-scroll__button");

        /*Update color collapsible menu*/
        for(var i = 0; i < collapsibleMenuLi.length; i++) {
            collapsibleMenuLi[i].classList.remove("nav__li_a-white-color");
            collapsibleMenuLi[i].classList.add("nav__li_a-dark-color");
        }
    } else {
        nav.classList.remove("nav-scroll");
        navParagraph.classList.add("nav__button-color");
        navParagraph.classList.remove("nav-scroll__button");
        for(var j = 0; j < collapsibleMenuLi.length; j++) {
            collapsibleMenuLi[j].classList.add("nav__li_a-white-color");
            collapsibleMenuLi[j].classList.remove("nav__li_a-dark-color");
        }
    }
}
/*Collapsible Navbar*/
function showCollapsibleNav() {
    var collapsible = document.getElementById("collapsibleMenu");
    if(collapsible.style.display == "block") {
        collapsible.style.display = "none";
    }
    else {
        collapsible.style.display = "block";
    }
}

/*Collapsible Features-Section in Lightwear Article*/
function showCollapsibleFeatures(event, section) {
    var selectedButtonId;
    if (section == 1) {
        selectedButtonId = selectedButtonSection1Id;
    } else {
        selectedButtonId = selectedButtonSection2Id;
    }

    console.log("Var " + selectedButtonId);
    console.log("Event Id " + event.id);
    console.log(section);


    console.log("Var " + selectedButtonId);

    var element = document.getElementById(selectedButtonId);
    console.log(element);
    if (event.id  == selectedButtonId) {
        if (event.childNodes[1].classList.contains("span-border")) {
            event.childNodes[1].classList.remove("span-border");
        } else {
            event.childNodes[1].classList.add("span-border");
        }

        if (event.nextElementSibling.classList.contains("display-none")) {
            event.nextElementSibling.classList.remove("display-none");
        } else {
            event.nextElementSibling.classList.add("display-none");
        }

    } else {
        element.nextElementSibling.classList.add("display-none");
        element.childNodes[1].classList.remove("span-border");
        if (event.childNodes[1].classList.contains("span-border")) {
            event.childNodes[1].classList.remove("span-border");
        } else {
            event.childNodes[1].classList.add("span-border");
        }

        if (event.nextElementSibling.classList.contains("display-none")) {
            event.nextElementSibling.classList.remove("display-none");
        } else {
            event.nextElementSibling.classList.add("display-none");
        }

        if (section == 1) {
            selectedButtonSection1Id = event.id;
        } else {
            selectedButtonSection2Id = event.id;
        }
    }
}