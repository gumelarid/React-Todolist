import React from "react";

function Item(props) {
  return (
    <div className="note-item">
      <div className="note-item__content">
        <h3 className="note-item__title">{props.Title}</h3>
        <p className="note-item__date">{props.DateTime}</p>
        <p className="note-item__body">{props.Activity}</p>
      </div>
      <div className="note-item__action">
        <button className="note-item__delete-button">Delete</button>
        <button className="note-item__archive-button">Arsipkan</button>
      </div>
    </div>
  );
}

// Item.propTypes = {};

export default Item;
