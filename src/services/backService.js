import client from "../http/client";

export default {
  getCompanyInfo({ identifier }) {
    return client.get(`/company/${identifier}`).then(res => res.data)
  },

  createLead(data) {
    return client.post('/amo/createLead', data)
  }


}
