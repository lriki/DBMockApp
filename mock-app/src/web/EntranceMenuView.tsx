import React from "react";
import { IconDefinition, faCalendar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "react-bootstrap";
const { DRB } = window;

export interface EntranceMenuViewProps {

};

export interface EntranceMenuViewStatus {
    count: number;
};

interface MenuItem {
    id: string;
    icon: IconDefinition;
    title: string;
}

const menuItems: MenuItem[] = [
    {
        id: "map",
        icon: faCalendar,
        title: "マップ",
    },
    {
        id: "map",
        icon: faCalendar,
        title: "プレハブ",
    },
    {
        id: "map",
        icon: faCalendar,
        title: "タイルセット",
    },
    {
        id: "map",
        icon: faCalendar,
        title: "アクター",
    },
    {
        id: "map",
        icon: faCalendar,
        title: "クラス",
    },
    {
        id: "map",
        icon: faCalendar,
        title: "スキル",
    },
    {
        id: "map",
        icon: faCalendar,
        title: "アイテム",
    },
    {
        id: "map",
        icon: faCalendar,
        title: "武器",
    },
    {
        id: "map",
        icon: faCalendar,
        title: "防具",
    },
    {
        id: "map",
        icon: faCalendar,
        title: "敵キャラ",
    },
    {
        id: "map",
        icon: faCalendar,
        title: "敵グループ",
    },
    {
        id: "map",
        icon: faCalendar,
        title: "ステート",
    },
    {
        id: "map",
        icon: faCalendar,
        title: "アニメーション",
    },
    {
        id: "map",
        icon: faCalendar,
        title: "システム",
    },
];

export class EntranceMenuView extends React.Component<EntranceMenuViewProps, EntranceMenuViewStatus> {
    constructor(props: EntranceMenuViewProps) {
        super(props);
        this.state = {
            count: 0,
        };
    }

    override render() {
        return (
            <div style={{
                display: "flex",
                flexWrap: "wrap",
                }}>
                {menuItems.map((item) => {
                    return (
                        <Button style={{minWidth: 80, maxWidth: 80, minHeight: 80, margin: 4}} onClick={() => {
                            DRB.openSampleWindow().then((result) => {
                                //alert(result);
                            });
                            //window.open("./MapEditorIndex.html", "", "width=1000,height=600");
                            // ipcRenderer.invoke("callSample", "test")
                            // .then((result) => {
                            //   alert(result);
                            // });
                        }}>
                            <FontAwesomeIcon icon={item.icon} width={30} height={30} />
                            <div>{item.title}</div>
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
        );
    }
}
