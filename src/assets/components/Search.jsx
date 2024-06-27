import { useState } from "react";

function Search(props) {
  const [search, setSearch] = useState("");

  const onSearchChange = () => {
    props.onSearchChangee(search);
  };

  const searchKeydown = (e) => {
    if (e.key == "Enter") {
      onSearchChange();
    }
  };

  //componentDidMount
  //jika komponen di mulai, dia akan merender komenpenin ini dulu
  //componenentDidUpdate
  //jika ada kompenen yang berubah, kita akan ngapain
  //componentWillUnmount
  //ketika kompenen di hancurkan
  //kalau di react hook, kita dapat mencapai 3 fungsi dengan 1 hook,-. useeffect

  //array kosong artrinya useeffect akan memantaui perubaha, jika tak ada yan dipantau berarti useefect tidak jalan

  return (
    <>
      <div>
        Cari Artikel :{" "}
        <input
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={searchKeydown}
        />{" "}
        <button onClick={onSearchChange}>Cari</button>
        <small>
          Ditemukan {props.totalPosts} data dengan pencarian kata {search}
        </small>
      </div>
    </>
  );
}

export default Search;
