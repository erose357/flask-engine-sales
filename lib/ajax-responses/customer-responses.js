const $ = require('jquery')

class CustomerResponses {
  appendAllCustomersTable() {
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

  appendAllCustomers(data) {
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
}

export let customerResponses = new CustomerResponses()
