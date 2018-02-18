const WebSocket = require('ws')

const wss = new WebSocket.Server({port: 8989})

const users = []
