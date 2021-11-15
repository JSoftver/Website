// All rights reserved JSoftver™ 2019
var rockyou;

function loahw() {
    window.location.href="development.html";
    localStorage.setItem("loggedin","false");
}

var isHidden = false;

/* document.getElementById("moreButton").onclick =  */function setHide() {
    isHidden = ! isHidden;
    if (isHidden) {
        document.getElementById("moreText").classList.remove("hidden");
        document.getElementById("moreWText").classList.remove("hidden");
        document.getElementById("dots").classList.add("fordots");
        document.getElementById("moreButton").innerHTML = "[Hide]";
    } else {
        document.getElementById("moreText").classList.add("hidden");
        document.getElementById("moreWText").classList.add("hidden");
        document.getElementById("moreButton").innerHTML = "[More]";
        document.getElementById("dots").classList.remove("fordots");
    }
    
}

window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    if (scroll > 0) {
        document.getElementById("btt").classList.remove("hidden");
        document.getElementById("btt").style.animationName = "popupBtt";
        document.getElementById("btt").style.color = "yellow";
        document.getElementById("btt").style.backgroundColor = "gray";
    } else {
        document.getElementById("btt").style.animationName = "popdownBtt";
        document.getElementById("btt").style.color = "transparent";
        document.getElementById("btt").style.backgroundColor = "transparent";
        setTimeout(function() {
            document.getElementById("btt").classList.add("hidden");
        }, 200);
    }
});

/* localStorage {
    localStorage.setItem("sot", "m")
    undefined
    localStorage.getItem("sot")
    "m"
    var a = [{title: "test"}];
    undefined
    a
    [{…}]0: {title: "test"}length: 1__proto__: Array(0)
    localStorage.set
    undefined
    localStorage.setItem("sot", JSON.stringify(a))
    undefined
    localStorage.setItem("sot", "m")
    undefined
    localStorage.getItem("sot")
    "m"
    var a = [{title: "test"}];
    undefined
    a
    [{…}]0: {title: "test"}length: 1__proto__: Array(0)
    localStorage.set
    undefined
    localStorage.setItem("sot", JSON.stringify(a))
    undefined
    */
    rockyou = [];
    /*
    localStorage.get
    undefined
    localStorage.getItem("sot")
    "[{\"title\":\"test\"}]"
    JSON.parse(localStorage.getItem("sot"))
    [{…}]0: {title: "test"}title: "test"__proto__: Objectconstructor: ƒ Object()hasOwnProperty: ƒ hasOwnProperty()isPrototypeOf: ƒ isPrototypeOf()propertyIsEnumerable: ƒ propertyIsEnumerable()toLocaleString: ƒ toLocaleString()toString: ƒ toString()valueOf: ƒ valueOf()__defineGetter__: ƒ __defineGetter__()__defineSetter__: ƒ __defineSetter__()__lookupGetter__: ƒ __lookupGetter__()__lookupSetter__: ƒ __lookupSetter__()get __proto__: ƒ __proto__()set __proto__: ƒ __proto__()length: 1__proto__: Array(0)
    localStorage.get
    undefined
    */
    rockyou = localStorage.getItem("rockyou");
    /*
    localStorage.getItem("sot")
    "[{\"title\":\"test\"}]"
    JSON.parse(localStorage.getItem("sot"))
    [{…}]0: {title: "test"}title: "test"__proto__: Objectconstructor: ƒ Object()hasOwnProperty: ƒ hasOwnProperty()isPrototypeOf: ƒ isPrototypeOf()propertyIsEnumerable: ƒ propertyIsEnumerable()toLocaleString: ƒ toLocaleString()toString: ƒ toString()valueOf: ƒ valueOf()__defineGetter__: ƒ __defineGetter__()__defineSetter__: ƒ 
    __defineSetter__()__lookupGetter__: ƒ __lookupGetter__()__lookupSetter__: ƒ __lookupSetter__()get __proto__: ƒ __proto__()set __proto__: ƒ __proto__()length: 1__proto__: Array(0)
} */