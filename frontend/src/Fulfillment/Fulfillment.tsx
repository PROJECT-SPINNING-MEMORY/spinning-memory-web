import React from 'react';
import { Link } from 'react-router-dom';

const mockFulfillment = [
  {
    _id: '1',
    product: 'Shirt',
    quantity: 2,
    status: 'Shipped',
    customer: 'Taylor',
    shippedDate: '2025-10-10',
  },
  {
    _id: '2',
    product: 'Shirt',
    quantity: 1,
    status: 'Unshipped',
    customer: 'Pedro',
    shippedDate: '',
  },
  {
    _id: '3',
    product: 'Shirt',
    quantity: 3,
    status: 'Shipped',
    customer: 'Sanjay',
    shippedDate: '2025-10-11',
  },
];

function Fulfillment() {
  return (
    <div className="content content-margined">
      <div className="order-header">
        <h3>Fulfillment</h3>
      </div>
      <div className="order-list">
        <table className="table fulfillment-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>PRODUCT</th>
              <th>QUANTITY</th>
              <th>CUSTOMER</th>
              <th>STATUS</th>
              <th>SHIPPED DATE</th>
            </tr>
          </thead>
          <tbody>
            {mockFulfillment.map((order) => (
                <tr key={order._id} className={order.status === 'Unshipped' ? 'unshipped' : ''}>
                    <td>{order._id}</td>
                    <td>{order.product}</td>
                    <td>{order.quantity}</td>
                    <td>{order.customer}</td>
                    <td>{order.status}</td>
                    <td>{order.shippedDate || '-'}</td>
                </tr>
            ))}
           </tbody>
        </table>
      </div>
    </div>
  );
}

export default Fulfillment;
