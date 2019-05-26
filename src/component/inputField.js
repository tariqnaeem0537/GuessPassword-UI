import React from "react";
import ContentEditable from 'react-contenteditable';
//import sanitizeHtml from "sanitize-html";
const inputField = (props) => {
    return (
        <div className="inl-blck">     
            <ContentEditable
              innerRef={React.createRef()}
              html={props.value} // innerHTML of the editable div
              disabled={false}       // use true to disable editing
              onChange={event => props.handleChange(props.name, event)} // handle innerHTML change
              name={props.name}
              className={'inputContentEditable'}
            />
        </div>
    )
  }

  export default inputField;
