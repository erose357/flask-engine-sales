const $ = require('jquery')
import { merchantRequests } from '../ajax-requests/merchant-requests'
import { customerRequests } from '../ajax-requests/customer-requests'
import { filter } from '../objects/filter'

$(document).ready(() => {
  merchantRequests.getAllMerchants()
  merchantRequests.getMerchantInvoices(1)
  merchantRequests.getMerchantItems(1)
  $('button.find').on('click', filter.appendFilterResults)
  $(document).on('click', 'div.dropdown-content p', (event) => {
    filter.determineTableToLoad(event)
  })
  $('button.random').on('click', () => {
    let dataType = $('p.data-type').text()
    determineRandomEndpoint(dataType)
  })
})

const determineRandomEndpoint = dataType => {
  if (dataType === 'Customers') {
    getCustomerRandom()
  } else if (dataType === 'Merchants') {
    getMerchantRandom()
  }
}

const getCustomerRandom = () => {
  return $.get('https://flask-engine-api.herokuapp.com/api/v1/customers/random')
  .then((data) => {
    customerRequests.loadRandomFindData(data.id)
  })
  .catch((error) => {
    console.error(error)
  })
}

const getMerchantRandom = () => {
  return $.get('https://flask-engine-api.herokuapp.com/api/v1/merchants/random')
  .then((data) => {
    merchantRequests.loadRandomFindData(data.id)
  })
  .catch((error) => {
    console.error(error)
  })
}
