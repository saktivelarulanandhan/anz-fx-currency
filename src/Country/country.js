import { Form, InputGroup } from 'react-bootstrap';
import './Country.css';

function Country(props) {

    const setCurrencyType = (event) => {
        let enteredValue = event.target.value;
        props.currencyType[props.who] = enteredValue.toUpperCase();
    }

    return (
        <div>
            <Form.Group controlId="fxCurrency">
                <InputGroup hasValidation>
                    <Form.Control
                        className="Currency-name"
                        type="text"
                        placeholder="Enter Currency"
                        aria-describedby="Enter Currency"
                        maxLength="3"
                        onChange={setCurrencyType}
                        required
                    />
                    <Form.Control.Feedback type="invalid">
                        Please enter the currency code
                        </Form.Control.Feedback>
                </InputGroup>
            </Form.Group>
        </div>
    );
}

export default Country;