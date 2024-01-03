import {VictoryPie, VictoryLabel} from 'victory'
import { useGlobalState } from '../context/GlobalState';


function ExpenseChart(){

  const {transactions} = useGlobalState();

  const totalIncomes = transactions
  .filter((transaction) => transaction.amount > 0)
  .reduce((acc, transaction) => (acc += transaction.amount), 0);

  const totalExpenses = transactions
    .filter((transaction) => transaction.amount < 0)
    .reduce((acc, transaction) => (acc += transaction.amount), 0) * -1;

  console.log({
    totalIncomes,
    totalExpenses,
  });

  const totalExpensesPercentage = Math.round((totalExpenses / totalIncomes) * 100);
  const totalIncomesPercentage = 100 - (totalExpensesPercentage);



  return (
    <VictoryPie 
      colorScale={['#e74c3c', '#2ecc71']}
      data={[
        {x: 'Expenses', y: totalExpensesPercentage},
        {x: 'Incomes', y: totalIncomesPercentage},
      ]}
      animate={{
        duration: 1000
      }}
      labels={({datum})=> `${datum.y}%`}
      labelComponent={
        <VictoryLabel 
          angel={45}
          style={{
            fill: 'white'
          }}
        />
      }
    />
  )
}

export default ExpenseChart;