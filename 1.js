const url = 'https://license.jerihosterr.my.id/license/api.php?domain=' + window.location.hostname;

fetch(url)
  .then(response => response.text())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
