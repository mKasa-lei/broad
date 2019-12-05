var input = document.getElementsByTagName("input")[0];
var hello = document.getElementById("hello");
var bro = new BroadcastChannel("channel1");
var sendbutton = document.getElementById("sendbutton");
bro.onmessage = function (ev) {
    hello.innerHTML = ev.data;
    console.log(ev);
    console.log(ev.data);
}

sendbutton.onclick = function (e) {
    var v = input.value;
    bro.postMessage(v);

}
