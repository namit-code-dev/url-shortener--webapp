
let search=document.getElementById("search-field")
let btn=document.getElementById("svg")
let output=document.getElementById("output-final")
let output_show=document.getElementById("output_show")
let errorarise=document.getElementById("error")
btn.addEventListener("click",solve)

function solve(){
    const search_value=search.value
     if (!search_value) {
    console.log("Search field is empty");
    return;
  }
 
 fetch("https://url-shortnerapp-final.onrender.com/api/", {
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
    output_show.innerText= "https://url-shortnerapp-final.onrender.com/api/"+data.shortid
    console.log("Server response:", data);
  })
  .catch(error => {
    errorarise.innerText="Server not started. Please wait one minute. The server is hosted on Render, so it may take up to a minute to restart if it was inactive."
    console.error("Error sending data:", error);
    alert("Server shut down. Please read the message below.")
    Showerror()
  });
}

//disable errormessage 
function Showerror(){
if (errorarise){
   errorarise.style.display = "flex";
setTimeout(() => {
  errorarise.style.display="none"
},6000);
}
}
