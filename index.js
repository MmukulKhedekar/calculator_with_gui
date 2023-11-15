const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow

function createWindow() {
    mainWindow = new BrowserWindow({
        show: false,
        backgroundColor: '#fff',
        height: 600,
        width: 300,
        opacity: 0.8,
        resizable: false,
        darkTheme: true,
        autoHideMenuBar: true
    })

    mainWindow.on('closed', function() {
        mainWindow = null
    })

    mainWindow.once('ready-to-show', () => {
        mainWindow.show()
    })

    mainWindow.loadFile('./index.html')
    return mainWindow
}

app.on('ready', createWindow)