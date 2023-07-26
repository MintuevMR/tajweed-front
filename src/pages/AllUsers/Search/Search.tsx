import React, { useState } from 'react';
import styles from './Search.module.css';

function Search({ onSearch }) {
  const [searchValue, setSearchValue] = useState('');

  const onChangeSearchInput = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    onSearch(value); 
  };

  return (
    <form className={styles.form}>
      <input
        onChange={onChangeSearchInput}
        className={styles.input}
        type="text"
        value={searchValue}
        placeholder="Введите имя студента"
      />
    </form>
  );
}

export default Search;
