<template>
  <div class="copany-table card">
    <div v-if="mode === 'create'" class="card-header">
      <button type="button" class="btn-close" aria-label="Close" @click="closeCreate"></button>
    </div>
    <div class="card-body">
      <div v-show="mode === 'data'" class="company-table__data">
        <h2>Компания {{ companyData.name.short_with_opf }}</h2>
        <button @click="openCreate" type="button" class="btn btn-primary">Create lead</button>
        <table class="table mt-3">
          <tbody>
            <tr>
              <th>Управление</th>
              <td>{{ companyData.management.name || '' }}</td>
            </tr>
            <tr>
              <th>Адрес</th>
              <td>{{ companyData.address.unrestricted_value || '' }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <CreateForm v-show="mode==='create'" v-model="leadModel" @create="createLead" />
      <div v-if="isLoading" class="d-flex justify-content-center loading-layout">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  computed,
  ref,
} from "vue";

import backService from "../../services/backService";
import CreateForm from "./CreateForm.vue";

export default {
  name: 'CompanyTable',
  components: { CreateForm },
  props: {
    companyData: {
      type: Object,
    },
  },
  setup(props) {
    const modal = ref(null)
    const mode = ref('data')
    const isLoading = ref(false)
    const leadModel = computed(() => {
      return {
        name: `Сделка с компанией ${props.companyData.name.short_with_opf}`,
        price: 0,
        company: {
          name: props.companyData.name.short_with_opf,
          address: props.companyData.address.unrestricted_value,
          phone: '',
          email: '',
          require: true
        },
        user: {
          id: AMOCRM.constant('user').id,
          name: AMOCRM.constant('user').name
        },
        subdomain: AMOCRM.constant('account').subdomain,
        contacts: []
      }
    })

    const openCreate = () => {
      mode.value = 'create'
    }
    const closeCreate = () => [
      mode.value = 'data'
    ]
    const addContact = () => {
      leadModel.value.contacts.push({
        name: '',
        phone: '',
        email: '',
      })
    }
    const createLead = async () => {
      isLoading.value = true
      console.log(leadModel.value);
      const { data } = await backService.createLead(leadModel.value)
      isLoading.value = false
      window.location.href = `https://allollal.amocrm.ru/leads/detail/${data._embedded.leads[0].id}`
    }

    return {
      openCreate,
      closeCreate,
      addContact,
      createLead,
      isLoading,
      modal,
      mode,
      leadModel,
    }
  }
}
</script>

<style>
.loading-layout {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
