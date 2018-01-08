const $ = require('jquery')
import { customerResponses } from '../ajax-responses/customer-responses'

class CustomerRequests {

  getAllCustomers() {
    customerResponses.appendAllCustomersTable()
    return $.get("https://flask-engine-api.herokuapp.com/api/v1/customers")
    .then((data) => {
      customerResponses.appendAllCustomers(data)
    })
    .catch((error) => {
      customerRequests.errorLog(error)
    })
  }

  errorLog(error) {
    console.log(error)
  }

}
export let customerRequests = new CustomerRequests()
