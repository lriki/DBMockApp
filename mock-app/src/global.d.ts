import { IpcRendererEvent } from "electron";
//export {};

declare global {
    interface Window {
        DRB: Sandbox;
    }
    //module '*.png';
}
    
declare module "*.png";

type IpcEventListener = (...args: any) => void;
type IpcEventListenerRemover = () => void;

export interface Sandbox {
    callSample: (param1: string) => Promise<string>;
    openSampleWindow: (type?: string | undefined, screenX?: number | undefined, screenY?: number | undefined) => Promise<void>;
}
