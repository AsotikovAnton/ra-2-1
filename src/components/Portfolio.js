import React, { useState } from 'react';
import PortfolioModel from '../models/PortfolioModel';
import ProjectList from './ProjectList';
import Toolbar from './Toolbar';

export default function Portfolio() {
  const initPortfolioModel = new PortfolioModel();
  const [items, setItems] = useState(
    initPortfolioModel.selected,
  );
  
  const prof = initPortfolioModel.projects.filter(o => {
    if (items === 'All') {
      return o.category;
    }
    return o.category === items;
  });

  return (
    <div>
      <Toolbar
        filters={initPortfolioModel.filters}
        selected={items}
        onSelectFilter={(filter) => {
          console.log(filter);
          initPortfolioModel.selected = filter;
          setItems(filter);
        }}
      />
      <ProjectList projects={prof}/>
    </div>
  );
}
