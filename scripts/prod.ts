import { Config, WidgetBuilder } from "amo-widget-builder";
import { config as commonConfig } from "./common";

const config: Config = {
    ...commonConfig,
    entryPoint: `js/app.js`, // разница заключается в том, что при продакшине entryPoin берется из самого архива, а не с localhost'a
}

const builder = new WidgetBuilder(config);

;(async () => {
    await builder.init()
})()