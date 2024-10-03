/* * @Adilade Input Quantity Increment * * Free to use - No warranty */ var input = document.querySelector(
    "#qty"
);
var btnminus = document.querySelector(".qtyminus");
var btnplus = document.querySelector(".qtyplus");
if (
    input !== undefined &&
    btnminus !== undefined &&
    btnplus !== undefined &&
    input !== null &&
    btnminus !== null &&
    btnplus !== null
) {
    var min = Number(input.getAttribute("min"));
    var max = Number(input.getAttribute("max"));
    var step = Number(input.getAttribute("step"));
    function qtyminus(e) {
        var current = Number(input.value);
        var newval = current - step;
        if (newval < min) {
            newval = min;
        } else if (newval > max) {
            newval = max;
        }
        input.value = Number(newval);
        e.preventDefault();
    }
    function qtyplus(e) {
        var current = Number(input.value);
        var newval = current + step;
        if (newval > max) newval = max;
        input.value = Number(newval);
        e.preventDefault();
    }
    btnminus.addEventListener("click", qtyminus);
    btnplus.addEventListener("click", qtyplus);
} // End if test