# ConverEasy 1.0.0

A Simple way to convert local currency, length, height and other metrics.

# New Features!

  - Convert number format to currency local. 
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

License
----

MIT