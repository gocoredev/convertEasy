# ConvertEasy 1.0.4

A Simple way to convert local currency, length, height and other metrics. 

# New Features!

  - Convert number format to currency local. 
  - Now Can you use this library to generate unique Id numeric, string customized for your primaries Keys.
### Development

Want to contribute? Great!

ConvertEasy would love your help to grow.

Open your favorite Terminal and run these commands.

First Tab:
```sh
$ npm i converteasy
```

For ES6:
```js
import {convertMoney} from 'converteasy'
```

For lower JS:
```js
const {convertMoney} = require ('converteasy')
```

For use you just need pass three parameters to function:
    - Local = "pt-br"
    - Currency = "BRL"
    - Value = 350

```js
convertMoney('pt-br', 'BRL', 1350)
```
The return will be:
```js
R$ 1.350,00
```
----

Convert Date to ISO string:

For ES6:
```js
import {convertIsoToDate} from 'converteasy'
```

For lower JS:
```js
const {convertIsoToDate} = require ('converteasy')
```

For use you just need pass three parameters to function:
    - ISO: 2020-09-15T18:45:26.621Z

```js
convertIsoToDate('2020-09-15T18:45:26.621Z')
```
The return will be:
```js
2020-9-15
```
New Methods:

For Generate a numeric random ID with custom length:
```js
genNumId(length)
```

For generate a string unique ID with customized length:
```js
uniId (length) 
```

For generate a string unique ID complete:
```js
uniqueId ()
```


License
----

MIT