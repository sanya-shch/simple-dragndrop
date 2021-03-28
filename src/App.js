import React from "react";

import "./App.css";

const defaultData = [
  { title: "group 1", items: ["0", "1", "2", "3"] },
  { title: "group 2", items: ["4", "5", "6"] },
  { title: "group 3", items: ["7", "8"] },
  { title: "group 3", items: ["9"] },
];

function App() {
  return (
    <div className="App">
      <div className="drag-n-drop">
        {defaultData.map((grp, grpI) => (
          <div key={grp.title} className="dnd-group">
            {grp.items.map((item, itemI) => (
              <div draggable key={item} className="dnd-item">
                {item}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* <div className="drag-n-drop">
        <div className="dnd-group">
          <div className="group-title">Group 1</div>
          <div className="dnd-item">
            <div>
              <p>ITEM 1</p>
            </div>
          </div>
          <div className="dnd-item">
            <div>
              <p>ITEM 2</p>
            </div>
          </div>
          <div className="dnd-item">
            <div>
              <p>ITEM 3</p>
            </div>
          </div>
        </div>
        <div className="dnd-group">
          <div className="group-title">Group 1</div>
          <div className="dnd-item">
            <div>
              <p>ITEM 1</p>
            </div>
          </div>
          <div className="dnd-item">
            <div>
              <p>ITEM 2</p>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default App;
