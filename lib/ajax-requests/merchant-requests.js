const $ = require('jquery')
import { merchantResponses } from '../ajax-responses/merchant-responses'

class MerchantRequests {

  getAllMerchants() {
    return $.get("https://flask-engine-api.herokuapp.com/api/v1/merchants")
      .then((data) => {
        merchantResponses.appendAllMerchants(data)
      })
      .catch((error) => {
        console.error(error)
      })
  }

}
export let merchantRequests = new MerchantRequests()

