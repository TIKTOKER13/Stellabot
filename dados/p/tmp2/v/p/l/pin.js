//Plugin criado por dark, deixe os creditos fdp
let fetch = require('node-fetch')
const axios = require('axios')
let handler = async(m, { conn, fetchJson, text }) => {
    var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? m.message.buttonsResponseMessage.selectedButtonId : ''
    const comando = body.slice(1).trim().split(/ +/).shift().toLowerCase()
    const darklindo = `dappakntlll`

if (comando == "pin") {
    if (!text) throw `Digite a sua pesquisa | Exemplo /pin naruto`
  api = `https://leyscoders-api.herokuapp.com/api/pinsearch?q=${text}&apikey=${darklindo}`
  conn.sendFile(m.chat, api, '', `Pesquisei por ${text} no pinterest e encontrei isso.`, m) //enviando img
            }


 }
handler.help = ['Pin (pesquisa)']
handler.tags = ['downloader','cs']
handler.command = /^(pin)$/i
module.exports = handler
