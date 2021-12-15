# 快速开始

#### 安装组件库

```bash
npm i mooc-ui-wzq
```

#### 使用组件库
在main.js中引用组件库
```javascript
// 全部引入
import 'mooc-ui-wzq/css/index.css';
import MUI from 'mooc-ui-wzq';

// 按需引入
import 'mooc-ui-wzq/css/index.css';
import { demo } from 'mooc-ui-wzq';
Vue.use(demo)
```