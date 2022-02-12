// index.js
import { Api  } from  "telegram"
import{ betterConsoleLog } from "telegram/Helpers"
import express  from 'express'
const app = express()
import {Snake,} from "tgsnake"
 //importing the modules.
const bot = new Snake({ 
  apiHash : "3b887a6b3eea92a12cd983f8c85d6373", 
  apiId : 14544133, 
 
}) 




function start () {
  bot.run()
  app.listen(5100,() => console.log('Server is working'))
}


start()

app.get('/api',(req,res) => {
  res.send('working')
})



bot.on('message',  async ctx => {
   if(ctx.from.id === 5139030360n) {
      if(ctx.text == 'isOK') {  
          ctxp.reply('sdsd')
      }
     try {
      const arr = ctx.text.split('MyCustomId')
      await ctx.telegram.sendDocument('testelyorBot',arr[0],{download:true,caption:arr[1],fileName:`${arr[2]}.mp4`},)
      
     }
     catch(e) {
       console.log(e)
     }
  
   }
})

module.exports = app
