const $ = require('jquery')
import { merchantRequests } from '../ajax-requests/merchant-requests'
import { customerRequests } from '../ajax-requests/customer-requests'

class Filter {

  determineTableToLoad(event) {
    let dataType = event.currentTarget.innerHTML
    $('p.data-type').text(dataType)
    if (dataType === 'Customers') {
      filter.removeTableData([1,2,3])
      customerRequests.loadAllCustomerTables()
    } else if (dataType === 'Merchants') {
      filter.removeTableData([1,2,3])
      merchantRequests.loadAllMerchantTables()
    }
  }

  appendFilterResults() {
    let dataType = $('.data-type').text()
    let inputData = parseInt($('input').val())
    filter.clearFind()
    if (filter.checkInput(inputData) === true) {
      let cleanInput = filter.cleanInput(inputData)
      filter.removeTableData([2,3])
      filter.determineAjaxCall(dataType, cleanInput)
    } else {
      alert('Please enter a number')
    }
  }

  determineAjaxCall(dataType, cleanInput) {
    if (dataType === 'Merchants') {
      merchantRequests.getMerchantInvoices(cleanInput)
      merchantRequests.getMerchantItems(cleanInput)
    } else if (dataType === 'Customers') {
      customerRequests.getCustomerInvoices(cleanInput)
      customerRequests.getCustomerTransactions(cleanInput)
    }
  }

  determineRandomEndpoint() {
    let dataType = $('p.data-type').text()
    if (dataType === 'Customers') {
      customerRequests.getCustomerRandom()
    } else if (dataType === 'Merchants') {
      merchantRequests.getMerchantRandom()
    }
  }

  removeTableData(tables) {
    const tableNames = {1: 'all', 2: 'rel1', 3: 'rel2'}
    tables.forEach((table) => {
      $(`.${tableNames[table]}-data`).remove()
      $(`caption.${tableNames[table]}-title`).text('')
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
