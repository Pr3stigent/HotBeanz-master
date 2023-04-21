document.querySelectorAll("#faqq").forEach((value, key) => {
    let toggled = false
    const valuea = document.querySelectorAll("#faqa")[key]

    value.addEventListener("click", () => {
        if (toggled) {
            valuea.classList.remove("faqa")
        } else {
            valuea.classList.add("faqa")
        }
        toggled = !toggled
        console.log(toggled)
    })
})
