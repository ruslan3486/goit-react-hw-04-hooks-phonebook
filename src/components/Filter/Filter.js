import React from "react";
import PropTypes from "prop-types";
import s from "./Filter.module.css";

function Filter({ value, onChangeFilter }) {
  return (
    <div className={s.container_filter}>
      <p className={s.filter_info}>Find contacts by name</p>
      <input
        className={s.filter_text}
        type="text"
        value={value}
        onChange={(e) => onChangeFilter(e.target.value)}
      />
    </div>
  );
}

export default Filter;
