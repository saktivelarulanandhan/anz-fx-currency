import Country from "../Country/country";
import Currency from "../Currency/Currency";
import './Wrapper.css';

function Wrapper(props) {
    return (
        <div className="container">
            <div className="row Wrapper-border">
                <div className="col-md-12">
                    <div className="row  Wrapper-content-center p-4 m-2">
                        <div className="col-md-4 mr-2 Wrapper-content">
                            <div className="row">
                                <div className="col-md-4 p-0 Wrapper-header">
                                    <label>From:</label>
                                </div>
                                <div className="col-md-10 m-2">
                                    <Country currencyType={props.elements} who='fromCurrency' />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mr-2 Wrapper-content">
                            <div className="row">
                                <div className="col-md-4 p-0 Wrapper-header">
                                    <label>To:</label>
                                </div>
                                <div className="col-md-10 m-2">
                                    <Country currencyType={props.elements} who='toCurrency' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row  Wrapper-content-center pt-0 m-2">
                        <div className="col-md-8 Wrapper-content">
                            <div className="row">
                                <div className="col-md-2 p-0 Wrapper-header">
                                    <label>Currency Value:</label>
                                </div>
                                <div className="col-md-10 m-2">
                                    <Currency currencyType={props.elements}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Wrapper;