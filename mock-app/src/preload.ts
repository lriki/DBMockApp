/*
 * https://zenn.dev/sprout2000/books/6f6a0bf2fd301c/viewer/13344
 */
import { contextBridge, ipcRenderer, IpcRendererEvent } from "electron";

type IpcEventListener = (...args: any[]) => void

contextBridge.exposeInMainWorld("DRB", {
    callSample: async (param1: string): Promise<string> => await ipcRenderer.invoke("callSample", param1),
    openSampleWindow: async (type?: string | undefined, screenX?: number | undefined, screenY?: number | undefined): Promise<void> => await ipcRenderer.invoke("openSampleWindow", type, screenX, screenY),
});
