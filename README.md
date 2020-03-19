# @ondaa/common

common === easy || simple

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

// And more type method string, number, object, array, fn
const str = require("@ondaa/common/string");
const num = require("@ondaa/common/number");
const obj = require("@ondaa/common/object");
const arr = require("@ondaa/common/array");
const fn = require("@ondaa/common/fn");

// I will make more method, markdown manual and test script
...
```

<i>Can also be used in <b>Typescript</b></i>

```typescript
// tsfile.ts
import { hasOwnProperty } from "@ondaa/common";
import { camelCase } from "@ondaa/string"
```
No @types needed. Just use it


## Etc information
> Weird modules created by novice developers <br/>
> Supports Node.js version v8.0.0 and above <br/>
> This module follows the ES6 standard. <br/>
> If you are creating a project that supports I.E browsers, you should use webpack, gulp or another transfiler

## Licence
ISC

P.S Thank you for using my module
