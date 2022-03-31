async function newItem(event) {
  event.preventDefault();
  const name = document.querySelector(".titleInput").value.trim();
  const url = document.querySelector(".urlInput").value.trim();
  const item_text = document.querySelector(".textInput").value.trim();
  if (name && url && item_text) {
    const response = await fetch("/api/items", {
      method: "POST",
      body: JSON.stringify({
        name,
        url,
        item_text,
      }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert(response.statusText);
    }
  }
}

document.querySelector(".aBtn").addEventListener("click", newItem);
