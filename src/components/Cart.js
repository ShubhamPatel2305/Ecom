import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { ProductContext } from '../contexts/ProductContext';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);
  const { currency, conversionRates } = useContext(ProductContext);

  const deliveryThresholdUSD = 120;
  const deliveryChargeUSD = 10;

  const conversionRate = conversionRates[currency] || 1;
  const deliveryThreshold = deliveryThresholdUSD * conversionRate;
  const deliveryCharge = deliveryChargeUSD * conversionRate;

  const calculateOrderAmount = () => {
    return cartItems.reduce((total, item) => {
      const itemPrice = item.price / conversionRates[item.currency] * conversionRates[currency];
      const finalPrice = item.discount ? itemPrice * (1 - item.discount / 100) : itemPrice;
      return total + finalPrice * item.quantity;
    }, 0).toFixed(2);
  };

  const calculateTotal = () => {
    const orderAmount = parseFloat(calculateOrderAmount());
    if (orderAmount >= deliveryThreshold) {
      return orderAmount.toFixed(2);
    } else {
      return (orderAmount + deliveryCharge).toFixed(2);
    }
  };

  const formatPrice = (price) => {
    if (currency === 'INR') {
      return new Intl.NumberFormat('en-IN', { style: 'currency', currency, minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(price);
    } else {
      return new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(price);
    }
  };

  return (
    <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-28">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">Shopping Cart</h2>

        <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
          <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
            <div className="space-y-6">
              {cartItems.length === 0 ? (
                <p className="text-gray-500 dark:text-gray-400">Your cart is empty.</p>
              ) : (
                cartItems.map((item) => {
                  const itemPrice = item.price / conversionRates[item.currency] * conversionRates[currency];
                  const originalPrice = itemPrice.toFixed(2);
                  const discountedPrice = item.discount
                    ? (itemPrice * (1 - item.discount / 100)).toFixed(2)
                    : originalPrice;

                  return (
                    <div key={item.id} className="rounded-lg border border-gray-200 bg-gray-100 p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6">
                      <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                        <a href="#" className="shrink-0 md:order-1">
                          <img className="h-20 w-20" src={item.image} alt={item.title} />
                        </a>

                        <div className="flex items-center justify-between md:order-3 md:justify-end">
                          <div className="flex items-center">
                            <button
                              type="button"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="inline-flex h-5 w-5 items-center justify-center rounded-md border border-red-500 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                              disabled={item.quantity === 1}
                            >
                              <svg className="h-2.5 w-2.5 text-red-700 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16" />
                              </svg>
                            </button>
                            <input
                              type="text"
                              className="w-10 text-center text-sm font-medium text-gray-900 bg-transparent border-0 focus:outline-none focus:ring-0 dark:text-white"
                              value={item.quantity}
                              readOnly
                            />
                            <button
                              type="button"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="inline-flex h-5 w-5 items-center justify-center rounded-md border border-green-500 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                            >
                              <svg className="h-2.5 w-2.5 text-green-700 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
                              </svg>
                            </button>
                          </div>
                          <div className="text-end md:order-4 md:w-32">
                            <p className="text-base font-bold text-gray-900 dark:text-white">
                              {formatPrice(discountedPrice * item.quantity)}
                            </p>
                            {item.discount && (
                              <p className="text-sm text-gray-500 dark:text-gray-400 line-through">
                                {formatPrice(originalPrice * item.quantity)}
                              </p>
                            )}
                          </div>
                        </div>

                        <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                          <a href="#" className="text-base font-medium text-gray-900 hover:underline dark:text-white">
                            {item.title}
                          </a>
                          {item.discount && (
                            <span className="inline-block mx-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                              - {item.discount}%
                            </span>
                          )}
                          <div className="flex items-center gap-4">
                            <button
                              type="button"
                              onClick={() => removeFromCart(item.id)}
                              className="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500"
                            >
                              <svg className="mr-1.5 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L17.94 6M18 18L6.06 6" />
                              </svg>
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>

          <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full ">
            {cartItems.length > 0 && (
              <div className="space-y-4 rounded-lg border border-gray-200 bg-gray-100 p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
                <p className="text-xl font-semibold text-gray-900 dark:text-white">Order summary</p>

                <div className="space-y-4">
                  <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                    <dt className="text-base font-bold text-gray-900 dark:text-white">Order Amount</dt>
                    <dd className="text-base font-bold text-gray-900 dark:text-white">{formatPrice(calculateOrderAmount())}</dd>
                  </dl>
                  <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                    <dt className="text-base font-bold text-gray-900 dark:text-white">Delivery Charges</dt>
                    <dd className="text-base font-bold text-gray-900 dark:text-white">
                      {parseFloat(calculateOrderAmount()) >= deliveryThreshold.toFixed(2) ? (
                        <span className="line-through">{formatPrice(deliveryCharge)}</span>
                      ) : (
                        formatPrice(deliveryCharge)
                      )}
                    </dd>
                  </dl>
                  <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                    <dt className="text-base font-bold text-gray-900 dark:text-white">Total</dt>
                    <dd className="text-base font-bold text-gray-900 dark:text-white">{formatPrice(calculateTotal())}</dd>
                  </dl>
                </div>

                <a
                  href="#"
                  className="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                  Proceed to Checkout
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
