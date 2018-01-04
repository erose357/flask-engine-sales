const $ = require('jquery')
import { merchantRequests } from '../ajax-requests/merchant-requests'

$(document).ready(() => {
  merchantRequests.getAllMerchants()
})
