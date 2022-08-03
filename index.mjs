import got from 'got'
import axios from 'axios'
import express from 'express'

const sleep = ms => new Promise(res => setTimeout(res, ms))

const app = express()

app.get('/', function (req, res) {
	res.send('Hello World')
})

async function onReady() {
	console.log(`Server is up.`)

	await sleep(2000)

	const gotResponse = await got.get('http://localhost:3001')
	const axiosResponse = await axios.get('http://localhost:3001')

	console.log({
		got: gotResponse.body,
		axios: axiosResponse.data,
	})

	process.exit()
}

app.listen(3001, 'localhost', onReady)
