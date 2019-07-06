[![Build Status](https://travis-ci.com/eustatos/bx24.svg?branch=master)](https://travis-ci.com/eustatos/bx24)
[![Maintainability](https://api.codeclimate.com/v1/badges/abafead35c167d2a819b/maintainability)](https://codeclimate.com/github/eustatos/bx24/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/abafead35c167d2a819b/test_coverage)](https://codeclimate.com/github/eustatos/bx24/test_coverage)

With this package, you can use promise instead of 
[bx24](https://api.bitrix24.com/api/v1/), that use a callback.

Intended for use only in applications that are hosted in the Bitrix cloud.
[Read more...](https://training.bitrix24.com/rest_help/index.php)

## Install
```
npm i -S bx24
```
or
```bash
yarn add bx24
```
## Usage
```javascript
import { BX24 } from 'bx24';

const bx24 = new BX24(window, parent);

bx24.getAuth()
.then(function(auth) {
    console.log(auth);
})
//ACCESS_TOKEN: "f501215d003d7e84003d7e8200000001100e03dc37a458d34295efbd236acf1d3e6cc7"
//DOMAIN: "b24-gx7djf.bitrix24.ru"
//EXPIRES_IN: undefined
//MEMBER_ID: "10aa3c0406bae7b5dbba1d87164f4a8f"
//REFRESH_TOKEN: "e580485d003d7e84003d7e8200000001100e03c1685c8a1a76097df895324671373e09"
```

## CDN
```html
<script src="https://unpkg.com/bx24@latest/lib/index.js"></script>
<script
    var bx24 = new BX24();

    bx24.getAuth.then(function(auth) {
        console.log(auth);
    });
//ACCESS_TOKEN: "f501215d003d7e84003d7e8200000001100e03dc37a458d34295efbd236acf1d3e6cc7"
//DOMAIN: "b24-gx7djf.bitrix24.ru"
//EXPIRES_IN: undefined
//MEMBER_ID: "10aa3c0406bae7b5dbba1d87164f4a8f"
//REFRESH_TOKEN: "e580485d003d7e84003d7e8200000001100e03c1685c8a1a76097df895324671373e09"
</script>
```

