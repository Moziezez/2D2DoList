'use client';
import React, { useState } from 'react';
import ToDoListe from '../ToDoListe/ToDoListe';
import XyPlot from '../XyPlot/XyPlot';

interface Points {
  names: string[];
  x: number[];
  y: number[];
}

const ToDoTabs = () => {
  const [points, setPoints] = useState<Points>({
    names: ["putzen", "waschen", "müllraus", "bewerbung", "krankenkasse"],
    x: [-1, 2, 3, -4, 5],
    y: [5, -5, 7, -2, 5],
  });

  // Handle input change
  const handleChange = (index: number, field: keyof Points, value: string) => {
    setPoints((prevPoints) => ({
      ...prevPoints,
      [field]: prevPoints[field].map((val, i) => (i === index ? (field === "names" ? value : Number(value)) : val)),
    }));
  };

  const addNewTodo = (name: string) => {
    setPoints((prevPoints) => ({
      names: [...prevPoints.names, name],
      x: [...prevPoints.x, 0],
      y: [...prevPoints.y, 0],
    }));
  };

  return (
    <div className="tabs tabs-lift w-2xl my-20 m-auto">
      <input type="radio" name="my_tabs_3" className="tab" aria-label="Erledigt" />
      <div className="tab-content bg-base-100 border-base-300 p-6">Tab content 1</div>

      <input type="radio" name="my_tabs_3" className="tab" aria-label="2D2Do" defaultChecked />
      <div className="tab-content bg-base-100 border-base-300 p-6">
        <XyPlot points={points} />
      </div>

      <input type="radio" name="my_tabs_3" className="tab" aria-label="Liste" />
      <div className="tab-content bg-base-100 border-base-300 p-6">
        <ToDoListe points={points} handleChange={handleChange} addNewToDo={addNewTodo} />
      </div>
    </div>
  );
};

export default ToDoTabs;