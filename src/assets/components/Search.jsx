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
