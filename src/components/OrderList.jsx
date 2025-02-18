// import React from 'react';
import { useGetOrdersQuery } from '../slices/orderApiSlice';

const OrderList = () => {
    const { data: orders, isLoading, error } = useGetOrdersQuery();

    if (isLoading) return <div className="text-center py-4">Loading...</div>;
    if (error) return <div className="text-center text-red-500 py-4">Error: {error.message}</div>;

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-xl font-bold mb-4">Orders</h2>
            <ul className="space-y-4">
                {orders.map((order) => (
                    <li key={order._id} className="p-4 border rounded shadow-sm">
                        <p><strong>Order ID:</strong> {order._id}</p>
                        <p><strong>Total:</strong> ${order.totalPrice}</p>
                        {/* More order details here */}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default OrderList;
