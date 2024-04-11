import React from "react";
import styles from "./SearchForm.module.scss";
import SearchIcon from "../../assets/icons/search-icon.svg";

const SearchForm = () => {
  return (
    <>
      <form className={styles["search-form"]}>
        <input
          type="text"
          placeholder="Search furniture"
          className={styles["search-form__input"]}
          autoComplete={false}
        />
        <button className={styles["search-form__btn"]}>
          <img src={SearchIcon} />
        </button>
      </form>
    </>
  );
};

export default SearchForm;
