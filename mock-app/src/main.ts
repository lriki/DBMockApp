import path from "node:path";
import { BrowserWindow, app, ipcMain  } from "electron";

app.whenReady().then(() => {
  const mainWindow = new BrowserWindow({
    webPreferences: {
      preload: path.resolve(__dirname, "preload.js"),
      //webviewTag: true,
      nodeIntegration: true,
    },
  });

  mainWindow.loadFile("dist/index.html");
  // mainWindow.webContents.openDevTools({ mode: "detach" });

  
  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    console.log("setWindowOpenHandler", url);
    return { action: 'allow', overrideBrowserWindowOptions: {
      parent: mainWindow,
    } };
  });

  mainWindow.on('move', function() {
    console.log("move");
    // Do move event action
  });

  ipcMain.handle("callSample", (event, data) => {
    console.log("callSample");
    return(`${data}にゃん`);
  })
});

app.once("window-all-closed", () => app.quit());
