import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Ensure Tailwind CSS is properly imported
import App from './App';
import reportWebVitals from './reportWebVitals';

function Header () {
  return (
  <div>
    <h1>
      Money Wise
      </h1>
  </div>
 );
}

const NewTransactionForm = () => {
  return(
    <div className="mb-8">
    <h2 className="heading-2">New Transaction</h2>
    <form className="space-y-4 md:space-y-0 md:flex md:gap-4">
      <input 
        type="text" 
        id="description" 
        placeholder="Enter Description" 
        required
        className="w-full md:w-1/3 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
      />
      <select 
        id="type" 
        required
        className="w-full md:w-1/3 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
      >
        <option value="">Select Type</option>
        <option value="Income">Income</option>
        <option value="Expense">Expense</option>
      </select>
      <input 
        type="number" 
        min="0" 
        id="amount" 
        placeholder="Amount" 
        required
        className="w-full md:w-1/3 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
      />
      <input 
        type="submit" 
        value="Add"
        className="w-full md:w-auto bg-secondary text-white py-2 px-6 rounded-md hover:bg-secondary/90 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 transition-colors cursor-pointer"
      ></input>
    </form>
  </div>
  ); 
};

const TransactionListHeader = () => {
  return (
    <p>Transaction List Header</p>
  );
}

const TransactionTable = () => {
  return (
    <p>Transaction Table</p>
  );
}

const TransactionsList = () => {
  return (
    <div>
       <TransactionListHeader />
       <TransactionTable />

    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
//    <div>
//       <Header />
//         <NewTransactionForm />
//         <TransactionsList /> */
//   </div>
<React.StrictMode>
 <App />
 </React.StrictMode>

);
    
    


 

  

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
