import { IpcRendererEvent } from "electron";

declare global {
    interface Window {
        DRB: Sandbox;
    }
}

type IpcEventListener = (...args: any) => void;
type IpcEventListenerRemover = () => void;

export interface Sandbox {
    callSample: (param1: string) => Promise<string>;
    openSampleWindow: () => Promise<void>;
}
