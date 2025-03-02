import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../Redux/cartSlice";
import { FaTrash, FaShoppingCart } from "react-icons/fa";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  return (
    <div className="min-h-screen bg- py-10 px-4 mt-5">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg border border-gray-200">
        <h2 className="text-2xl font-bold text-center text-[#04344b] flex items-center justify-center gap-2">
          <FaShoppingCart /> Shopping Cart
        </h2>

        {cartItems.length === 0 ? (
          <p className="text-center text-gray-600 mt-6">Your cart is empty.</p>
        ) : (
          <div className="mt-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b border-gray-300 py-4"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-700">{item.title}</h3>
                    <p className="text-sm text-gray-500">₦{item.price.toLocaleString()}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <input
                    type="number"
                    value={item.quantity}
                    min="1"
                    onChange={(e) => dispatch(updateQuantity({ id: item.id, quantity: Number(e.target.value) }))}
                    className="w-16 border border-gray-300 rounded-lg px-2 py-1 text-center text-black"
                  />
                  <button
                    onClick={() => dispatch(removeFromCart(item.id))}
                    className="text-red-600 hover:text-red-800"
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            ))}

            {/* Cart Total */}
            <div className="mt-6 text-right">
              <p className="text-lg font-semibold text-gray-700">
                Total: ₦{cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toLocaleString()}
              </p>
              <button className="mt-4 bg-[#084f70] text-white py-2 px-6 rounded-lg font-semibold hover:bg-[#04344b] transition">
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
