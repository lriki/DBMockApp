import { useState } from "react";
import "./App.css";
import DockLayout, { LayoutData } from 'rc-dock'
import "rc-dock/dist/rc-dock.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

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
      <p>Right click on the max button ⇗</p>
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
              {...tab, id: 't1', title: 'Tab 1'},
              {...tab, id: 't2', title: 'Tab 2'}
            ],
          },
          {
            tabs: [{
              ...tab, id: 't3', title: 'Min Size', content: (
                <div>
                  <p>This tab has a minimal size</p>
                  150 x 150 px
                  <Button variant="primary" size="sm" onClick={() => { 
                    window.open("./MapEditorIndex.html", "", "width=1000,height=600");
                   }}>ウィンドウを開く</Button>
                </div>
              ), minWidth: 150, minHeight: 150,
            }, {...tab, id: 't4', title: 'Tab 4'}],
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
        panelLock: {panelStyle: 'main'},
      },
      {
        size: 200,
        tabs: [{...tab, id: 't8', title: 'Tab 8'}],
      },
    ]
  },
  floatbox: {
    mode: 'float',
    children: [
      {
        tabs: [
          {...tab, id: 't9', title: 'Tab 9', content: <div>Float</div>},
          {...tab, id: 't10', title: 'Tab 10'}
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

export const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={() => setCount((count) => count + 1)}>Count</button>
      <DockLayout
        defaultLayout={defaultLayout}
        groups={groups}
        style={{
          position: "absolute",
          left: 10,
          top: 10,
          right: 10,
          bottom: 10,
        }}
        />
    </div>
  );
};
