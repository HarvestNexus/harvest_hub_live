import React, { useState } from "react";
import type { CartItem, CartSectionProps } from "../../Interfaces/cart.interface";
import cartImage from 'src/assets/cart-image.png';
import {TrashIcon, Trash2Icon} from 'lucide-react';

export const CartSection: React.FC<CartSectionProps> = ({
  initialItems,
}) => {
  const defaultItems: CartItem[] =
    initialItems && initialItems.length > 0
      ? initialItems
      : [
          {
            id: 1,
            name: "Beef",
            vendor: "By Farmer Joe (Oyo)",
            price: 500,
            unit: "kg",
            qty: 1,
            image: cartImage,
          },
          {
            id: 1,
            name: "Beef",
            vendor: "By Farmer Joe (Oyo)",
            price: 500,
            unit: "kg",
            qty: 1,
            image: cartImage,
          },
        ];

  const [items, setItems] = useState<CartItem[]>(defaultItems);
  const [distanceDeliveryFee, setDistanceDeliveryFee] = useState<boolean>(false);

  const increaseQty = (id: number) => {
    setItems(prev => prev.map(it => (it.id === id ? { ...it, qty: it.qty + 1 } : it)));
  };

  const decreaseQty = (id: number) => {
    setItems(prev => prev.map(it => (it.id === id ? { ...it, qty: Math.max(1, it.qty - 1) } : it)));
  };

  const removeItem = (id: number) => {
    setItems(prev => prev.filter(it => it.id !== id));
  };

  const clearAll = () => setItems([]);

  const itemsTotal = () => items.reduce((s, it) => s + it.price * it.qty, 0);

  const discount = items.length > 2 ? 1000 : 0; // example rule
  const subtotal = Math.max(0, itemsTotal() - discount);

  const proceedToCheckout = () => {
    alert(`Proceeding to checkout. Subtotal: ₦${subtotal}`);
  };

  const continueShopping = () => {
    // navigate to marketplace in a real app; here we simulate
    window.location.href = "/marketplace";
  };

  return (
    <section className="font-nunito">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-8 font-nunito">
            <h2 className="text-[#1A1A1A] text-[37px] font-bold leading-160">My Cart</h2>
            <p className="text-[22px] mt-4 leading-160 text-[#646464]">Review your selected items and proceed to checkout</p>
        </div>
        <div className="font- max-w-6xl mx-auto px-4 md:px-6 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8 font-nunito"> 
            <div className="lg:col-span-2 font-nunito lg:p-5 border border-[#F5F5F5] rounded-[28px]">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-[#1A1A1A] text-[37px] font-bold leading-160">Cart Items ({items.length})</h3>
                    <button onClick={clearAll} className="text-[22px] text-[#208836] hover:underline px-8 py-4">
                        Clear All
                    </button>
                </div>

                <div className="space-y-4 mt-12">
                    {items.length === 0 && (
                        <div className="p-6 bg-white rounded shadow text-center text-gray-600">Your cart is empty</div>
                    )}

                    {items.map(item => (
                        <div key={item.id} className="flex items-center gap-4 p-4 bg-white rounded shadow">
                            <img src={item.image} alt={item.name} className="w-[200px] h-[200px] object-cover rounded" />
                            <div className="flex-1">
                                <div className="flex items-start justify-between">
                                    <div>
                                        <h4 className="font-bold text-[31px] text-[#1A1A1A]">{item.name}</h4>
                                        {item.vendor && <p className="text-[22px] text-[#646464] mt-4">{item.vendor}</p>}
                                    </div>
                                    <div className="text-right">
                                        <div className="text-green-700 font-semibold">₦{item.price}</div>
                                        <div className="text-xs text-gray-400">₦{item.price}/{item.unit} each</div>
                                    </div>
                                </div>

                                <div className="mt-3 flex items-center justify-between">
                                    <div className="flex items-center bg-[#F5F5F5] px-4 py-1 rounded-[14px]">
                                        <button onClick={() => decreaseQty(item.id)} className="px-3 py-1 text-lg" aria-label={`Decrease ${item.name}`}>
                                        −
                                        </button>
                                        <div className="px-4 py-1">{item.qty}</div>
                                        <button onClick={() => increaseQty(item.id)} className="px-3 py-1 text-lg" aria-label={`Increase ${item.name}`}>
                                        +
                                        </button>
                                    </div>

                                    <div className="flex items-center justify-end gap-3">
                                        <button onClick={() => removeItem(item.id)} className="">
                                            <Trash2Icon size={20} className="text-red-500"/>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>                
            </div>

            <aside className="bg-white rounded shadow p-6 h-max">
                <div className="flex items-center justify-between">
                    <h4 className="font-medium">Cart Summary</h4>
                    <span className="text-sm text-gray-500">Items Total ({items.reduce((s, it) => s + it.qty, 0)})</span>
                </div>

                <div className="mt-4 space-y-2">
                    <div className="flex justify-between text-gray-600">
                        <span>Items Total</span>
                        <span>₦{itemsTotal()}</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                        <span>Discount</span>
                        <span>-₦{discount}</span>
                    </div>
                    <div className="flex justify-between font-semibold text-gray-800">
                        <span>Subtotal</span>
                        <span>₦{subtotal}</span>
                    </div>
                </div>

                <button onClick={proceedToCheckout} className="mt-6 w-full px-4 py-2 bg-green-600 text-white rounded">
                Proceed to Checkout
                </button>

                <label className="mt-4 flex items-center gap-2 text-sm">
                <input type="checkbox" checked={distanceDeliveryFee} onChange={e => setDistanceDeliveryFee(e.target.checked)} />
                Distance determines delivery fee
                </label>

                <div className="mt-6 text-center text-sm text-gray-500">
                Need help? <button className="text-green-600 underline">Contact Support</button>
                </div>
            </aside>
        </div>
        <div className="my-28 max-w-6xl mx-auto px-4 p-5 bg-white rounded border border-[#F5F5F5] text-center">
            <h4 className="font-medium">Want to add more items?</h4>
            <p className="text-sm text-gray-500 mt-1">Explore our fresh produce and add more items to your order</p>
            <div className="mt-4">
                <button onClick={continueShopping} className="inline-flex items-center gap-2 px-4 py-2 border rounded text-green-700">
                Continue Shopping →
                </button>
            </div>
        </div>
    </section>
    
  );
};
