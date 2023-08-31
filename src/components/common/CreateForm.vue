<template>
  <div class="company-table__form">
    <form @submit.prevent="$emit('create')">
      <h3>Сделка</h3>
      <div class="mb-3">
        <label for="leadName" class="form-label">Название</label>
        <input type="text" class="form-control" id="leadName" v-model="model.name">
      </div>
      <div class="mb-3">
        <label for="price" class="form-label">Price</label>
        <input type="number" class="form-control" id="price" v-model="model.price">
      </div>
      <h3>Компания</h3>
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="flexCheckChecked" v-model="model.company.require">
        <label class="form-check-label" for="flexCheckChecked">
          Создать компанию
        </label>
      </div>
      <div class="mb-3">
        <label for="companyName" class="form-label">Название</label>
        <input type="text" class="form-control" id="companyName" v-model="model.company.name">
      </div>
      <div class="mb-3">
        <label for="companyAddress" class="form-label">Адрес</label>
        <input type="text" class="form-control" id="companyAddress" v-model="model.company.address">
      </div>
      <div class="mb-3">
        <h3>Контакты</h3>
        <div v-for="contact in model.contacts" :key="contact.phone">
          <div class="mb-3">
            <label for="contactName" class="form-label">Название контакта</label>
            <input type="text" class="form-control" id="contactName" v-model="contact.name">
          </div>
          <div class="mb-3">
            <label for="contactPhone" class="form-label">Телефон</label>
            <input type="text" class="form-control" id="contactPhone" v-model="contact.phone">
          </div>
          <div class="mb-3">
            <label for="contactEmail" class="form-label">Почта</label>
            <input type="email" class="form-control" id="contactEmail" aria-describedby="emailHelp" v-model="contact.email">
          </div>
        </div>
        <button type="button" class="btn btn-primary" @click="addContact">Add contact +</button>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
import { useModelWrapper } from "../../utils/modelWrapper";

export default {
  name: 'CreateForm',
  props: {
    modelValue: { type: Object }
  },
  setup(props, {emit}) {
    return {
      model: useModelWrapper(props, emit)
    }
  }
}
</script>
