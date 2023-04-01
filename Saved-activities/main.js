let list = document.querySelector('#list');

const array = JSON.parse(localStorage.getItem("arr"));
console.log(array);
console.log(array.length);


function getList() {
    for (let t = 0; t < array.length; t++) {
        document.querySelector('#nothing').innerHTML = "";  
        let specificActivityId = array[t];
        console.log(array[t]);
        let specificActivity = JSON.parse(localStorage.getItem(specificActivityId));
        list.innerHTML += `
        <div class="actlist">
            <p id="place">${specificActivity.activity}</p>
            <button class="delete">
            Delete
            </button>
        </div>
        ` 
        ;

        let current_item = document.querySelectorAll('.delete');
        let f = 0;
        for (let i = 0; i < current_item.length; i++) {
            current_item[i].onclick = function () {
                let a = i - f;
                this.parentNode.remove();
                let x = array[a];
                localStorage.removeItem(x);
                array.splice(a, 1);
                console.log(array);
                localStorage.setItem("arr", JSON.stringify(array));
                console.log(array.length);
                f++;
            }
        }
    }
}



getList();

