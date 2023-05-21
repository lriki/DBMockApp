import React from "react";
import { IconDefinition, faCalendar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, ListGroup } from "react-bootstrap";
const { DRB } = window;


interface MenuItem {
    id: string;
    icon: IconDefinition;
    title: string;
    content: React.ReactElement;
}

const menuItems: MenuItem[] = [
    {
        id: "map",
        icon: faCalendar,
        title: "マップ",
        content: <ListGroup>
                    <ListGroup.Item action onClick={() => {
                        DRB.openSampleWindow();
                    }}>0001: スタートマップ</ListGroup.Item>
                    <ListGroup.Item action onClick={() => {
                        DRB.openSampleWindow();
                    }}>0002: 最初の村</ListGroup.Item>
                    <ListGroup.Item action>0003: ダンジョンA</ListGroup.Item>
                    <ListGroup.Item action>0004: 街B</ListGroup.Item>
                    <ListGroup.Item action>0005: ダンジョンX</ListGroup.Item>
                    <ListGroup.Item action>0006: イベント用</ListGroup.Item>
                </ListGroup>,
    },
    {
        id: "map",
        icon: faCalendar,
        title: "プレハブ",
        content: <div>test</div>,
    },
    {
        id: "map",
        icon: faCalendar,
        title: "タイルセット",
        content: <div>test</div>,
    },
    {
        id: "map",
        icon: faCalendar,
        title: "アクター",
        content: <ListGroup>
                    <ListGroup.Item action>0001: リード</ListGroup.Item>
                    <ListGroup.Item action>0002: プリシア</ListGroup.Item>
                    <ListGroup.Item action>0003: ゲイル</ListGroup.Item>
                    <ListGroup.Item action>0004: ミシェル</ListGroup.Item>
                    <ListGroup.Item action>0005: アルベール</ListGroup.Item>
                    <ListGroup.Item action>0006: ケイシー</ListGroup.Item>
                    <ListGroup.Item action>0007: エリオット</ListGroup.Item>
                    <ListGroup.Item action>0008: ローザ</ListGroup.Item>
                </ListGroup>,
    },
    {
        id: "map",
        icon: faCalendar,
        title: "クラス",
        content: <div>test</div>,
    },
    {
        id: "map",
        icon: faCalendar,
        title: "スキル",
        content: <div>test</div>,
    },
    {
        id: "map",
        icon: faCalendar,
        title: "アイテム",
        content: <div>test</div>,
    },
    {
        id: "map",
        icon: faCalendar,
        title: "武器",
        content: <div>test</div>,
    },
    {
        id: "map",
        icon: faCalendar,
        title: "防具",
        content: <div>test</div>,
    },
    {
        id: "map",
        icon: faCalendar,
        title: "敵キャラ",
        content: <div>test</div>,
    },
    {
        id: "map",
        icon: faCalendar,
        title: "敵グループ",
        content: <div>test</div>,
    },
    {
        id: "map",
        icon: faCalendar,
        title: "ステート",
        content: <div>test</div>,
    },
    {
        id: "map",
        icon: faCalendar,
        title: "アニメーション",
        content: <div>test</div>,
    },
    {
        id: "map",
        icon: faCalendar,
        title: "システム",
        content: <div>test</div>,
    },
];

export interface EntranceMenuViewProps {

};

export interface EntranceMenuViewState {
    count: number;
    currentMenu: MenuItem;
};

export class EntranceMenuView extends React.Component<EntranceMenuViewProps, EntranceMenuViewState> {



    constructor(props: EntranceMenuViewProps) {
        super(props);
        this.state = {
            count: 0,
            currentMenu: menuItems[0],
        };
    }

    override render() {
        return (
            <div style={{
                display: "flex",
                margin: 4,
            }}>
                <div style={{
                    display: "flex",
                    flexWrap: "wrap",
                    }}>
                    {menuItems.map((item) => {
                        const v = item == this.state.currentMenu ? "primary" : "outline-primary";
                        return (
                            <Button style={{minWidth: 140, maxWidth: 120, margin: 4, display: "flex"}} variant={v} onClick={() => {
                                this.setState({ currentMenu: item });
                                // DRB.openSampleWindow().then((result) => {
                                //     //alert(result);
                                // });
                                //window.open("./MapEditorIndex.html", "", "width=1000,height=600");
                                // ipcRenderer.invoke("callSample", "test")
                                // .then((result) => {
                                //   alert(result);
                                // });
                            }}>
                                
                                <FontAwesomeIcon icon={item.icon} width={20} height={20} />
                                <div style={{marginLeft: 4}}>{item.title}</div>
                            </Button>
                            // <div
                            //     key={item.id}
                            //     style={{
                            //         minWidth: 50,
                            //         minHeight: 50,
                            //         border: "solid 1px black",
                            //         margin: 10,
                            //     }}
                            // >
                            //     <FontAwesomeIcon icon={faCalendar} width={30} height={30} />
                            //     {item.title}
                            // </div>
                        );
                    })}
                </div>
                
                <div style={{minWidth: 200}}>
                    {this.state.currentMenu.content}
                </div>
            </div>
        );
    }
}
