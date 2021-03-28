import React, { useState, useRef, useEffect } from "react";

function DragNDrop({ data }) {
  const [list, setList] = useState(data);
  const [dragging, setDragging] = useState(false);

  useEffect(() => {
    setList(data);
  }, [data]);

  const dragItem = useRef(null);
  const dragItemNode = useRef(null);

  const handletDragStart = (e, item) => {
    // console.log("Starting to drag", item);

    dragItem.current = item;
    dragItemNode.current = e.target;
    dragItemNode.current.addEventListener("dragend", handleDragEnd);

    setTimeout(() => {
      setDragging(true);
    }, 0);
  };

  const handleDragEnter = (e, targetItem) => {
    // console.log("Entering a drag target", targetItem);

    if (dragItemNode.current !== e.target) {
      // console.log("Target is NOT the same as dragged item");

      setList((oldList) => {
        const newList = oldList; // JSON.parse(JSON.stringify(oldList));

        newList[targetItem.grpI].items.splice(
          targetItem.itemI,
          0,
          newList[dragItem.current.grpI].items.splice(
            dragItem.current.itemI,
            1
          )[0]
        );

        dragItem.current = targetItem;
        localStorage.setItem("dndList", JSON.stringify(newList));
        return newList;
      });
    }
  };

  const handleDragEnd = () => {
    // console.log("Ending drag...");

    setDragging(false);

    dragItemNode.current.removeEventListener("dragend", handleDragEnd);
    dragItemNode.current = null;
    dragItem.current = null;
  };

  const getStyles = (item) => {
    if (
      dragItem.current.grpI === item.grpI &&
      dragItem.current.itemI === item.itemI
    ) {
      return "dnd-item current";
    }
    return "dnd-item";
  };

  if (list) {
    return (
      <div className="drag-n-drop">
        {list.map((grp, grpI) => (
          <div
            key={grp.title}
            onDragEnter={
              dragging && !grp.items.length
                ? (e) => handleDragEnter(e, { grpI, itemI: 0 })
                : null
            }
            className="dnd-group"
          >
            <div className="group-title">{grp.title}</div>

            {grp.items.map((item, itemI) => (
              <div
                draggable
                key={item}
                onDragStart={(e) => handletDragStart(e, { grpI, itemI })}
                onDragEnter={
                  dragging
                    ? (e) => {
                        handleDragEnter(e, { grpI, itemI });
                      }
                    : null
                }
                className={dragging ? getStyles({ grpI, itemI }) : "dnd-item"}
              >
                {item}
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }

  return null;
}

export default DragNDrop;
