// importing elements to draw a new window

const {app, BrowserWindow} = require('electron');

const path = require('path');
const isDev = require('electron-is-dev');

let mainWindow;

process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true';

// function to create window
function createWindow(){
    // create new renderer proccess
    mainWindow = new BrowserWindow({
        autoHideMenuBar: true,
        width:1594,
        height:1018
    });
    // File to load our react renerer proccess if we are in dev mode or not
    mainWindow.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '..build/index.html')}`);

    // block resize window
    // mainWindow.setResizable(false);
    //Open dev tools if dev
    if(isDev) mainWindow.webContents.openDevTools();

    //if we close window, proccess is null
    mainWindow.on('closed', () => mainWindow = null);
}


// when application is readey, do something
app.on('ready', () => createWindow());

app.on('window-all-closed', () => { if(process.platform !== 'darwin') app.quit(); });

app.on('activate', () => {if(mainWindow===null) createWindow();})