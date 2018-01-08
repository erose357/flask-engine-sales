const $ = require('jquery')
import { customerResponses } from '../ajax-responses/customer-responses'
import { filter } from '../objects/filter'
const api = 'https://flask-engine-api.herokuapp.com/api/v1/customers'

class CustomerRequests {

  getAllCustomers() {
    customerResponses.appendAllCustomersTable()
    return $.get(api)
    .then((data) => {
      customerResponses.appendAllCustomers(data)
    })
    .catch((error) => {
      customerRequests.errorLog(error)
    })
  }

  getCustomerInvoices(customer_id) {
    customerResponses.appendCustomerInvoicesTable()
    return $.get(`${api}/${customer_id}/invoices`)
    .then((data) => {
      customerResponses.appendCustomerInvoices(data)
    })
    .catch((error) => {
      customerRequests.errorLog(error)
    })
  }

  errorLog(error) {
    console.log(error)
  }

  getCustomerTransactions(customer_id) {
    customerResponses.appendCustomerTransactionsTable()
    return $.get(`${api}/${customer_id}/transactions`)
    .then((data) => {
      customerResponses.appendCustomerTransactions(data)
    })
    .catch((error) => {
      customerRequests.errorLog(error)
    })
  }

  getCustomerRandom() {
    return $.get(`${api}/random`)
    .then((data) => {
      customerRequests.loadRandomFindData(data.id)
    })
    .catch((error) => {
      customerRequests.errorLog(error)
    })
  }

  loadAllCustomerTables() {
    customerRequests.getAllCustomers()
    customerRequests.getCustomerInvoices(1)
    customerRequests.getCustomerTransactions(1)
  }

  loadRandomFindData(customer_id) {
    filter.scrollView(`.customer-${customer_id}`)
    filter.removeTableData([2,3])
    customerRequests.getCustomerInvoices(customer_id)
    customerRequests.getCustomerTransactions(customer_id)
    //$(`.customer-${customer_id}`).scroll
  }

}
export let customerRequests = new CustomerRequests()
