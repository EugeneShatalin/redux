import {useDispatch, useSelector} from "react-redux";
import {addCashAction, getCashAction} from "./store/cashReducer";
import {addCustomerAction, addManyCustomerAction, removeCustomerAction} from "./store/customersReducer";
import {fetchCustomers} from "./asyncAction/customers";

function App() {
    const dispatch = useDispatch()
    const cash = useSelector(state => state.cash.cash)
    const customers = useSelector(state => state.customers.customers)

    const addCash = (cash) => {
        dispatch(addCashAction(cash))
    }

    const getCash = (cash) => {
        dispatch(getCashAction(cash))
    }

    const addCustomer = (customer) => {
        let newCustomer = {
            name: customer,
            id: Date.now()
        }
        dispatch(addCustomerAction(newCustomer))
    }

    const removeCustomer = (id) => {
        dispatch(removeCustomerAction(id))
    }

    return (
        <div style={{textAlign: 'center'}}>
            <div style={{padding: 15, margin: 15, fontSize: '2em'}}>{cash}</div>
            <button
                style={{padding: 15, margin: 15, fontSize: '2em'}}
                onClick={() => addCash(Number(prompt()))}>
                Пополнить
            </button>
            <button
                style={{padding: 15, margin: 15, fontSize: '2em'}}
                onClick={() => getCash(Number(prompt()))}>
                Снять
            </button>
            <button
                style={{padding: 15, margin: 15, fontSize: '2em'}}
                onClick={() => addCustomer((prompt()))}>
                Добавить пользователя
            </button>
            <button
                style={{padding: 15, margin: 15, fontSize: '2em'}}
                onClick={() => dispatch(fetchCustomers())}>
                Добавить пользователей из базы
            </button>
            <div>
                {customers.length === 0 ?
                    <div>
                        пользователей нет
                    </div>
                    :
                    <div>
                        {customers.map(customer =>
                            <div onClick={() => {removeCustomer(customer.id)}}
                                 style={{cursor: 'pointer'}}
                            >
                                {customer.name}
                            </div>
                        )
                        }
                    </div>
                }
            </div>
        </div>
    );
}

export default App;
