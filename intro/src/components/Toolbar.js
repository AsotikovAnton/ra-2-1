import React from 'react';

export default function Toolbar(props) {
  const { filters, selected } = props;
  const onSelectFilter = (e) => {
    props.onSelectFilter(e.target.innerText);
  };
console.log(props);
  return (
    <div className="filter">
      {filters.map(o => {
        return <div onClick={onSelectFilter} className={o===selected && "active"}>{o}</div>
      })}
    </div>
  )
}
