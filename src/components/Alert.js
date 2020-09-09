import React from "react";

function Alert(props) {
  return (
    props.message && (
      <div className={`alert alert-${props.type} alert-dismissible fade show mb-2`} role="alert">
        {props.message}
        <button type="button" className="close" onClick={() => props.onClose()}>
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    )
  );
}

export default Alert;