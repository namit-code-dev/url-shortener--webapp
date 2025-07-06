
let search=document.getElementById("search-field")
let btn=document.getElementById("svg")

btn.addEventListener("click",solve)

function solve(){
    const search_value=search.value
     console.log("Button clicked"); 
     if (!search_value) {
    console.log("Search field is empty");
    return;
  }
 

fetch("http://localhost:8000/api/", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({url:search_value})
})
  .then(response => response.json())
  .then(data => {
    console.log("Server response:", data);
  })
  .catch(error => {
    console.error("Error sending data:", error);
  });
}