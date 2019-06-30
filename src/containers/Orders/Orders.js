import React from 'react';
import axios from 'axios';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import Order from '../../components/Order/Order';

class Orders extends React.Component {
    state = {
        orders: [],
        loading: true,
    };

    componentDidMount() {
        axios.get('https://react-my-burger-ca9ae.firebaseio.com/orders.json')
            .then(res => {
                const fetchedOrders = [];
                for (let key in res.data) {
                    fetchedOrders.push({
                        ...res.data[key],
                        id: key
                    });
                }
                this.setState({loading: false, orders: fetchedOrders});
            })
            .catch(error => {
                this.setState({loading: false});
            })
    }

    render() {
        return (
            <div>
                {this.state.orders.map(order => (
                    <Order
                        key={order.id}
                        ingredients={order.ingredients}
                        price={order.price}/>
                ))}
                <Order />
            </div>
        );
    }
}

export default withErrorHandler(Orders, axios);