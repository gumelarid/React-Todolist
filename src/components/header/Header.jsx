import React from "react";

function Header() {
  return (
    <div className="note-app__header">
      <h1>Note</h1>
      <input
        type="text"
        className=".note-input"
        placeholder="Cari Catatan...."
      />
    </div>
  );
}

export default Header;
