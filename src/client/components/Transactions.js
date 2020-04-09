import React, { Component } from 'react';
import TransactionHistory from './TransactionHistory';

export default class Transactions extends Component {
  render() {
    return (
      <div>
        <div className='my-2 mx-8'>
          <p className='text-xs'>Transactions History</p>
          {
            this.props.transactions.map(transaction => {
              return <TransactionHistory
                key={transaction.id}
                description={transaction.description}
                type={transaction.type}
                amount={transaction.amount}
                createdAt={transaction.createdAt}

              />
            })
          }
        </div>
      </div>
    )
  }
}