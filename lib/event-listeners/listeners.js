const $ = require('jquery')
import { merchantRequests } from '../ajax-requests/merchant-requests'
import { filter } from '../objects/filter'

$(document).ready(() => {
  merchantRequests.getAllMerchants()
  merchantRequests.getMerchantInvoices(5)
  merchantRequests.getMerchantItems(10)
  $('button.find').on('click', filter.appendFilterResults)
  $(document).on('click', 'div.dropdown-content p', (event) => {
    let dataType = event.currentTarget.innerHTML
    $('p.data-type').text(dataType)
    if (dataType === 'Customers') {
      filter.removeTableData([1])
      getAllCustomers()
    } else if (dataType === 'Merchants') {
      filter.removeTableData([1])
      merchantRequests.getAllMerchants()
    }
  })
})

const getAllCustomers = () => {
  appendAllCustomersTable()
  return $.get("https://flask-engine-api.herokuapp.com/api/v1/customers")
  .then((data) => {
    appendAllCustomers(data)
  })
  .catch((error) => {
    console.error(error)
  })
}

//need to change tables for the different data types
const appendAllCustomersTable = () => {
  $('.all-title').text('All Customers')
  $('.all-title')
    .after(
      `<tr class="all-header all-data">
        <th>Id</th>
        <th>First Name</th>
        <th>Last Name</th>
      </tr>`
    )
}

const appendAllCustomers = (data) => {
  let reorder = data.reverse()
  reorder.map((customer) => {
    $('.all-header')
      .after(
        `<tr class="all-data">
          <td>${customer.id}</td>
          <td>${customer.first_name}</td>
          <td>${customer.last_name}</td>
        </tr>`
      )
  })
}
