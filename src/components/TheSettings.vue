<template>
  <div>
    <form class="ddata-form" @submit.prevent="getData">
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Введите ИНН компании</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
        <div id="emailHelp" class="form-text">.</div>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    <div v-if="companyData" class="ddata-data">
      <h2></h2>
      <table class="table">
        <tbody>
          <tr>
            <th>1</th>
            <td>Mark</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import BaseSetting from "./common/BaseSetting.vue";
import backService from '../services/backService.js';

export default {
    name: 'TheSettings',
    components: { BaseSetting },
    setup() {
      const companyData = ref(null)
      const getData = () => {
        backService.getLeads()
      }

      return {
        companyData,
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
