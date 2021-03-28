import React, { useEffect, useState } from "react";

import DragNDrop from "./components/DragNDrop";

import "./App.css";

const defaultData = [
  { title: "group 1", items: ["0", "1", "2", "3"] },
  { title: "group 2", items: ["4", "5", "6"] },
  { title: "group 3", items: ["7", "8"] },
  { title: "group 4", items: ["9"] },
];

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (localStorage.getItem("dndList")) {
      // console.log(localStorage.getItem("dndList"));
      setData(JSON.parse(localStorage.getItem("dndList")));
    } else {
      setData(defaultData);
    }
  }, [setData]);

  return (
    <div className="App">
      <DragNDrop data={data} />

      {/* <div className="drag-n-drop">
        {defaultData.map((grp, grpI) => (
          <div key={grp.title} className="dnd-group">
            {grp.items.map((item, itemI) => (
              <div draggable key={item} className="dnd-item">
                {item}
              </div>
            ))}
          </div>
        ))}
      </div> */}

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
