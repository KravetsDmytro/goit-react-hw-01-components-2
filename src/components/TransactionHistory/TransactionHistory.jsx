import css from './transactionHistory.module.css';

function TransactionHistory ({items}){
  return(

<table className={css['transaction-history']}>
  <thead  className={css['transaction-head']} >
    <tr className={css['transaction-title']}>
      <th className={css['transaction-title']}>Type</th>
      <th className={css['transaction-title']}>Amount</th>
      <th className={css['transaction-title']}>Currency</th>
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
