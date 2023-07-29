
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import { Button } from '@mui/material'
import { useState } from 'react';
import './Todo.css';

function App() {

  const [item, setItem] = useState("");
  const [add, setAdd] = useState([]);

  function inputItems(event) {
    setItem(event.target.value);
  }

  function addItems() {
    if (item.length === 0) {
      return alert("Please enter valid data data");
    }
    else {
      setAdd([...add, item]);
      setItem("");
    }
  }

  const deleteItem = (i) => {
    const updatedata = add.filter((arrElem, index) => index !== i);
    setAdd(updatedata);
  }

  return (

    <>
      <div className='main'>
        <div className='todo'>
          <h3>ToDo List</h3>
          <div className='input'>
            <input type='text' value={item} onChange={inputItems} />
            <Button variant="contained" onClick={addItems}>
              add
            </Button>
          </div>
          {
            add.map((itemval, index) => {
              return <>
                <div className='items' key={index}>
                  <span className='deleteBtn' onClick={() => deleteItem(index)}>
                    <DeleteForeverOutlinedIcon />
                  </span>
                  <p>{itemval}</p>
                </div>
              </>
            })
          }

        </div>
      </div>

    </>
  );
}

export default App;
