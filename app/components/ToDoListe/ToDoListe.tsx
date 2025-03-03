'use client';
import React from 'react';

interface Points {
    names: string[];
    x: number[];
    y: number[];
}

interface ToDoListeProps {
    points: Points;
    handleChange: (index: number, axis: keyof Points, value: string) => void;
    addNewToDo: (name: string) => void;
}

const ToDoListe: React.FC<ToDoListeProps> = ({ points, handleChange, addNewToDo }) => {
    return (
        <div className="mt-4">
            {points.x.map((_, index) => (
                <div key={index} className="mb-2 flex items-center gap-2">
                    <input
                        type="text"
                        value={points.names[index]}
                        onChange={(e) => handleChange(index, "names", e.target.value)}
                        className="border p-1 w-32"
                    />
                    <input
                        type="number"
                        value={points.x[index]}
                        onChange={(e) => handleChange(index, "x", e.target.value)}
                        className="border p-1 w-16"
                    />
                    <input
                        type="number"
                        value={points.y[index]}
                        onChange={(e) => handleChange(index, "y", e.target.value)}
                        className="border p-1 w-16"
                    />
                </div>
            ))}

            {/* New ToDo Input Row */}
            <div className="mt-4 flex items-center gap-2">
                <input
                    type="text"
                    placeholder="New ToDo Name"
                    id="newTodoName"
                    className="border p-1 w-32"
                />
                <button
                    onClick={() => {
                        const nameInput = document.getElementById("newTodoName") as HTMLInputElement;
                        if (nameInput.value.trim() !== "") {
                            addNewToDo(nameInput.value.trim());
                            nameInput.value = ""; // Clear input field
                        }
                    }}
                    className="bg-blue-500 text-white px-4 py-1 rounded"
                >
                    Add ToDo
                </button>
            </div>
        </div>
    );
};

export default ToDoListe;