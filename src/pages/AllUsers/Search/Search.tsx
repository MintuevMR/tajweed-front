import React, { useState } from 'react';
import styles from './Search.module.css';

function Search({ onSearch }) {
  const [searchValue, setSearchValue] = useState('');

  const onChangeSearchInput = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchValue);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
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
