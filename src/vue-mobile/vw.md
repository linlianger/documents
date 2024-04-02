### vm适配(vue3 + vite)
``index.html``
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```
```shell
pnpm i postcss-px-to-viewport -S
```
``vite.config.ts``
```ts
import pxtovw from "postcss-px-to-viewport"
css: {
    postcss: {
    // plugins: [postcssToViewport()],
    plugins: [
		pxtovw({
        unitToConvert: "rpx", // 要转化的单位
        viewportWidth: 750, //100vw=750px，UI设计稿的宽度,vant是375。可参考这个：https://juejin.cn/post/6961737808339795975
        unitPrecision: 6, // 转换后的精度，即小数点位数
        propList: ["*"], // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换
        viewportUnit: "vw", // 指定需要转换成的视窗单位，默认vw
        fontViewportUnit: "vw", // 指定字体需要转换成的视窗单位，默认vw
        selectorBlackList: ["ignore-"], // 指定不转换为视窗单位的类名，
        minPixelValue: 1, // 默认值1，小于或等于1px则不进行转换
        mediaQuery: true, // 是否在媒体查询的css代码中也进行转换，默认false
        replace: true, // 是否转换后直接更换属性值
        landscape: false, // 是否处理横屏情况
        exclude: [/node_modules/], // 忽略某些文件夹下的文件或特定文件，例如 'node_modules' 下的文件
        include: [/src/], // 如果设置了include，那将只有匹配到的文件才会被转换
            }),
        ],
    }
},
```

> 如果使用ts有报错提示

``postcss-px-to-viewport.d.ts``
```ts
declare module "postcss-px-to-viewport" {
  type Options = {
    unitToConvert: "px" | "rem" | "cm" | "em" | "qy";
    viewportWidth: number;
    viewportHeight: number; // not now used; TODO: need for different units and math for different properties
    unitPrecision: number;
    viewportUnit: string;
    fontViewportUnit: string; // vmin is more suitable.
    selectorBlackList: string[];
    propList: string[];
    minPixelValue: number;
    mediaQuery: boolean;
    replace: boolean;
    landscape: boolean;
    landscapeUnit: string;
    landscapeWidth: number;
  };

  export default function (options: Partial<Options>): any;
}


```

> 在页面直接使用rpx即可转成vw
```css
.box{
  width: 120rpx;
  height: 40rpx;
  border: 1px solid red;
}
```