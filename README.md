# @ondaa/common v0.0.2
한국 개발자가 만드는 이상한 common 라이브러리
## How to install

Using npm
```
$> npm i --save @ondaa/common
```

Using yarn
```
$> yarn add @ondaa/common
```

In Node Javascript
```javascript
// Get Common methods
const common = require("@ondaa/common");

// And you can this
const { isEmpty } = require("@ondaa/common");

// And more type method string, object, array, fn
const str = require("@ondaa/common/string");
const obj = require("@ondaa/common/object");
const arr = require("@ondaa/common/array");
const fn = require("@ondaa/common/fn");

// I will make more method
...
```

<i>Can also be used in <b>Typescript</b></i>

```typescript
// tsfile.ts
import { hasOwnProperty } from "@ondaa/common";
```
No @types needed. Just use it