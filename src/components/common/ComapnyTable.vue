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
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import backService from '../../services/backService';

import CreateForm from './CreateForm.vue';

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
    const leadModel = ref({
      name: `Сделка с компанией ${props.companyData.name.short_with_opf}`,
      price: '',
      company: {
        name: props.companyData.name.short_with_opf,
        address: props.companyData.address.unrestricted_value,
        phone: '',
        email: '',
        require: true
      },
      contacts: []
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
      await backService.createLead(leadModel.value)
    }

    return {
      openCreate,
      closeCreate,
      addContact,
      modal,
      mode,
      leadModel,
      createLead,
    }
  }
}
</script>