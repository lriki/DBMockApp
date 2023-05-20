import path from "node:path";
import { BrowserWindow, app, ipcMain } from "electron";

app.whenReady().then(() => {
    const mainWindow = new BrowserWindow({
        webPreferences: {
            preload: path.resolve(__dirname, "preload.js"),
            webviewTag: true,
            //nodeIntegration: true,
        },
    });

    mainWindow.loadFile("dist/index.html");
    // mainWindow.webContents.openDevTools({ mode: "detach" });


    mainWindow.webContents.setWindowOpenHandler(({ url }) => {
        console.log("setWindowOpenHandler", url);
        return {
            action: 'allow', overrideBrowserWindowOptions: {
                parent: mainWindow,
            }
        };
    });

    // mainWindow.on('move', function () {
    //     console.log("move");
    //     // Do move event action
    // });

    ipcMain.handle("callSample", (event, data) => {
        console.log("callSample");
        return (`${data}にゃん`);
    });

    ipcMain.handle("openSampleWindow", (event) => {
        const subWindow = new BrowserWindow({
            parent: mainWindow,
            webPreferences: {
                preload: path.resolve(__dirname, "preload.js"),
            },
        });
        subWindow.loadFile("dist/MapEditorIndex.html");
        //window.open("./MapEditorIndex.html", "", "width=1000,height=600");
        
        subWindow.on("move", function () {
            console.log("move sub");
            // Do move event action
        });

    });
});

app.once("window-all-closed", () => app.quit());
