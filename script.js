// Example data
const activities = [
  { date: "2026-09-25", activity: "Created Portfolio Page", status: "Completed" },
  { date: "2026-09-24", activity: "Fixed Image Path Issue", status: "Completed" },
  { date: "2026-09-23", activity: "Added Contact Section", status: "Pending" }
];

// Inject rows dynamically
const tableBody = document.getElementById("activityTable");

activities.forEach(item => {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td class="p-2 border">${item.date}</td>
    <td class="p-2 border">${item.activity}</td>
    <td class="p-2 border">${item.status}</td>
  `;
  tableBody.appendChild(row);
});
