import path from "node:path";
import { BrowserWindow, app } from "electron";

app.whenReady().then(() => {
  const mainWindow = new BrowserWindow({
    webPreferences: {
      preload: path.resolve(__dirname, "preload.js"),
    },
  });

  mainWindow.loadFile("dist/index.html");
  // mainWindow.webContents.openDevTools({ mode: "detach" });

  
  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    console.log("setWindowOpenHandler", url);
    return { action: 'allow', overrideBrowserWindowOptions: {
      parent: mainWindow,
    } };
  })
});

app.once("window-all-closed", () => app.quit());
