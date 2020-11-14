const { app, BrowserWindow } = require('electron');

let appWindow;

function crearVentana() {
    appWindow = new BrowserWindow({
        width: 800,
        height: 850,
        // resizable: false
        minWidth: 800,
        minHeight: 600,
        center: true,
        show: false
    });

    // Cuando la aplicacion es cerrada
    appWindow.on('closed', () => {
        appWindow = null;
    });

    // Cargar HTML
    appWindow.loadFile('./index.html')

    // Cuando la app este lista, mostrar la ventana
    appWindow.once('ready-to-show', () => {
        appWindow.show();
    });
}

app.on('ready', crearVentana);






