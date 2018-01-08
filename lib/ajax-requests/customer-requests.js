const $ = require('jquery')
import { customerResponses } from '../ajax-responses/customer-responses'
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

}
export let customerRequests = new CustomerRequests()
