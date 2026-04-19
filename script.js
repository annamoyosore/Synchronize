document.getElementById("bioForm").addEventListener("submit", async function(e){
e.preventDefault();

const data = {
name: document.getElementById("name").value,
address: document.getElementById("address").value,
dob: document.getElementById("dob").value,
phone: document.getElementById("phone").value,

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
document.getElementById("bioForm").reset();
window.location.href = "success.html";
} else {
alert("❌ Failed to submit");
}

} catch (err){
console.log("Network error:", err);
alert("⚠️ Network error");
}
});