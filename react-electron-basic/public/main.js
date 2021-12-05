const { app, BrowserWindow } = require('electron');
const path = require('path');

app.whenReady().then(() => {

    let win = new BrowserWindow({
        show : true,
        webPreferences : {
            nodeIntegration : true
        }
    });

    if(process.env.MODE==='dev'){
        win.loadURL('http://localhost:3000');
        win.webContents.openDevTools();
    }else{
        win.loadFile(`${path.join(__dirname,'../build/index.html')}`);
    }

    win.once('ready-to-show', ()=> win.show());
    win.on('closed', () =>{
        win = null;
    })

})

app.on('window-all-closed', () => {
    app.quit()
})
