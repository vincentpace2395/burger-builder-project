import React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import './CheckoutSummary.css';

class CheckoutSummary extends React.Component {
    render() {
        const { checkoutCancelled, checkoutContinued } = this.props;

        return (
            <div className='CheckoutSummary'>
                <h1>We hope it tastes well!</h1>
                <Burger ingredients={this.props.ingredients} />
                <Button
                    btnType="Danger"
                    clicked={checkoutCancelled}>CANCEL</Button>
                <Button
                    btnType="Success"
                    clicked={checkoutContinued}>CONTINUE</Button>
            </div>
        );
    }
};

export default CheckoutSummary;