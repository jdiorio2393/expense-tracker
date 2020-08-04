import React, { useContext } from 'react';
import { GlobalContext } from '../components/context/GlobalState';

const Transaction = (props) => {
  const context = useContext(GlobalContext);
  const sign = props.transaction.amount < 0 ? '-' : '+';
  return (
    <li className={props.transaction.amount < 0 ? 'minus' : 'plus'}>
      {props.transaction.text}
      <span>
        {sign}${Math.abs(props.transaction.amount)}
        {/* Math.abs will return absolute number. Fixes bug where negative numbers have 2 negative signs. i.e -$-20 => -$20 */}
      </span>
      <button
        onClick={() => context.deleteTransaction(props.transaction.id)}
        className='delete-btn'>
        x
      </button>
    </li>
  );
};

export default Transaction;
