# CraftRise API


## Kurulum

npm paketini kurun

```
npm install craftrise-public-api
```

## Kullanım

```javascript
const api = require('craftrise-public-api')

async function verisorgula() {
    var data = await api.Sorgu("Crefax")
    console.log(data)
}
verisorgula()
```

## Verilere erişmek için
```
{
  username: 'Crefax',
  status: 'OFFLINE',
  tag: 'PLAYER',
  rank: 'KIZILTAŞ III',
  totalxp: '143.445',
  nextlevelxp: '21.555',
  head: 'https://www.craftrise.com.tr/gets/get-head.php?s=256&u=Crefax',
}
```
### Çıkan verilere erişmek için
```javascript
console.log(data.rank)
```
yazmanız yeterli olacaktır.


## License
[MIT](https://choosealicense.com/licenses/mit/)
