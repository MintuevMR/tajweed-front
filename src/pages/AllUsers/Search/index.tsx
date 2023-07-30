import React, { useState } from 'react';
import styles from './Search.module.scss';

function Search({ onSearch }) {
  const [searchValue, setSearchValue] = useState('');

  const onChangeSearchInput = (e) => {
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
