const $ = require('jquery')
import { merchantRequests } from '../ajax-requests/merchant-requests'

$(document).ready(() => {
  merchantRequests.getAllMerchants()
  merchantRequests.getMerchantInvoices(5)
  merchantRequests.getMerchantItems(10)
  $('button.find').on('click', () => {
    removeTableData(2)
    removeTableData(3)
    let find_id = parseInt($('input').val())
    if (Number.isInteger(find_id) === true) {
      let absolute = Math.abs(find_id)
      merchantRequests.getMerchantInvoices(absolute)
      merchantRequests.getMerchantItems(absolute)
    } else {
      alert('Please enter a number')
    }
    $('input').val('')
  })
})

const removeTableData = (table) => {
  const tableNames = {1: 'all', 2: 'rel1', 3: 'rel2'}
  $(`.${tableNames[table]}-data`).remove()
}
