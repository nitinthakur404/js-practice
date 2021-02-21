let arr = ['New folder/1.jpg', 'New folder/2.jpg', 'New folder/3.jpg', 'New folder/4.jpg', 'New folder/5.jpg']
let test1 = 1

document.getElementById("hiid").src = arr[0];

// document.getElementById('btn').addEventListener("click", );


setInterval(() => {
    console.log(test1);
    if (test1 < arr.length) {
        document.getElementById("hiid").style.opacity = 0.2;
        setTimeout(() => {
            document.getElementById("hiid").style.opacity = 1;
        }, 1000);
        document.getElementById("hiid").src = arr[test1];
        test1++;
    } else {
        document.getElementById("hiid").style.opacity = 0;
        document.getElementById("hiid").src = arr[0];
        test1 = 1;
    }
}, 2000);