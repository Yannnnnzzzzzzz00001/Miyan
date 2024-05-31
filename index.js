//base by DGXeon
//re-upload? recode? copy code? give credit ya :)
//YouTube: @DGXeon
//Instagram: unicorn_xeon13
//Telegram: t.me/xeonbotinc
//GitHub: @DGXeon
//WhatsApp: +916909137213
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@DGXeon

const {
   exec,
   spawn
} = require('child_process')
const path = require('path')
const express = require("express")
const app = express()

app.use(express.static("public"))

app.get("/", function (req, res) {
  res.send("<h1>Bot Is Running...</h1>")
})
app.get("/clear", function (req, res) {
setTimeout(()=>{
exec(`find . -type f -name "*.m4a" -delete`)
exec(`find . -type f -name "*.mp3" -delete`)
exec(`npm cache clean --force`)
exec(`clear`)
}, 5000)
  res.send("<h1>Cleared...</h1>")
})

app.listen(process.env.PORT || 3000, 
	() => console.log("Bot is running..."));

function start() {
   let args = [path.join(__dirname, 'main.js'), ...process.argv.slice(2)]
   console.log([process.argv[0], ...args].join('\n'))
   let p = spawn(process.argv[0], args, {
         stdio: ['inherit', 'inherit', 'inherit', 'ipc']
      })
      .on('message', data => {
         if (data == 'reset') {
            console.log('Restarting Bot...')
            p.kill()
            start()
            delete p
         }
      })
      .on('exit', code => {
         console.error('Exited with code:', code)
         if (code == '.' || code == 1 || code == 0) start()
      })
}
start()
