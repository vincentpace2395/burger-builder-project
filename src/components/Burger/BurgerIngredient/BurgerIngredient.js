import React from 'react';
import PropTypes from 'prop-types';
import './BurgerIngredient.css';

class BurgerIngredient extends React.Component {
    render() {
        let ingredient = null;

        switch (this.props.type) {
            case ('bread-bottom'):
                ingredient = <div className='BreadBottom' />;
                break;
            case ('bread-top'):
                ingredient = (
                    <div className='BreadTop'>
                        <div className='Seeds1' />
                        <div className='Seeds2' />
                    </div>
                );
                break;
            case ('meat'):
                ingredient = <div className='Meat' />;
                break;
            case ('cheese'):
                ingredient = <div className='Cheese' />;
                break;
            case ('bacon'):
                ingredient = <div className='Bacon' />;
                break;
            case ('lettuce'):
                ingredient = <div className='Lettuce' />;
                break;
            default:
                ingredient = null;
        }

        return ingredient;
    }
};

BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
}

export default BurgerIngredient;