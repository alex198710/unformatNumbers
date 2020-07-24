# UnformatNumbers

## Installation
```js
npm install unformat-numbers
```

## Usage
```js
import unformatNumber from "unformat-numbers"

console.log(unformatNumber("1,000,123.97"))
console.log(unformatNumber("1.000.123,97"))
console.log(unformatNumber("€ 1,0 00.123 $ "))
console.log(unformatNumber("1000"))
console.log(unformatNumber("10,12"))
```

## Output
```js
1000123.97
1000123.97
1000.123
1000
10.12
```