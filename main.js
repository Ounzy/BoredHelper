const savebtn = document.querySelector('#save');
let data;
let arr = new Array();
let counter = 0;
const savedArray = JSON.parse(localStorage.getItem("arr"));

console.log(savedArray)

savebtn.style.visibility = "hidden";

async function getData() {
    const url = "https://www.boredapi.com/api/activity";
    const response = await fetch(url);
    data = await response.json();
    console.log(data);
    document.querySelector("#valuefield").innerHTML = data.activity;
    savebtn.style.visibility = "visible";
}

function save() {
    if (savedArray == undefined) {
        let a = data.key.toString();
        localStorage.setItem(data.key, JSON.stringify(data));
        console.log(data.key);
        arr.push(a);
        console.log(arr);
        localStorage.setItem('arr', JSON.stringify(arr));
    } else {
        console.log("yes");
        let a = data.key.toString();
        localStorage.setItem(data.key, JSON.stringify(data));
        console.log(data.key);
        savedArray.push(a);
        console.log(savedArray);
        localStorage.setItem('arr', JSON.stringify(savedArray));
    }
    alert("Saved activity");
}

function savedActivities() {
    window.location = "/Saved-activities/index.html";
}
;

// löschen der einzelnen arrayelemente ändern