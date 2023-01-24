<script>
  const scriptURL = '<https://script.google.com/macros/s/AKfycbxRRc0HmNYYEfBb4iWdXrEXleSc_3qyyqSy-dYFdlOvxiEdkr3ec9t73A5qNHMtwf48/exec>'
  const form = document.['contact-box']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })
</script>