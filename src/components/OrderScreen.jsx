import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { PayPalButtons, usePayPalScriptReducer } from '@paypal/react-paypal-js';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import Message from '../components/Message';
import Loader from '../components/Loader';
import {
    useDeliverOrderMutation,
    useGetOrderDetailsQuery,
    useGetPaypalClientIdQuery,
    usePayOrderMutation,
} from '../slices/orderApiSlice';

const OrderScreen = () => {
    const { id: orderId } = useParams();

    const {
        data: order,
        refetch,
        isLoading,
        error,
    } = useGetOrderDetailsQuery(orderId);

    const [payOrder, { isLoading: loadingPay }] = usePayOrderMutation();
    const [deliverOrder, { isLoading: loadingDeliver }] = useDeliverOrderMutation();

    const { userInfo } = useSelector((state) => state.auth);

    const [{ isPending }, paypalDispatch] = usePayPalScriptReducer();

    const {
        data: paypal,
        isLoading: loadingPayPal,
        error: errorPayPal,
    } = useGetPaypalClientIdQuery();

    useEffect(() => {
        if (!errorPayPal && !loadingPayPal && paypal.clientId) {
            const loadPaypalScript = async () => {
                paypalDispatch({
                    type: 'resetOptions',
                    value: {
                        'client-id': paypal.clientId,
                        currency: 'USD',
                    },
                });
                paypalDispatch({ type: 'setLoadingStatus', value: 'pending' });
            };
            if (order && !order.isPaid) {
                if (!window.paypal) {
                    loadPaypalScript();
                }
            }
        }
    }, [errorPayPal, loadingPayPal, order, paypal, paypalDispatch]);

    function onApprove(data, actions) {
        return actions.order.capture().then(async function (details) {
            try {
                await payOrder({ orderId, details }).unwrap();
                refetch();
                toast.success('Order is paid');
            } catch (err) {
                toast.error(err?.data?.message || err.error);
            }
        });
    }

    function onError(err) {
        toast.error(err.message);
    }

    function createOrder(data, actions) {
        return actions.order
            .create({
                purchase_units: [
                    {
                        amount: { value: order.totalPrice },
                    },
                ],
            })
            .then((orderID) => {
                return orderID;
            });
    }

    const deliverHandler = async () => {
        await deliverOrder(orderId);
        refetch();
    };

    return isLoading ? (
        <Loader />
    ) : error ? (
        <Message variant="danger">{error?.data?.message || error.error}</Message>
    ) : (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Order {order._id}</h1>
            <div className="flex flex-col md:flex-row gap-4">
                {/* Left Side - Order Details */}
                <div className="md:w-2/3 space-y-4">
                    {/* Shipping Section */}
                    <div className="p-4 border rounded">
                        <h2 className="text-xl font-semibold mb-2">Shipping</h2>
                        <p>
                            <strong>Name: </strong> {order.user.name}
                        </p>
                        <p>
                            <strong>Email: </strong>
                            <a href={`mailto:${order.user.email}`} className="text-blue-500">
                                {order.user.email}
                            </a>
                        </p>
                        <p>
                            <strong>Address: </strong>
                            {order.shippingAddress.address}, {order.shippingAddress.city}{' '}
                            {order.shippingAddress.postalCode}, {order.shippingAddress.country}
                        </p>
                        {order.isDelivered ? (
                            <Message variant="success">
                                Delivered on {order.deliveredAt}
                            </Message>
                        ) : (
                            <Message variant="danger">Not Delivered</Message>
                        )}
                    </div>

                    {/* Payment Section */}
                    <div className="p-4 border rounded">
                        <h2 className="text-xl font-semibold mb-2">Payment Method</h2>
                        <p>
                            <strong>Method: </strong> {order.paymentMethod}
                        </p>
                        {order.isPaid ? (
                            <Message variant="success">Paid on {order.paidAt}</Message>
                        ) : (
                            <Message variant="danger">Not Paid</Message>
                        )}
                    </div>

                    {/* Order Items */}
                    <div className="p-4 border rounded">
                        <h2 className="text-xl font-semibold mb-2">Order Items</h2>
                        {order.orderItems.length === 0 ? (
                            <Message>Order is empty</Message>
                        ) : (
                            <div className="space-y-4">
                                {order.orderItems.map((item, index) => (
                                    <div key={index} className="flex items-center">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-16 h-16 object-cover rounded"
                                        />
                                        <div className="ml-4 flex-grow">
                                            <Link to={`/products/${item.product}`} className="text-blue-500 hover:underline">
                                                {item.name}
                                            </Link>
                                        </div>
                                        <div className="w-32 text-right">
                                            {item.qty} x ${item.price} = ${item.qty * item.price}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* Right Side - Order Summary */}
                <div className="md:w-1/3">
                    <div className="border rounded p-4">
                        <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                        <div className="flex justify-between mb-2">
                            <span>Items</span>
                            <span>${order.itemsPrice}</span>
                        </div>
                        <div className="flex justify-between mb-2">
                            <span>Shipping</span>
                            <span>${order.shippingPrice}</span>
                        </div>
                        <div className="flex justify-between mb-2">
                            <span>Tax</span>
                            <span>${order.taxPrice}</span>
                        </div>
                        <div className="flex justify-between mb-4 font-bold">
                            <span>Total</span>
                            <span>${order.totalPrice}</span>
                        </div>
                        {!order.isPaid && (
                            <div>
                                {loadingPay && <Loader />}
                                {isPending ? (
                                    <Loader />
                                ) : (
                                    <div>
                                        <PayPalButtons
                                            createOrder={createOrder}
                                            onApprove={onApprove}
                                            onError={onError}
                                        />
                                    </div>
                                )}
                            </div>
                        )}
                        {loadingDeliver && <Loader />}
                        {userInfo && userInfo.isEmployee && order.isPaid && !order.isDelivered && (
                            <button
                                type="button"
                                onClick={deliverHandler}
                                className="mt-4 w-full py-2 px-4 bg-green-600 text-white rounded hover:bg-green-700"
                            >
                                Mark As Delivered
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderScreen;
