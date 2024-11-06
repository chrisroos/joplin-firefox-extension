document.getElementById('save').addEventListener('click', () => {
  const token = document.getElementById('token').value;
  browser.storage.local.set({ joplinToken: token }, () => {
    alert('Token saved!');
  });
});

document.addEventListener('DOMContentLoaded', () => {
  browser.storage.local.get('joplinToken', (data) => {
    if (data.joplinToken) {
      document.getElementById('token').value = data.joplinToken;
    }
  });
});