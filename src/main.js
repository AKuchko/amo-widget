import { createSettings } from "./advancedSettings";

export default function (widget) {
  widget.callbacks = {
    init() {
      console.log('widget started');
      return true
    },
    render() {
      console.log('render');
      return true
    },
    settings() {
      return true
    },
    bind_actions() {
      return true
    },
    advancedSettings() {
      createSettings()
      console.log('adv sett');
      return true
    },
    onSave() {
      return true
    },
  }

  return widget
}
