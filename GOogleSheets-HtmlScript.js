
<script>
const API_URL = "COLE_AQUI_A_URL_DO_APPS_SCRIPT";

// carregar da nuvem
fetch(API_URL)
  .then(res => res.json())
  .then(data => {
    for (const id in data) {
      const el = document.getElementById(id);
      if (el) {
        el.checked = data[id] === true || data[id] === "TRUE";
        localStorage.setItem(id, el.checked);
      }
    }
  });

// salvar
function syncToCloud() {
  const payload = {};
  document.querySelectorAll('input[type="checkbox"]').forEach(cb => {
    payload[cb.id] = cb.checked;
    localStorage.setItem(cb.id, cb.checked);
  });

  fetch(API_URL, {
    method: "POST",
    body: JSON.stringify(payload)
  });
}

document.querySelectorAll('input[type="checkbox"]').forEach(cb => {
  cb.addEventListener("change", syncToCloud);
});
</script>

