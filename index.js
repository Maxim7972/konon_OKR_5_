const input = document.getElementById("textInput");

input.addEventListener("input", function () {
    this.value = this.value.replace(/ /g, "_");
});
