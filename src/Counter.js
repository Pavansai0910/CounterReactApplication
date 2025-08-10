import React, { useState } from "react";
import "./Counter.css";

function Counter({ setCounterOpen }) {
  const [number, setNumber] = useState(0);
  const [records, setRecords] = useState([]);
  const [isSorted, setIsSorted] = useState(false);
  const [isAsc, setIsAsc] = useState(false);
  const [hasAdded, setHasAdded] = useState(false);

  function increase() {
    setNumber(number + 1);
  }

  function decrease() {
    if (number > 0) {
      setNumber(number - 1);
    }
  }

  function addValue() {
    if (number > 0) {
      const updatedList = [...records, number];
      setRecords(updatedList);
      setHasAdded(true);
    }
  }

  function sortList() {
    let copiedList = [...records];
    if (isAsc) {
      copiedList.sort((a, b) => b - a);
    } else {
      copiedList.sort((a, b) => a - b);
    }
    if (!isSorted) {
      setIsSorted(true);
    }
    setIsAsc(!isAsc);
    setRecords(copiedList);
  }

  function deleteValue(index) {
    const updatedList = records.filter((_, i) => i !== index);
    setRecords(updatedList);
    if (updatedList.length === 0) {
      setHasAdded(false);
      setIsSorted(false);
    }
  }

  function resetList() {
    setNumber(0);
    setRecords([]);
    setHasAdded(false);
    setIsAsc(true);
    setIsSorted(false);
  }

  return (
    <div className="container">
      <button onClick={() => setCounterOpen(false)} className="back-home">
        Take me back to Home
      </button>

      <h1>Simple Counter</h1>

      <div className="counter-controls">
        <button onClick={decrease} className="decrease-button">
          -
        </button>
        <p className="number-display">{number}</p>
        <button onClick={increase} className="increase-button">
          +
        </button>
      </div>

      <div className="action-buttons">
        {number !=0 &&
        <button  onClick={addValue} className="add-button">
          Add
        </button>
}
        {hasAdded && (
          <>
            <button onClick={sortList} className="sort-button">
              Sort ({!isAsc ? "Asc" : "Desc"})
            </button>
            <button onClick={resetList} className="reset-button">
              Reset
            </button>
          </>
        )}
      </div>
       

      {/* <div className="list-box">
        {isSorted && records.length > 0 && (
          <div className={`sort-comment ${isAsc ? "asc" : "desc"}`}>
            Sorted in {isAsc ? "Ascending" : "Descending"} Order
          </div>
        )}

        <ul className="horizontal-list">
          {records.map((val, index) => (
            <div className="list-item-container" key={index}>
              <li className="list-item">{val}</li>
              <button
                onClick={() => deleteValue(index)}
                className="delete-button"
                aria-label={`Delete item ${val}`}
              >
                x
              </button>
            </div>
          ))}
        </ul>
      </div> */}
{hasAdded && (<div className="list-box">
        {isSorted &&  records.length > 0 && (
          <div className={`sort-comment ${isAsc ? "asc" : "desc"}`}>
            Sorted in {isAsc ? "Ascending" : "Descending"} Order
          </div>
        )}
        <ul className="horizontal-list">
          {records.map((val, index) => (
            <div className="list-item-container" key={index}>
                <li key={index} className="list-item">
              {val}
            </li>
            <button
onClick={() => deleteValue(index)}
                className="deleteItem"
              >
                x
              </button>
            </div>
          ))}
        </ul>
      </div>)}
     

    </div>
  );
}

export default Counter;
