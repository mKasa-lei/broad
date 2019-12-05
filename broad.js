let count = 0
const total = document.getElementById("jsi-total")
total.innerHTML = count
const btn = document.getElementById("jsi-btn")
const open = document.getElementById("jsi-open")
const channel = new BroadcastChannel("channel")
channel.onmessage = (e) => {
    total.innerHTML = e.data
    count = e.data
}

btn.addEventListener("click", () => {
    count++
    channel.postMessage(count)
    total.innerHTML = count
})

open.addEventListener("click", async() => {
    await window.open("broad2.html", "_blank")
    await channel.postMessage(total.value)
})