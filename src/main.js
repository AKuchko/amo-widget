import { createSettings } from "./app";

export default function (widget) {
  widget.callbacks = {
    init() {
      console.log('widget started');
      return true
    },
    render() {
      return true
    },
    settings() {
      return true
    },
    bind_actions() {
      return true
    },
    dpSettings() {

    },
    async advancedSettings() {
      await createSettings()
      return true
    },
    destroy() {

    },
    onSave() {
      return true
    },
    onAddAsSource(pipeline_id) {

    },
    onSalesbotDesignerSave(handler_code, params) {

    },
    contacts: {
      selected() { }
    },
    leads: {
      selected() { }
    },
    todo: {
      selected() { }
    },
  }

  return widget
}
