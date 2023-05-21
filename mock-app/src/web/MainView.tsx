import { Button } from 'react-bootstrap';
import DockLayout, { LayoutData, TabGroup } from "rc-dock";
import React, { CSSProperties } from "react";
import styled from 'styled-components';
import Split from "react-split";
import img1 from "./assets/img1.png";

const { DRB } = window;


const styleNoteBox: CSSProperties = {
    border: "1px solid #999999",
    backgroundColor: "#ffddd2",
    textAlign: "left",
    borderRadius: 3,
    margin: 2,

}
// const NoteBox = styled.div`
//     color: red;
//     boarder: 1px solid #999999;
//     background-color: #ffcdd2;
// `;


export interface MainViewProps {

};

export interface MainViewState {
    count: number;
    //rootWidth: number;
    //rootHeight: number;
    rootRect: DOMRect
};

export class MainView extends React.Component<MainViewProps, MainViewState> {
    private _rootRef: React.RefObject<HTMLDivElement>;
    private _resizeObserver: ResizeObserver | undefined;

    constructor(props: MainViewProps) {
        super(props);
        this.state = {
            count: 0,
            rootRect: new DOMRect(10, 10, 100, 100),
        };
        this._rootRef = React.createRef();
    }

    override componentDidMount(): void {
        this._resizeObserver = new ResizeObserver((entries) => {
            entries.forEach((el) => {
                const rect = el.target.getBoundingClientRect();

                
                this.setState({
                    rootRect: rect,
                });
            });
        });
        this._resizeObserver.observe(this._rootRef.current!);

        const aa = document.querySelector("#head");
    }

    override componentWillUnmount(): void {
        if (this._resizeObserver) {
            this._resizeObserver.disconnect();
            this._resizeObserver = undefined;
        }
    }

    override componentDidUpdate(prevProps: any) {
        // if (this._rootRef.current) {
        //     const rect = this._rootRef.current.getBoundingClientRect();
        //     console.log("MainView componentDidUpdate", rect);
        //     //DRB.setWindowRect(rect.left, rect.top, rect.width, rect.height);
        // }
    }

    override render() {
        return (
            <div ref={this._rootRef} className="container" style={{
                }}>
                <DockLayout
                    defaultLayout={defaultLayout}
                    groups={groups}
                    style={{
                        position: "absolute",
                        left: this.state.rootRect.left,
                        top: this.state.rootRect.top,
                        right: 10,//window.innerWidth - this.state.rootRect.right,
                        bottom: 10,//window.innerHeight - this.state.rootRect.bottom,
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

let groups: any = {
    "allowWindow": {
        floatable: false,
        newWindow: true,
        maximizable: false,
    },
    "centerLocked": {
        floatable: "singleTab",
        disableDock: true,
        maximizable: false,
        tabLocked: true,
        animated: false,
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
                            { ...tab, id: 't1', title: 'Tab 1', content: <div  style={styleNoteBox}>テストプレイ中ゲームのパーティ情報とか</div> },
                            { ...tab, id: 't2', title: 'Tab 2' }
                        ],
                    },
                    {
                        tabs: [{
                            ...tab, id: 't3', title: 'Min Size', content: (
                                <div style={styleNoteBox}>
                                    <p>ウィンドウの状態とか(メニューカスタマイズのデバッグ用)</p>

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
                                <div style={styleNoteBox}>テストプレイ中の画面です。</div>
                                <img src={img1} alt="Image" width={640} height={480} />;
                            </div>
                        ),
                        closable: false,
                    },
                ],
                group: "centerLocked",
                panelLock: { panelStyle: 'main' },
            },
            {
                size: 200,
                tabs: [{ ...tab, id: 't8', title: 'Tab 8', content: <div style={styleNoteBox}>テストプレイ中ゲームの変数リストとか</div> }],
            },
        ]
    },
    floatbox: {
        mode: 'float',
        children: [
            // {
            //     tabs: [
            //         { ...tab, id: 't9', title: 'Tab 9', content: <div>Float</div> },
            //         { ...tab, id: 't10', title: 'Tab 10' }
            //     ],
            //     x: 300, y: 150, w: 400, h: 300
            // },

            // {
            //     tabs: [floatTab],
            //     x: 60, y: 60, w: 320, h: 300
            // }
        ]
    }
};
