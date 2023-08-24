import client from "../http/client";

export default {
  getCompanyInfo({ INN, OGRN }) {
    return client.get(`/company/${INN ? INN : OGRN}`)
  },

  getLeads() {
    return client.get('/amo/leads')
  }
}
