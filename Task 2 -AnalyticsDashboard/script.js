// Line Chart
const lineCtx = document.getElementById("lineChart");
new Chart(lineCtx, {
  type: "line",
  data: {
    labels: ["Jun", "Jul", "Aug", "Sep", "Oct"],
    datasets: [
      {
        label: "Users",
        data: [5, 8, 12, 14, 17],
        borderColor: "#0078d7",
        backgroundColor: "rgba(0,120,215,0.1)",
        fill: true,
        tension: 0.3,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: { legend: { display: false } },
  },
});

// Bar Chart
const barCtx = document.getElementById("barChart");
new Chart(barCtx, {
  type: "bar",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Revenue",
        data: [12, 15, 18, 20, 25],
        backgroundColor: "#7e57c2",
        borderRadius: 5,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: { legend: { display: false } },
  },
});
