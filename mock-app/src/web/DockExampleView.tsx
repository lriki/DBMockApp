import { Button } from 'react-bootstrap';
import DockLayout, { LayoutData } from "rc-dock";
import React from "react";
const { DRB } = window;
import Split from 'react-split'

export interface DockExampleViewProps {

};

export interface DockExampleViewStatus {
    count: number;
};

export class DockExampleView extends React.Component<DockExampleViewProps, DockExampleViewStatus> {
    constructor(props: DockExampleViewProps) {
        super(props);
        this.state = {
            count: 0,
        };
    }

    override render() {
        return (
            <div className="container">
                <h1>{this.state.count}</h1>
                <DockLayout
                    defaultLayout={defaultLayout}
                    groups={groups}
                    style={{
                        position: "absolute",
                        left: 10,
                        top: 50,
                        right: 10,
                        bottom: 10,
                    }}
                />
            </div>
        );
    }
};


let tab = {
    content: <div>Tab Content</div>,
    closable: true,
};

let groups = {
    allowWindow: {
        floatable: false,
        newWindow: true,
        maximizable: false,
    }
};

let floatTab = {
    id: 'float',
    title: 'New Window',
    content: (
        <div>
            <Split
                style={{display : "flex"}}
                sizes={[25, 75]}
                minSize={100}
                expandToMin={false}
                gutterSize={10}
                gutterAlign="center"
                snapOffset={30}
                dragInterval={1}
                direction="horizontal"
                cursor="col-resize"
            >
                <p style={{ backgroundColor: '#c1f2de' }}>Right click on the max button111 ⇗</p>
                <p style={{ backgroundColor: '#f8d9f8' }}>Right click on the max button222 ⇗</p>
            </Split>
        </div>
    ),
    group: 'allowWindow'
};

const defaultLayout: LayoutData = {
    dockbox: {
        mode: 'horizontal',
        children: [
            {
                mode: 'vertical',
                size: 200,
                children: [
                    {
                        tabs: [
                            { ...tab, id: 't1', title: 'Tab 1' },
                            { ...tab, id: 't2', title: 'Tab 2' }
                        ],
                    },
                    {
                        tabs: [{
                            ...tab, id: 't3', title: 'Min Size', content: (
                                <div>
                                    <p>This tab has a minimal size</p>
                                    150 x 150 px

                                    <Button variant="primary" size="sm" onClick={() => {
                                        DRB.openSampleWindow().then((result) => {
                                            //alert(result);
                                        });
                                        //window.open("./MapEditorIndex.html", "", "width=1000,height=600");
                                        // ipcRenderer.invoke("callSample", "test")
                                        // .then((result) => {
                                        //   alert(result);
                                        // });
                                    }}>ウィンドウを開く</Button>
                                </div>
                            ), minWidth: 150, minHeight: 150,
                        }, { ...tab, id: 't4', title: 'Tab 4' }],
                    },
                ]
            },
            {
                size: 1000,
                tabs: [
                    {
                        ...tab, id: 't5', title: 'basic demo', content: (
                            <div>
                                This panel won't be removed from layout even when last Tab is closed
                            </div>
                        ),
                    },
                ],
                panelLock: { panelStyle: 'main' },
            },
            {
                size: 200,
                tabs: [{ ...tab, id: 't8', title: 'Tab 8' }],
            },
        ]
    },
    floatbox: {
        mode: 'float',
        children: [
            {
                tabs: [
                    { ...tab, id: 't9', title: 'Tab 9', content: <div>Float</div> },
                    { ...tab, id: 't10', title: 'Tab 10' }
                ],
                x: 300, y: 150, w: 400, h: 300
            },

            {
                tabs: [floatTab],
                x: 60, y: 60, w: 320, h: 300
            }
        ]
    }
};
