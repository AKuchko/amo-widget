import LeadsService from '@/services/leads.service.js'

// здесь мы описываем все callback'и по документации: render, setttings и т.д.
export default function (widget) {
    widget.callbacks = {
        init() {
            // console.log('init', widget.setSdkCatalogId)
            // AMOCRM.notifications.add({ 'header': 'Внимание', 'text': 'соединение установлено'})
            return true 
        },
        async render() {
            const LeadsService = await import('@/services/leads.service.js')
            let location = APP.getBaseEntity()
            console.log(LeadsService.default.getLeads);
            // if (location === 'leads') {
            //     LeadsService.getLeads()
            //     .then(res => (console.log(res.data)))
            //     .catch(err => console.error(err))
            // }
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