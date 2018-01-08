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

  appendCustomerInvoicesTable() {
    $('.rel1-title').text('Customer Invoices')
    $('.rel1-title')
      .after(
        `<tr class="rel1-header rel1-data">
          <th>Id</th>
          <th>Status</th>
          <th>Merchant Id</th>
          <th>Customer Id</th>
        </tr>`
      )
  }

  appendCustomerTransactionsTable() {
    $('.rel2-title').text('Customer Transactions')
    $('.rel2-title')
      .after(
        `<tr class="rel2-header rel2-data">
          <th>Id</th>
          <th>Invoice Id</th>
          <th>Result</th>
        </tr>`
      )
  }

  appendAllCustomers(data) {
    let reorder = data.reverse()
    reorder.map((customer) => {
      $('.all-header')
        .after(
          `<tr class="all-data customer-${customer.id}">
            <td>${customer.id}</td>
            <td>${customer.first_name}</td>
            <td>${customer.last_name}</td>
          </tr>`
        )
    })
  }

  appendCustomerInvoices(data) {
    let reorder = data.invoices.reverse()
    reorder.map((invoice) => {
      $('.rel1-header')
        .after(
          `<tr class="rel1-data">
            <td>${invoice.id}</td>
            <td>${invoice.status}</td>
            <td>${invoice.merchant_id}</td>
            <td>${invoice.customer_id}</td>
          </tr>`
        )
    })
  }

  appendCustomerTransactions(data) {
    let reorder = data.transactions.reverse()
    reorder.map((transaction) => {
      $('.rel2-header')
        .after(
          `<tr class="rel2-data">
            <td>${transaction.id}</td>
            <td>${transaction.invoice_id}</td>
            <td>${transaction.result}</td>
          </tr>`
        )
    })
  }
}

export let customerResponses = new CustomerResponses()
