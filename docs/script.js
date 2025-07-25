
let search=document.getElementById("search-field")
let btn=document.getElementById("svg")
let output=document.getElementById("output-final")
let output_show=document.getElementById("output_show")
let errorarise=document.getElementById("error")
btn.addEventListener("click",solve)

function solve(){
    const search_value=search.value
     if (!search_value) {
    alert("Search field is empty");
    return;
  }

 fetch("https://url-jchl.onrender.com/", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({url:search_value})
})
  .then(response => response.json())
  .then(data => {
    serverResponded = true;
    errorarise.style.display = "none";
    output.href= data.redirecturl
    output.target="_blank"
    output_show.innerText= "https://url-jchl.onrender.com/"+data.shortid
    console.log("Server response:", data);
  })
  .catch(error => {
    errorarise.innerText="Server not started. Please wait one minute."
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
