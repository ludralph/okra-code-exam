import React, { Component } from 'react';
import axios from 'axios';
import './app.css';
import { connect } from 'react-redux';
import Transactions from './components/Transactions';
import PearImage from './pear.png';
import UnityBankImage from './unitybank.png'
import DrawerToggleButton from './components/DrawerToggleButton';
import SideDrawer from './components/SideDrawer';
import BackDrop from './components/BackDrop';
import {
  getTotalBalance, getTotalCredit,
  getTotalDebit, getAllTransactions
} from './actions/transactionActions';

class App extends Component {
  state = {
    sideDrawerOpen: false
  };

  componentDidMount() {
    this.props.dispatch(getAllTransactions());
    this.props.dispatch(getTotalCredit());
    this.props.dispatch(getTotalDebit());
    this.props.dispatch(getTotalBalance());
  }

  // getAllTransactions = () => {
  //   axios.get('/api/v1/transactions')
  //     .then(response => this.setState({
  //       transactions: response.data.message
  //     }))
  //     .catch(error => console.error(error));
  // }

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {
        sideDrawerOpen: !prevState.sideDrawerOpen
      }
    })
  }

  backDropClickHandler = () => {
    this.setState({
      sideDrawerOpen: false
    })
  }

  render() {

    let sideDrawer;
    let backdrop;
    if (this.state.sideDrawerOpen) {
      sideDrawer = <SideDrawer />
      backdrop = <BackDrop click={this.backDropClickHandler} />
    }
    const { transactions, totalCredit, totalDebit, totalBalance } = this.props
    return (
      <div className="max-w-xs m-auto border-solid border-2 border-gray-600 bg-gray-300 h-screen">
        <div className="bg-white rounded-b-lg text-xs">
          <div className="flex justify-between">
            <div className="ml-4 my-2">9:41</div>
            <div className="mx-4 my-2 flex justify-between">
              <i className="fas fa-signal mr-1"></i>
              <i className="fas fa-wifi mr-1"></i>
              <i className="fas fa-battery-full"></i>
            </div>
          </div>
          <div className='flex w-full items-center'>
            <div className='  text-xl'>
              <DrawerToggleButton drawerClickHandler={this.drawerToggleClickHandler} />
              {sideDrawer}
              {backdrop}
            </div>
            <div className="m-auto"><img src={PearImage} height='40' width='40' /></div>
          </div>
          <div className='flex-col justify-center '>
            <p className='text-center mt-2 text-gray-600'>Total Balance</p>
            <p className='text-center text-2xl'>{totalBalance.toLocaleString(2)}</p>
          </div>
          <div className='flex justify-center'><img src={UnityBankImage} height='80' width="80" /></div>
          <div className='flex justify-center pb-3'>
            <hr align='center' width='80%' />
          </div>
          <div className='flex justify-around pb-4'>
            <div>
              <p>Total Credits</p>
              <p>
                <i className="fas fa-share text-green-600 mr-2"></i>{totalCredit.toLocaleString(2)}
              </p>
            </div>
            <div>
              <p>Total Debits</p>
              <p className="">
                <i className="fas fa-reply text-red-600 mr-2"></i>{totalDebit.toLocaleString(2)}
              </p>
            </div>
          </div>
          <div className='flex justify-center pb-4'>
            <button className="m-auto bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Connect Your Bank</button>

          </div>

        </div>

        <Transactions transactions={transactions} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    transactions: state.transactions,
    totalCredit: state.totalCredit,
    totalDebit: state.totalDebit,
    totalBalance: state.totalBalance
  }
}
export default connect(mapStateToProps)(App)