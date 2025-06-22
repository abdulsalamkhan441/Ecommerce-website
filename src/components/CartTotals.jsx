import { Link } from "react-router-dom";

export default function CartTotals({ subtotal }) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Cart Totals</h2>
      <div className="flex justify-between text-sm text-gray-700">
        <span>Subtotal</span>
        <span>CAD {subtotal.toLocaleString()}</span>
      </div>
      <div className="flex justify-between text-base font-medium">
        <span>Total</span>
        <span className="text-yellow-600">CAD {subtotal.toLocaleString()}</span>
      </div>
      <Link to="/Checkout">
        <button className="w-full bg-white text-black border border-gray-400 hover:border-black px-6 py-2 mt-4 rounded hover:bg-yellow-50 transition">
          Check Out
        </button>
      </Link>
    </div>
  );
}
