let _location = window.location
const url = new URL(_location)

const propertyType = url.searchParams.get("prop")

if (propertyType !== "Single family home") {
    document.getElementById("allowed").style.display="none"
    document.getElementById("notallowed").style.display"block"
}