const express = require('express')
const app = express()

const PORT = 3000

app.use(express.static('./public')); 

// app.get('', (req, res) => {
//   axios.get('serivceURL')
//     .then()
// });

app.listen(PORT, () => console.log(`HO YA ON ${PORT}!`))

