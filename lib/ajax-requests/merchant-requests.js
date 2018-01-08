const $ = require('jquery')
import { merchantResponses } from '../ajax-responses/merchant-responses'
import { filter } from '../objects/filter'
const api = 'https://flask-engine-api.herokuapp.com/api/v1/merchants'

class MerchantRequests {

  getAllMerchants() {
    merchantResponses.appendAllMerchantsTable()
    return $.get(api)
      .then((data) => {
        merchantResponses.appendAllMerchants(data)
      })
      .catch((error) => {
        merchantRequests.errorLog(error)
      })
  }

  getMerchantInvoices(merchant_id) {
    merchantResponses.appendMerchantInvoicesTable()
    return $.get(`${api}/${merchant_id}/invoices`)
    .then((data) => {
      merchantResponses.appendMerchantInvoices(data)
    })
    .catch((error) => {
      merchantRequests.errorLog(error)
    })
  }

  getMerchantItems(merchant_id) {
    merchantResponses.appendMerchantItemsTable()
    return $.get(`${api}/${merchant_id}/items`)
      .then((data) => {
        merchantResponses.appendMerchantItems(data)
      })
      .catch((error) => {
        merchantRequests.errorLog(error)
      })
  }

  getMerchantRandom() {
    return $.get(`${api}/random`)
      .then((data) => {
        merchantRequests.loadRandomFindData(data.id)
      })
      .catch((error) => {
        merchantRequests.errorLog(error)
      })
  }

  errorLog(error) {
    console.error(error)
  }

  loadAllMerchantTables() {
    merchantRequests.getAllMerchants()
    merchantRequests.getMerchantInvoices(1)
    merchantRequests.getMerchantItems(1)
  }

  loadRandomFindData(merchant_id) {
    filter.removeTableData([2,3])
    merchantRequests.getMerchantInvoices(merchant_id)
    merchantRequests.getMerchantItems(merchant_id)
  }

}
export let merchantRequests = new MerchantRequests()

