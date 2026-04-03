import "./App.css";
import { useState , useEffect}from "react";

function App() {

  

  
  const [form, setForm] = useState({
    money : "",
    description : "",
    choice : "income"
  });
  const [transactions, setTransactions] = useState(() => {
    const savedData = JSON.parse(localStorage.getItem("transactions"));
    return savedData ? savedData : []
  });
  const [editIndex, setEditIndex] = useState(null);

  const totalIncome = transactions
    .filter(t => t.choice ==="income")
    .reduce((acc,t)=> acc + Number(t.money),0);

    const totalExpense = transactions
    .filter(t => t.choice ==="expense")
    .reduce((acc,t)=> acc + Number(t.money),0);

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("transactions"));
    
    if(savedData) setTransactions(savedData);
  },[]);
 
  useEffect(() => {
    
    localStorage.setItem("transactions", JSON.stringify(transactions));
   
    
  },[transactions]);
  
  const handleEdit = (index) => {
    setForm(transactions[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updated = transactions.filter((_, i) => (
      i !== index
    ));
    setTransactions(updated);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.description.trim() === "") return;

    if (editIndex !== null) {
      
      const updated = [...transactions];
      updated[editIndex]=form;
      setTransactions(updated);
      
      setEditIndex(null);
    } else {
      
      const updout = [...transactions, form];
      setTransactions(updout);
    }

    

    setForm({
    money : "",
    description : "",
    choice : "income"
  });
    
    
  };

  return (
    <form onSubmit={handleSubmit}>

      <p>Total Income: {totalIncome}</p>
      <p>Total Expense: {totalExpense}</p>
      <p>Total: {totalIncome - totalExpense}</p>

      <input 
        type="text"
        value={form.description}
        placeholder = "Description"
        onChange={(e) => {
          setForm((prev) => ({...prev, description:e.target.value}))
        }}
      />  

      <input 
        type="number"
        value={form.money}
        placeholder = "0"
        onChange={(e) => {
          setForm((prev) => ({...prev, money:e.target.value}))
        }}
      />

      <select value={form.choice}
        onChange={(e) => {
          setForm((prev) => ({...prev, choice:e.target.value}))
        }}> 
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>

      <button 
        type="submit"
        className={form.description.trim() && form.money ? "form-filled" : ""}
      >
        Submit
      </button>
      <div id="output">
        {transactions.map((item, index) => (
          <div key={index}>
          <p  className="output">Type: {item.choice}</p>
          <p  className="output">Description: {item.description}</p>
          <p  className="output">Amount:      {item.money}</p>
          <button type = "button" onClick = {() => handleEdit(index)}>
            Edit
          </button>
          <button type = "button" onClick = {() => handleDelete(index)}>
            Delete
          </button>
          </div>
        ))}
      </div>
      
    </form>
    
  );
}

export default App;