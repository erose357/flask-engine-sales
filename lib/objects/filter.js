const $ = require('jquery')
import { merchantRequests } from '../ajax-requests/merchant-requests'

class Filter {

  appendFilterResults() {
    let inputData = parseInt($('input').val())
    filter.clearFind()
    if (filter.checkInput(inputData) === true) {
      let cleanInput = filter.cleanInput(inputData)
      filter.removeTableData([2,3])
      merchantRequests.getMerchantInvoices(cleanInput)
      merchantRequests.getMerchantItems(cleanInput)
    } else {
      alert('Please enter a number')
    }
  }

  removeTableData(tables) {
    const tableNames = {1: 'all', 2: 'rel1', 3: 'rel2'}
    tables.forEach((table) => {
      $(`.${tableNames[table]}-data`).remove()
    })
  }

  checkInput(inputData) {
    if (Number.isInteger(inputData) === true) {
      return true
    } else {
      return false
    }
  }

  cleanInput(inputData) {
    return Math.abs(inputData)
  }

  clearFind() {
    $('input').val('')
  }

}

export let filter = new Filter()
