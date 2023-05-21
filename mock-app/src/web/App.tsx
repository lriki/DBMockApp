import { useEffect, useRef, useState } from "react";
import "./App.css";
import DockLayout, { LayoutData } from 'rc-dock'
import "rc-dock/dist/rc-dock.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Nav, Tab, Tabs } from 'react-bootstrap';
import { MainView } from "./MainView";
import { DockExampleView } from "./DockExampleView";
import Split from "react-split";
import { EntranceMenuView } from "./EntranceMenuView";
import { DockTabManager, TabItem } from "./DockTabManager";
const { DRB } = window;

const tabItems: TabItem[] = [
    {
        title: "テストプレイ",
        content: <MainView />,
    },
    {
        title: "About",
        content: <h1>Aboutです</h1>,
    },
    {
        title: "DockExample",
        content: <DockExampleView />,
    },
];
    

export const App = () => {
    const [count, setCount] = useState(0);
    const ref1 = useRef<HTMLDivElement>(null);
    const ref2 = useRef<HTMLDivElement>(null);

    // useEffect(() => {
    //     if (!ref2.current) return;
    //     const {width, height} = ref2.current.getBoundingClientRect();
    //       setTimeout(_ => setDims({width, height}));
    // });

    return (
        <div>
            
            <Split
                style={{display : "flex"}}
                sizes={[30, 70]}
                minSize={100}
                expandToMin={false}
                gutterSize={10}
                gutterAlign="center"
                snapOffset={30}
                dragInterval={1}
                direction="horizontal"
                cursor="col-resize"
                onDrag={(sizes: number[]) => {
                    console.log("onDrag", sizes);
                }}
            >
                <div ref={ref1} >
                    <EntranceMenuView />
                </div>

                <div ref={ref2}
                        style={{display : "block"}} >
                    <DockTabManager items={tabItems} />

                                            
                    
                </div>
            </Split>
        </div>
    );
};

