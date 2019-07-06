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

## CDN
```html
<script src="https://unpkg.com/bx24/lib/index.js"></script>
<script
    var bx24 = new BX24();

    bx24.getAuth.then(function(auth) {
        console.log(auth);
    });
    //{
    //    APP_OPTIONS: Array []
    //    AUTH_EXPIRES: "3600"
    //    AUTH_ID: "b984205d003d7e84003d7e8288888881100e034084904251772df3e0ab37a9465bbe04"
    //    DOMAIN: "b24-gx7djf.bitrix24.ru"
    //    FIRST_RUN: false
    //    INSTALL: false
    //    IS_ADMIN: true
    //    LANG: "ru"
    //    MEMBER_ID: "10aa3a0406bae3b5dbba1d87164f4a8f"
    //    PATH: "/rest"
    //    PLACEMENT: "DEFAULT"
    //    PLACEMENT_OPTIONS: Array []
    //    PROTOCOL: 1
    //    REFRESH_ID: "a903485d003d7e84003d7e8288888881100e03bc897bc4c40eed194f68378a6fe87a35"
    //    USER_OPTIONS: []
    //}
</script>
```

