# amo-widget

## Dir tree

```
.
├── README.md
├── dist
│   └── js
│       ├── app.94d8ca3a.js
│       └── app.94d8ca3a.js.map
├── package.json
├── scripts
│   ├── common.ts
│   ├── dev.ts
│   └── prod.ts
├── src
│   └── main.js
├── tsconfig.json
├── vue.config.js
├── widget.zip
└── yarn.lock
```

## Start widget

1. Clone repository 
```
git clone $url
```

2. Install dependencies
```
npm install or npm ci
```

3. Build widget for development
```
npm run widget:dev
```

4. Load widget to [amoCRM](https://www.amocrm.ru/developers/content/integrations/upload) 

5. Serve project
```
npm run serve 
```
6. Done. Widgeet ready to development

## What is used ?

- Vue.js
- Webpack
- typescript
- [amo-widget-builder](https://advisory-frontend.vercel.app/advisory/npm-package/amo-widget-builder)

## amo-widget-builder

### Как это работает ?

__amo-widget-builder__ – это библиотека для автоматизации разработки виджетов под amoCRM. 

Для работы необходимыо 3 основных файла:

- __common.ts__ – настройки manifest.js 
- __dev.ts__ - сборка виджета для разработки (работает через подключение к localhost)
- __prod.ts__ – production, сборка версии для продакшина
