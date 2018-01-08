const $ = require('jquery')
import { merchantRequests } from '../ajax-requests/merchant-requests'
import { customerRequests } from '../ajax-requests/customer-requests'
import { filter } from '../objects/filter'

$(document).ready(() => {
  merchantRequests.getAllMerchants()
  merchantRequests.getMerchantInvoices(1)
  merchantRequests.getMerchantItems(1)
  $('button.find').on('click', filter.appendFilterResults)
  $('button.random').on('click', filter.determineRandomEndpoint)
  $(document).on('click', 'div.dropdown-content p', (event) => {
    filter.determineTableToLoad(event)
  })
})
