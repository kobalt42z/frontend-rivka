document.querySelector("#d1").addEventListener("click", e => {

    console.log('bublle1');
}, true)
document.querySelector("#d2").addEventListener("click", e => {
    console.log("bublle2")
    // e.stopPropagation()
}, false)
document.querySelector("#d3").addEventListener("click", e => {
    console.log("bublle3")
    e.stopPropagation()
}, true)