const PORT = 8000
const express = require('express')
const cors = require('cors')
const axios = require('axios')
require('dotenv').config()

const app = express()

app.use(cors())

app.get('/', (req,res) => {
    res.json('hii')
})

app.get('/convert', (req,res) => {
    const toCurrency = req.query.to_currency
    const fromCurrency = req.query.from_currency

    console.log('toCurrency', toCurrency)
    console.log('fromCurrency', fromCurrency)
    const options = {
        method: 'GET',
        url: 'https://alpha-vantage.p.rapidapi.com/query',
        params: {
            from_currency: fromCurrency,
            function: 'CURRENCY_EXCHANGE_RATE',
            to_currency: toCurrency
        },
        headers: {
            'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
            'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com'
        }
    }

    axios.request(options).then((response) => {
        res.json(response.data['Realtime Currency Exchange Rate']['5. Exchange Rate'])  
    }).catch((error) => {
        console.error(error)
    })
})

app.get('/news', (req,res) => {
  const options = {
        method: 'GET',
        url: 'https://cryptocurrency-news2.p.rapidapi.com/v1/coindesk',
        // https://h-crypto-news.p.rapidapi.com/cryptonews
        //https://crypto-news16.p.rapidapi.com/news/top/5
        headers: {
          'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
          'X-RapidAPI-Host': 'cryptocurrency-news2.p.rapidapi.com'
        //   h-crypto-news.p.rapidapi.com
        //crypto-news16.p.rapidapi.com
        }
       
      }
  
      axios.request(options).then((response) => {
        res.json(response.data)
   
      }).catch((error) => {
        console.error(error)
  
      })
})


app.listen(8000, () => console.log(`Server is running on port ${PORT}`))
