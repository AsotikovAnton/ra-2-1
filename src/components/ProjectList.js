import React from 'react';

export default function ProjectList(props) {
  const { projects } = props;
  const projectColumn = [];
  const columns = 3;
  const lengthArr = Math.round(projects.length / columns);
  for (let i = 0; i < columns; i += 1) {
    projectColumn.push(projects.slice(lengthArr * i, lengthArr * (i + 1)));
  }

  console.log(projectColumn);

  return (
    <div className="project-list">
      {projectColumn.map(o => <div className="column">
        {o.map(a => <img src={a.img} alt="1"/>)}
      </div>)}
    </div>
  );
}
