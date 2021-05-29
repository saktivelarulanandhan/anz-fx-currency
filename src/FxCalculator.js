import React from 'react';
import { Form } from 'react-bootstrap';
import { CURRENCY_CONFIGURATION, CURRENCY_EXCHANGE_RATES } from './FxCalculator.constant';
import './FxCalculator.css';
import PopupMessage from './Modal/PopupMessage';
import Wrapper from './Wrapper/Wrapper';

class FxCalculator extends React.Component {

  state = {
    validated: false,
    alert: { showAlert: false },
    elements:
      { fromCurrency: '', toCurrency: '', amount: '', convertedValue: '' }
  };
  currList = CURRENCY_CONFIGURATION;
  exchangeRates = CURRENCY_EXCHANGE_RATES;
  constructor(props) {
    super(props);
  }

  handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();
    this.setState({ validated: true });
    if (this.isValidate(this.state)) {
      this.currencyCoverstion(this.state.elements.fromCurrency, this.state.elements.toCurrency, this.state.elements.amount);
    }
    else {
      if (form.checkValidity() === true) {
        this.setState({ ...this.state, showAlert: true });
      }
    }
  }

  closeAlert = (toggle) => {
    this.setState({ ...this.state, showAlert: toggle });
  }

  isValidate = (validateCurrency) => {
    const foundFromCurrency = this.currList.find(c => c.currName === validateCurrency.elements.fromCurrency);
    const foundToCurrency = this.currList.find(c => c.currName === validateCurrency.elements.toCurrency);
    return foundFromCurrency && foundToCurrency;
  }

  currencyCoverstion = (from, to, amount) => {
    let found = this.checkDirectHandler(from, to, amount);
    if (!found) {
       found = this.checkSameCurrencyHandler(from, to, amount);      
        if(!found) {
          found = this.checkInversionHandler(from, to, amount);
          if(!found) {
            found = this.crossCurrencyHandler(from, to, amount);
          }
        }      
    }
    this.setState({...this.state, elements:{...this.state.elements, convertedValue: found ? this.applyDecimalPoint(found, to) : null}});
    return found;
  }

  checkDirectHandler = (from, to, amount) => {
    const found = this.exchangeRates
      .filter(c => c.currName === from + to.trim())
      .map(e => e.rate * amount).toString();
    return found.length !== 0 ? found : null;
  }

  checkSameCurrencyHandler = (from, to, amount) => {
    const found = (from === to) ? amount : null;
    return found;
  }

  checkInversionHandler = (from, to, amount) => {
    const found = this.exchangeRates
      .filter(c => c.currName === to + from.trim())
      .map(e => 1 / e.rate * amount).toString();
    return found.length !== 0 ? found : null;
  }

  crossCurrencyHandler = (from, to, amount) => {
    const findFromCurrency = this.currList.find(f => f.currName === from);
    const where = findFromCurrency.ccy.filter(c => c.for.indexOf(to) !== -1);
    const fromToccy = this.currencyCoverstion(from, where[0].currName, amount).toString();
    const ccyToto = this.currencyCoverstion(where[0].currName, to, fromToccy).toString()
    return ccyToto.length !== 0 ? ccyToto : null;
  }

  applyDecimalPoint = (amount, who) => {
    const found = this.currList.find( e => e.currName === who).decimal;
    return +(Math.round(amount + "e+" + found)  + "e-" + found);
  } 

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="Fx-title">Welcome to FX-Calculator</h1>
              <hr />
              <Form noValidate validated={this.state.validated} onSubmit={this.handleSubmit}>
                <Wrapper currencyList={this.currList} elements={this.state.elements} />
              </Form>
              {(this.state.showAlert) ? <PopupMessage enable={this.closeAlert} from={this.state.elements.fromCurrency} to={this.state.elements.toCurrency} /> : null}

            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default FxCalculator;
