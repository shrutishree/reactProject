import React, { useState } from "react";
import Editable from "react-editable-title";
import './AboutUs.css';

const Showcase = () => {
  const dummyText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In placerat vehicula tristique.";
  const [text, setText] = useState(dummyText);

  const handleTextUpdate = current => {
    setText(current);
  };

  return (
    <React.Fragment>
      <div className="editable">
          <Editable
            text={text}
            saveOnBlur={false}
            editButton
            editControlButtons
            cb={handleTextUpdate}
          />
      </div>
    </React.Fragment>
  );
};

export default Showcase;

