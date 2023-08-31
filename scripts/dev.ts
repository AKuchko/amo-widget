import {
  Config,
  WidgetBuilder,
} from "amo-widget-builder";

import { publicPath } from "../vue.config";
import { config as commonConfig } from "./common";

const config: Config = {
    ...commonConfig,
    entryPoint: `${publicPath}/js/app.js`,
}

const builder = new WidgetBuilder(config);

;(async () => {
    await builder.init()
})()
