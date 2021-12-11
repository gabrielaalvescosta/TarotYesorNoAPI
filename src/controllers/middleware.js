const express = require('express')
const cors = require('cors')

const middleware = (app) => {
    app.use(cors());
    app.use(express.json())
    app.use((req, res, next) => {
        next();
    })
}

module.exports = middleware;