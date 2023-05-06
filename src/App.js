import {useDispatch, useSelector} from "react-redux";

function App() {
  const dispatch = useDispatch()
  const cash = useSelector(state => state.cash.cash)

  const addCash = (cash) => {
    dispatch({type: "ADD_CASH", payload: cash})
  }

  const getCash = (cash) => {
    dispatch({type: "GET_CASH", payload: cash})
  }

  return (
    <div >
      <div>{cash}</div>
      <button onClick={() => addCash(Number(prompt()))}>Пополнить</button>
      <button onClick={() => getCash(Number(prompt()))}>Снять</button>
    </div>
  );
}

export default App;
