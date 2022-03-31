async function editPending(event) {
  event.preventDefault();

  const name =
    event.target.getAttribute("data-name") + " " + "(Pending)";
  const id = event.target.getAttribute("data-id");
  console.log(name);
  console.log(id);
  const response = await fetch(`/api/items/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      name: name,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/dashboard/");
  } else {
    alert(response.statusText);
  }
}

const pendingBtns = document.querySelectorAll(".pending-btn");

pendingBtns.forEach((btn) => btn.addEventListener("click", editPending));
