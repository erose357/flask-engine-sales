const $ = require('jquery')

class MerchantResponses {

  appendAllMerchants(data) {
    let reorder = data.reverse()
    reorder.map((merchant) => {
      $('.merchant-header')
        .after(
          `<tr>
            <td>${merchant.id}</td>
            <td>${merchant.name}</td>
          </tr>`
        )
    })
    $('.all-title').text(`All Merchants`)
  }

  appendMerchantInvoices(data) {
    data.invoices.map((invoice) => {
      $('tr.rel1-header')
        .after(
          `<tr>
            <td>${invoice.id}</td>
            <td>${invoice.status}</td>
            <td>${invoice.merchant_id}</td>
            <td>${invoice.customer_id}</td>
          </tr>`
        )
    })
    $('.rel1-title').text(`Merchant Invoices`)
  }
}

export let merchantResponses = new MerchantResponses()
