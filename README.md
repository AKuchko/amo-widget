# amo-widget

## Dir tree

```sh
.
├── README.md
├── dist
│   └── js
│       ├── app.94d8ca3a.js
│       └── app.94d8ca3a.js.map
├── package.json
├── scripts
│   ├── common.ts
│   ├── dev.ts
│   └── prod.ts
├── src
│   └── main.js
├── tsconfig.json
├── vue.config.js
├── widget.zip
└── yarn.lock
```

## npm/yarn scripts 

```sh
yarn run serve // dev server

yarn run build // production build

yarn run widget // production widget build 

yarn run widget:dev // development widget build 
```

## Start widget

1. Clone repository 
```sh
git clone $url
```

2. Install dependencies
```sh
npm install or npm ci

or

yarn install 
```

3. Build widget for development
```sh
npm run widget:dev

or 

yarn run widget:dev
```

4. Load widget to [amoCRM](https://www.amocrm.ru/developers/content/integrations/upload) 

5. Serve project
```sh
npm run serve 

or 

yarn run serve 
```
6. Done. Widgeet ready to development

## What is used ?

- Vue.js
- Webpack
- typescript
- [amo-widget-builder](https://advisory-frontend.vercel.app/advisory/npm-package/amo-widget-builder)

## amo-widget-builder

### Как это работает ?

__amo-widget-builder__ – это библиотека для автоматизации разработки виджетов под amoCRM. 

Для работы необходимыо 3 основных файла:

- __common.ts__ – настройки manifest.js 
- __dev.ts__ - сборка виджета для разработки (работает через подключение к localhost)
- __prod.ts__ – production, сборка версии для продакшина

#### common.ts

Данный файл отвечает за настройку *manifest.js*. Для этого создаем объект типа *Config* и назначаем необходимые настройки.

В нашем случае это выглядит так: 

```ts
import { Config } from 'amo-widget-builder';

export const config: Config = {
    name: {}, // Название виджета
    description: {}, // Описание виджета при сачивании 
    shortDescription: {}, // Короткое описсание
    tourDescription: {}, // Описание тура (когда виджет еще не скачен) 
    advancedSettingsTitle: {}, // Заголовок для расширенных настроек
    fakeConfig: {}, // (используется, когда не планируем использовать хранение настрооект в amoCRM)
    locations: [], // locations
    locales: [], // поддерживаемые языки: 'ru', 'en', 'es'
    outDir: '', // директория, в которой будет создан zip-архив виджета
    bundleDir: '', // путь до директории в которой хранятся бандлы
    imagesDir: '', // путь до директории в которой хранятся наши изображения (если не уазана, то сгенерируются дефолтные)
    version: '1.0.0', // версия виджета
    manifest: {}, // поле для "расширенных" настроек (left_menu, dp, ...)
};
```

#### dev.ts

Файл, отвечаеющий за сборку виджета для разработки. 

#### prod.ts

Файл, отвечаеющий за сборку виджета для production'а. 