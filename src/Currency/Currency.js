

import { Form, Button, InputGroup } from 'react-bootstrap';


function Currency(props) {

    const setCurrencyType = (event) => {
        const amount = event.target.value;
        if (!amount || amount.match(/^\d{1,}(\.\d{0,4})?$/)) {
            props.currencyType['amount'] = amount;
        }
    }

    return (
        <div>
            <Form.Group controlId="formCurrencyValue">
                <div className="row">
                    <div className="col-md-5">
                        <InputGroup hasValidation>
                            <Form.Control type="number" placeholder="Enter Amount" required onChange={setCurrencyType} />
                            <Form.Control.Feedback type="invalid">
                                Please enter the amount
                            </Form.Control.Feedback>
                        </InputGroup>
                    </div>
                    <Button variant="outline-primary" type="submit">
                        Convert
                        </Button>
                    <div className="col-md-5">
                        <Form.Control type="number" disabled value={props.currencyType.convertedValue} placeholder="Enter Amount" />
                    </div>
                </div>
            </Form.Group>

        </div>
    )
}

export default Currency;