import React, { useReducer, useRef } from "react";

//https://www.youtube.com/watch?v=sYDFCuZHrqw

//!!!!!
//https://daveceddia.com/usereducer-hook-examples/

//https://daveceddia.com/what-is-a-reducer/

function ShoppingList() {
  const inputRef = useRef();
  const [items, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "add":
        return [
          ...state,
          {
            id: state.length,
            name: action.name,
          },
        ];
      case "remove":
        // keep every item except the one we want to remove
        return state.filter((_, index) => index != action.index);
      default:
    }
  }, []);

  //console.log(items.length);

  function handleSubmit(event) {
    console.log("---handleSubmit event = ", event);
    event.preventDefault();
    dispatch({
      type: "add",
      name: inputRef.current.value,
    });

    inputRef.current.value = "";
  }

  return (
    <>
      <h3>Shopping List</h3>
      <form onSubmit={handleSubmit}>
        <input ref={inputRef} />
        <button type="submit">Submit</button>
      </form>

      <ul>
        {items.map((item, index) => (
          <li key={item.id}>
            {" "}
            {item.name}
            <button onClick={() => dispatch({ type: "remove", index })}>
              X
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ShoppingList;
