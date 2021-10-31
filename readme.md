# Shakepay Clone

Mobile clone of [Shakepay](https://shakepay.com/), frontend implemented with [Expo](https://expo.dev/), backend and authentication implemented with [Firebase](https://firebase.google.com/). 

### Video demo:

[![IMAGE_ALT](https://img.youtube.com/vi/4EwTNI94P7A/0.jpg)](https://youtu.be/4EwTNI94P7A)

### Note:
Conversions are calculated using floats instead of with integers and storing everything in the lowest domination of each currency, e.g. satoshis for Bitcoin. Clearly wouldn't want to do this for any sort of production application as you will get rounding errors and was only used to expedite the development. 

Prices are simply determined by the querying the current price of that cryptocurrency via the CoinGecko API. If a backend that implements a Matching Engine is added then the prices could be queried from there instead.