
let search=document.getElementById("search-field")
let btn=document.getElementById("svg")
let output=document.getElementById("output-final")
let output_show=document.getElementById("output_show")
btn.addEventListener("click",solve)

async function solve(){
    const search_value=search.value
     if (!search_value) {
    console.log("Search field is empty");
    return;
  }
 
 await fetch("http://localhost:8000/api/", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({url:search_value})
})
  .then(response => response.json())
  .then(data => {
    output.href= data.redirecturl
    output.target="_blank"
    output_show.innerText= data.redirecturl
    console.log("Server response:", data);
  })
  .catch(error => {
    console.error("Error sending data:", error);
  });
}




