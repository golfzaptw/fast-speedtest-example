# <center>Example for use fast speed test api</center>

## Install
### npm
`npm install`
### yarn
`yarn`

## Usage

### CLI
#### npm
`npm run fast-speedtest ${{token}} --verbose --no-https --timeout=10000 --count=5 --buffer=8 --unit=Mbps`
#### yarn
`yarn fast-speedtest ${{token}} --verbose --no-https --timeout=10000 --count=5 --buffer=8 --unit=Mbps`

### Code in terminal
#### node
`node index.js`

## How to find token
Go on `fast.com` -> Right click and click `Inspect` -> Go to tap `Network` -> Filter only `XHR` -> find Request URL `v2?https=true&token=${{token}}&urlCount=5`


## Reference
`https://github.com/branchard/fast-speedtest-api`