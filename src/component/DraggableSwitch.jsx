import { useEffect, useState } from "react";

function DraggableSwitch() {
     const theme = localStorage.getItem("theme");
     
  const [enabled, setEnabled] = useState(false);
  const [dragging, setDragging] = useState(false);
  const [position, setPosition] = useState(0); // knob position

  useEffect(()=>{
    if(theme === "light" && !enabled && !dragging){
        setEnabled(true)
        setDragging(true)
    }
  },[])
 


  const handleMouseDown = () => {
    setDragging(true);
  };

  const handleMouseUp = () => {
    if (dragging) {
      setEnabled(position > 20); // threshold: 20px
      setPosition(0);
    }
    setDragging(false);
    if(enabled){
        localStorage.setItem("theme", "dark");
        window.location.reload()

    }else{
        localStorage.setItem("theme", "light");
          window.location.reload()
    }
  };

  const handleMouseMove = (e) => {
    if (dragging) {
      let newPos = Math.min(Math.max(e.movementX + position, 0), 26);
      setPosition(newPos);
      
    }
  };

  return (
    <div
      className="switch"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <div
        className={`track ${enabled ? "on" : "off"}`}
        onClick={() => setEnabled(!enabled)}
      >
        <div
          className="knob"
          style={{ transform: `translateX(${enabled ? 19: position}px)` }}
          onMouseDown={handleMouseDown}
        />
      </div>

      <style>
        {`
          .switch {
            display: inline-block;
            user-select: none;
            margin-left:10px;
          }

          .track {
            width: 40px;
            height: 20px;
            background: #ccc;
            border-radius: 30px;
            position: relative;
            cursor: pointer;
            transition: background 0.3s;
          }

          .track.on {
            background: #4caf50;
          }

          .knob {
            width: 18px;
            height: 18px;
            background: white;
            border-radius: 50%;
            position: absolute;
            top: 1px;
            left: 2px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.2);
            transition: transform 0.3s;
          }
        `}
      </style>
    </div>
  );
}

export default DraggableSwitch;
