import { ChangeEvent, useState } from "react";
import styles from "./Search.module.scss";

interface SearchProps {
  onSearch: (value: string) => void;
}

function Search({ onSearch }: SearchProps) {
  const [searchValue, setSearchValue] = useState<string>("");

  const onChangeSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);
    onSearch(value);
  };

  return (
    <form className={styles.form}>
      <h2>Все пользователи</h2>
      <input
        onChange={onChangeSearchInput}
        className={styles.input}
        type="text"
        value={searchValue}
        placeholder="Введите фамилию..."
      />
    </form>
  );
}

export default Search;
