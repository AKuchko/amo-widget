<template>
  <div>
    <form class="ddata-form mb-5" @submit.prevent="getData">
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Введите ИНН компании</label>
        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="model">
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    <div v-if="isLoading" class="d-flex justify-content-center">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
    <ComapnyTable v-if="companyData" :companyData="companyData.data" />
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import { ref } from "vue";

import backService from "../services/backService.js";
import ComapnyTable from "./common/ComapnyTable.vue";

export default {
    name: 'TheSettings',
    components: { ComapnyTable },
    setup() {
      const companyData = ref(null)
      const isLoading = ref(false)
      const model = ref('')

      const getData = async () => {
        isLoading.value = true 
        companyData.value = await backService.getCompanyInfo({ identifier: model.value })
        isLoading.value = false 
      }

      return {
        companyData,
        isLoading,
        model,
        getData,
      }
    }
}
</script>

<style lang="scss">
.settings {
    &__list {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 25px;
    }
}
</style>
