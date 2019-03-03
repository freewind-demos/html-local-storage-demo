localStorage.clear();

localStorage.setItem("hello", "html-localStorage");

const value = localStorage.getItem("hello");

document.getElementById("main").innerText = value;
