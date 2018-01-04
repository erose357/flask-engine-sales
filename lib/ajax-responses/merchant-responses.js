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
  }

}

export let merchantResponses = new MerchantResponses()
