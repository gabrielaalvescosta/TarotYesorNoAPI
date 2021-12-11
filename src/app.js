// Importação do express
const customExpress = require('./config/custom-express')
const autores = require('./controllers/tarotController')

// Config de app e porta
const app = customExpress()
const PORT = process.env.PORT || 3003

// Importação das funções controllers
autores(app)

//Listener da porta
app.listen(PORT, () => {
    console.log(`Server rodando na porta: ${PORT} em http://localhost:${PORT}`)
})