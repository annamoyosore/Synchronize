document.getElementById("Form").addEventListener("submit", async function(e){
e.preventDefault();

const data = {
username: document.getElementById("uaername").value,
complaint: document.getElementById("complaint").value,

};

try {
const res = await fetch("/api/send", {
method: "POST",
headers: {
"Content-Type": "application/json"
},
body: JSON.stringify(data)
});

const result = await res.json();

console.log("Response:", result);

if(result.success){
document.getElementById("Form").reset();
window.location.href = "success.html";
} else {
alert("❌ Failed to submit");
}

} catch (err){
console.log("Network error:", err);
alert("⚠️ Network error");
}
});