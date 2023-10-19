const express = require('express')
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

require('./car')(app)
require('./customer')(app)
require('./order')(app)

// #############################################################################
// This configures static hosting for files in /public that have the extensions
// listed in the array.
// var options = {
//   dotfiles: 'ignore',
//   etag: false,
//   extensions: ['htm', 'html','css','js','ico','jpg','jpeg','png','svg'],
//   index: ['index.html'],
//   maxAge: '1m',
//   redirect: false
// }
// app.use(express.static('public', options))
// #############################################################################

// Catch all handler for all other request.
app.use('*', (req, res) => {
  res.json({ msg: ' Welcome to AWS. Code base for this application lies on GitHub at: https://github.com/FarrahZakir/thesis. Please use the endpoints to access data. For example: /order ' }).end()
})

module.exports = app
