document.getElementById('toggleSidebar').addEventListener('click', () => {
  document.getElementById('sidebar').classList.toggle('open');
});

// example shorts thumbnails (replace IDs with your shorts!)
const shorts = [
  "0QYAzFG2_-Q",
  "zcMYjCVba2w",
  "E1KvqJFVP0E"
  // ...add all 39 shorts here
];

const toggleBtn = document.getElementById('toggleSidebar');
const sidebar = document.getElementById('sidebar');

toggleBtn.addEventListener('click', () => {
  sidebar.classList.toggle('open');
});

const container = document.getElementById('shorts-list');
shorts.forEach(id => {
  const link = document.createElement('a');
  link.href = `https://youtu.be/${id}`;
  link.target = "_blank";

  const img = document.createElement('img');
  img.src = `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
  img.style.width = "100%";
  img.style.borderRadius = "10px";
  img.style.marginBottom = "10px";

  link.appendChild(img);
  container.appendChild(link);
});
