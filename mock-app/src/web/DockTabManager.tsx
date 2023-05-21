import React from "react";

// Bootstrap の Tab だと draggable が効かないので、react-tabs を使う
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { MainView } from "./MainView";
import { DockExampleView } from "./DockExampleView";
const { DRB } = window;

export interface DockTabManagerProps {
    items: TabItem[];
};

export interface DockTabManagerState {
    items: TabItem[];
    dragHovering: boolean;
};

export class DockTabManager extends React.Component<DockTabManagerProps, DockTabManagerState> {
    constructor(props: DockTabManagerProps) {
        super(props);
        this.state = {
            items: [...props.items],
            dragHovering: false,
        };

    }

    private makeTab(tabItem: TabItem) {
        return (
            <Tab
                draggable
                onDragStart={(event) => {
                    //console.log("onDragStart", event);
                    const data: DockTabTransferData = {
                        title: tabItem.title,
                        type: "test",
                    };
                    event.dataTransfer.setData("application/drb-view", JSON.stringify(data));
                    event.dataTransfer.effectAllowed = "move";
                    event.target
                }}
                onDrag={(event) => {
                    //console.log("onDrag", event);
                }}
                // onDragExit={(event) => {
                //     console.log("onDragExit", event);
                // }}
                onDrop={(event) => {
                    console.log("[src] onDrop", event);
                }}
                
                onDragCapture={(event) => {
                }}
                onDragEnd={(event) => {
                    event.preventDefault();
                    console.log("onDragEnd", event);

                    // https://stackoverflow.com/questions/33630771/html5-native-drag-n-drop-detect-cancellation
                    if (event.dataTransfer.dropEffect === "none") {
                        if (event.screenX < window.screenX ||
                            event.screenY < window.screenY ||
                            event.screenX > window.screenX + window.outerWidth ||
                            event.screenY > window.screenY + window.outerHeight)
                        {
                            DRB.openSampleWindow("test", event.screenX, event.screenY);
                            this.setState({
                                items: this.state.items.filter((item) => item !== tabItem),
                            });
                            // this.setState((state) => {
                            //     return {
                            //         items: state.items.filter((item) => item !== tabItem),
                            //     };
                            // }
                        }
                    }
                    else if (event.dataTransfer.dropEffect === "move") {

                        const newItems = this.state.items.filter((item) => item !== tabItem);
                        if (newItems.length <= 0) {
                            window.close();
                        }
                        else {
                            this.setState({
                                items: newItems,
                            });
                        }
                    }
                }}
            >
                {tabItem.title}
            </Tab>
        );
    }
    private makeTabPanel(tabItem: TabItem) {
        return (
            <TabPanel>
                {tabItem.content}
            </TabPanel>
        );
    }

    override render() {
        return (
            <Tabs>
                <TabList style={this.state.dragHovering ? hoveringTabListStyle : defaultTabListStyle}
                
                    onDragEnter={(event) => {
                        //console.log("TabList onDragEnter", event);
                        event.preventDefault();
                    }}
                    onDragOver={(event) => {
                        event.dataTransfer.effectAllowed = "move";
                        event.preventDefault();

                        if (!this.state.dragHovering) {
                            this.setState({
                                dragHovering: true,
                            });
                        }
                    }}
                    onDragLeave={(event) => {
                        this.setState({
                            dragHovering: false,
                        });
                    }}
                    onDrop={(event) => {
                        
                        this.setState({
                            dragHovering: false,
                        });

                        console.log("TabList onDrop", event);
                        const text = event.dataTransfer.getData("application/drb-view");
                        const data = JSON.parse(text) as DockTabTransferData;


                        //alert(data);


                        const newTabItem: TabItem = {
                            title: data.title,
                            content: <h1>新しいタブです</h1>,
                        };
                        this.setState({
                            items: this.state.items.concat([newTabItem]),
                        });

                    }}>
                    {this.state.items.map((item) => this.makeTab(item))}
                    {/* <span>aaa</span> */}
                </TabList>
                {this.state.items.map((item) => this.makeTabPanel(item))}
            </Tabs>
        );
    }
}

const defaultTabListStyle : React.CSSProperties = {
    background: "transparent",
};
const hoveringTabListStyle : React.CSSProperties = {
    background: "#80d8ff",
};

export interface TabItem {
    title: string;
    content: JSX.Element;
}

// class TabItem {
//     public readonly title: string;
//     public readonly content: JSX.Element;
//     constructor(title: string, content: JSX.Element) {
//         this.title = title;
//         this.content = content;
//     }
// }

interface DockTabTransferData {
    title: string;
    type: string;
}
