import { createSettings } from "./app";

export default function (widget) {
    widget.callbacks = {
        init() {
            console.log('hello');
            return true 
        },
        render() {
            console.log('render');
            return true
        },
        settings() {
            console.log('setings')
            return true
        },      
        bind_actions () {
            return true
        },
        dpSettings() {

        },
        async advancedSettings() {
            console.log('Advanced settings');
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
            selected () {}
        },
        leads: {
            selected () {}
        },
        todo: {
            selected () {}
        },
    }

    return widget
}
