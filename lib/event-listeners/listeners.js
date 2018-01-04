const $ = require('jquery')

$(document).ready(() => {
  $('body').on('click', () => {
    return $.get("https://flask-engine-api.herokuapp.com/api/v1/merchants")
      .done((data) => {
        console.log(data)
      })
      .catch((error) => {
        console.error(error)
      })
  })
})
