const $ = require('jquery')
import { merchantRequests } from '../ajax-requests/merchant-requests'
import { filter } from '../objects/filter'

$(document).ready(() => {
  merchantRequests.getAllMerchants()
  merchantRequests.getMerchantInvoices(5)
  merchantRequests.getMerchantItems(10)
  $('button.find').on('click', filter.appendFilterResults)
})
