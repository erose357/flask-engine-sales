const $ = require('jquery')

class MerchantResponses {

  appendAllMerchants(data) {
    let reorder = data.reverse()
    reorder.map((merchant) => {
      $('.all-header')
        .after(
          `<tr class="all-data merchant-${merchant.id}">
            <td>${merchant.id}</td>
            <td>${merchant.name}</td>
          </tr>`
        )
    })
  }

  appendMerchantInvoices(data) {
    let reorder = data.invoices.reverse()
    reorder.map((invoice) => {
      $('tr.rel1-header')
        .after(
          `<tr class="rel1-data">
            <td>${invoice.id}</td>
            <td>${invoice.status}</td>
            <td>${invoice.merchant_id}</td>
            <td>${invoice.customer_id}</td>
          </tr>`
        )
    })
    $('.rel1-title').text(`Merchant Invoices`)
  }

  appendMerchantItems(data) {
    let reorder = data.items.reverse()
    reorder.map((item) => {
      $('.rel2-header')
        .after(
          `<tr class="rel2-data">
            <td>${item.id}</td>
            <td>${item.name}</td>
            <td>${item.unit_price}</td>
            <td>${item.description}</td>
          </tr>`
        )
    })
    $('.rel2-title').text('Merchant items')
  }

  appendAllMerchantsTable() {
    $('.all-title').text(`All Merchants`)
    $('.all-title')
      .after(
          `<tr class="all-header all-data">
            <th>Id</th>
            <th>Name</th>
          </tr>`
      )
  }

  appendMerchantInvoicesTable() {
    $('.rel1-title').text('Merchant Invoices')
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

  appendMerchantItemsTable() {
    $('.rel2-title').text('Merchants Items')
    $('.rel2-title')
      .after(
        `<tr class="rel2-header rel2-data">
          <th>Id</td>
          <th>Name</td>
          <th>Unit Price</td>
          <th>Description</td>
        </tr>`
      )
  }
}

export let merchantResponses = new MerchantResponses()
