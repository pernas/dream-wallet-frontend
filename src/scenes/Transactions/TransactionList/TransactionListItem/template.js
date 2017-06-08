import React from 'react'
import CSSModules from 'react-css-modules'

import style from './style.scss'

const TransactionListItem = (props) => {
  return (
    <div className='container-fluid padding-30 bg-white border-bottom' styleName='transaction-list-item'>
      <div className='row padding-bottom-30'>
        <div className='col-md-2'>
          <div className='row'>
            <div className='col-md-2'>
              <i className='icon-down_arrow pointer' onClick={props.clickDetails} />
            </div>
            <div className='col-md-10 flex-column'>
              <span className='f-16 upper em-500 received' onClick={props.clickDetails}>{props.transaction.type}</span>
              <span className='f-14 italic'>{props.transaction.time}</span>
            </div>
          </div>
        </div>
        <div className='col-md-4 flex-column'>
          <span className='f-14'>To: {props.transaction.to}</span>
          <span className='f-14'>From: {props.transaction.from}</span>
        </div>
        <div className='col-md-4'>
          <span className='f-14'>{props.transaction.description}</span>
        </div>
        <div className='col-md-2'>
          <button className='button-received'>{props.transaction.amount}</button>
        </div>
      </div>
      <div className={(props.detailsDisplayed ? 'row' : 'row hidden')}>
        <div className='col-md-2'>
          <span className='f-14'>{props.transaction.status}</span>
        </div>
        <div className='col-md-2 col-md-offset-8'>
          <span className='f-12'>Value when received: </span>
          <span className='f-12 em-500'>{props.transaction.initial_value}</span>
        </div>
      </div>
    </div>
  )
}

export default CSSModules(TransactionListItem, style)