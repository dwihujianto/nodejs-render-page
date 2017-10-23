const express = require('express')
const Handlebars = require('handlebars')
const fs = require('fs')

const app = express()

app.use((req,res,next) => {

	res.render = (view,data) => {
		if (data == null) data = {}
		
		const source = fs.readFileSync(__dirname + '/views/' + view + '.html','utf-8')		
		const template = Handlebars.compile(source)
	
		res.send(template(data))
	}

	next()
})

app.get('/',(req,res) => {
	
	let data = {
		body : 'Hello cok'
	}

	res.render('index',data)
})

app.listen(8080, () => console.info('localhost:8080'))