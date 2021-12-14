### card组件库

### 示例
<card imgSrc="/logo.png" summary="Vue"></card>

### 代码
```html
<card imgSrc="/logo.png" summary="Vue"></card>
```

### Attributes
| 参数 | 说明 | 类型 | 是否必有 | 默认值 |
| ---- | ---- | ---- | -------  | -----  |
| width | 卡片的宽度 | Number | false | - |
| imgSrc | 图片资源地址 | String | true | - | 
| imgHeight | 图片高度 | Number | false | - |
| summary | 卡片概要 | String/slot | false | - |
| footer | 卡片底部 | Slot | false | - |