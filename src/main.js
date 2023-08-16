// здесь мы описываем все callback'и по документации: render, setttings и т.д.
export default function (widget) {
    widget.callbacks = {
        init() {
            console.log('init')
            return true 
        },
        render() {
            console.log('render')
            return true
        },
        settings() {
            console.log('setings')
            return true
        },      
        bind_actions () {
            return true
        },
        dpSettings() {},
        advancedSettings() {},
        destroy() {},
        onSave() {
            return true
        },
        onAddAsSource(pipeline_id) {},
        onSalesbotDesignerSave(handler_code, params) {},
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

    // script.js, подключаясь к localhost'у, будет выполнять данный файл,
    // при этом ожидая возврат обьекта widget, 
    // поэтому возвращаем widget с описанными callback'ами 
    return widget
} 