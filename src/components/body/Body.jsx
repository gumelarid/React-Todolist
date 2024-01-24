import React, { useState } from "react";
import Item from "../item/Item";

function Body() {
  const [Character, setCharacter] = useState(50);
  const [Title, setTitle] = useState("");
  const [Activity, setActivity] = useState("");
  const [Todo, setTodo] = useState([]);
  const [Archive, setArchive] = useState([]);

  // check title if length > 50
  function checkLengthTitle(e) {
    let Title = e.target.value;

    let checkLength = 50 - Title.length;

    if (checkLength == 0) {
      return alert("Ops Title harus kurang dari 50 karacter");
    }
    setTitle(Title);
    setCharacter(checkLength);
  }

  function formateDate() {
    // Array untuk nama hari dalam bahasa Indonesia
    const days = [
      "Minggu",
      "Senin",
      "Selasa",
      "Rabu",
      "Kamis",
      "Jumat",
      "Sabtu",
    ];

    // Objek untuk mendapatkan informasi tanggal saat ini
    const currentDate = new Date();

    // Mendapatkan nama hari dengan menggunakan indeks dari array 'days'
    const dayName = days[currentDate.getDay()];

    // Mendapatkan tanggal, bulan, dan tahun
    const day = currentDate.getDate();
    const month = currentDate.toLocaleString("id-ID", { month: "long" });
    const year = currentDate.getFullYear();

    // Membuat string dengan format yang diinginkan
    const formattedDate = `${dayName}, ${day} ${month} ${year}`;

    return formattedDate;
  }

  // save activity
  function handleSubmit(e) {
    e.preventDefault();

    if (Activity.length == 0 || Title.length == 0) {
      return alert("Ops silakan isi terlebih dahulu");
    }

    const data = {
      Id: Date.now(),
      Title,
      Activity,
      DateTime: formateDate(),
      archived: false,
    };

    setTodo([...Todo, data]);

    setTitle("");
    setActivity("");
    setCharacter(50);
    return alert("Activity berhasil disimpan");
  }

  return (
    <div className="note-app__body">
      <div className="note-input">
        <h2>Buat catatan</h2>
        <p className="note-input__title__char-limit">
          Sisa karakter: {Character}
        </p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="note-input__title"
            placeholder="Ini adalah judul ..."
            value={Title}
            onChange={checkLengthTitle.bind((e) => e)}
          />
          <textarea
            className="note-input__body"
            type="text"
            placeholder="Tuliskan catatanmu di sini ..."
            value={Activity}
            onChange={(e) => setActivity(e.target.value)}
          ></textarea>
          <button type="submit">Buat</button>
        </form>
      </div>
      <h2>Catatan Active</h2>
      {Todo.length !== 0 ? (
        <div className="notes-list">
          {Todo.map((e) => {
            return (
              <Item
                key={e.Id}
                Id={e.Id}
                Title={e.Title}
                Activity={e.Activity}
                DateTime={e.DateTime}
              />
            );
          })}
        </div>
      ) : (
        <p className="notes-list__empty-message">Tidak ada catatan</p>
      )}

      <h2>Archive</h2>
      {Archive.length !== 0 ? (
        <div className="notes-list">
          {Archive.map((e) => {
            return (
              <Item
                key={e.Id}
                Id={e.Id}
                Title={e.Title}
                Activity={e.Activity}
                DateTime={e.DateTime}
              />
            );
          })}
        </div>
      ) : (
        <p className="notes-list__empty-message">Tidak ada catatan</p>
      )}
    </div>
  );
}

export default Body;
