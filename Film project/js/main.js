let inp1 = document.getElementById("inp1");
let inp2 = document.getElementById("inp2");
let btn = document.getElementById('btn');
btn.onclick = function () {
    if (inp1.value == 'momen' && inp2.value == '1234') {
        window.open('index2.html');

    } else {
        alert("Login Failed")
    }
}
