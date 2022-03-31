async function deleteItem(event) {
    event.preventDefault();

    const id = event.target.getAttribute("data-id");
    
    const response = await fetch(`/api/items/${id}`, {
        method: 'DELETE'
    });
    if(response.ok) {
        document.location.replace('/')
    } else {
        alert(response.statusText)
    }
}
//add in delete btn id or class and put this js on that page
const deleteBtns = document.querySelectorAll(".delete-btn");

deleteBtns.forEach((btn) => btn.addEventListener("click", deleteItem));