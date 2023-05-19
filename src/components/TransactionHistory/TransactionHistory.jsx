import css from './transactionHistory.module.css';

function TransactionHistory ({items}){
  return(

<table className={css['transaction-history']}>
  <thead  className={css['transaction-head']} >
    <tr className=''>
      <th className=''>Type</th>
      <th className=''>Amount</th>
      <th className=''>Currency</th>
    </tr >
  </thead >
{items.map(item=>
  <tbody className=''>
    <tr className=''>

      <td className='' key={item.id}>{item.type}</td>
      <td className=''>{item.amount}</td>
      <td className=''>{item.currency}</td>
    </tr>
  </tbody>

)
  }
</table>


)

}



export default TransactionHistory
