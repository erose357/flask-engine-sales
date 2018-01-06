const $ = require('jquery')
import { merchantRequests } from '../ajax-requests/merchant-requests'

$(document).ready(() => {
  merchantRequests.getAllMerchants()
  merchantRequests.getMerchantInvoices(5)
  merchantRequests.getMerchantItems(10)
})
