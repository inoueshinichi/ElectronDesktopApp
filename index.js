// Nodejsのモジュールをimport
const { app, BrowserWindow } = require('electron');

function createWindow() {
    let win = new BrowserWindow({
        width: 400,
        height: 200,
        // backgroundColor: '#660066',
        webPreferences : {
            nodeIntegration: true
        }
    });
    win.loadFile("index.html");
    // win.loadFile('https://www.tuyano.com');
}

// 非同期処理でcreateWindow関数を実行
app.whenReady().then(createWindow);

// 全Windowが閉じたときの処理
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})