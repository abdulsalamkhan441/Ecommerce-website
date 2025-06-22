export default function CartItem({ item, onQtyChange, onRemove }) {
  return (
    <div className="grid grid-cols-5 items-center gap-4 py-4 border-b px-2">
      <div className="col-span-2 flex items-center gap-4">
        <img
          src={item.image}
          alt={item.name}
          className="w-16 h-16 object-cover rounded bg-[#f9f6f1]"
        />
        <span className="text-gray-800">{item.name}</span>
      </div>
      <span className="text-gray-700">CAD {item.price.toLocaleString()}</span>
      <input
        type="number"
        min="1"
        value={item.qty}
        onChange={(e) => onQtyChange(e.target.value)}
        className="w-14 border text-center py-1 rounded"
      />
      <div className="flex items-center justify-between gap-2">
        <span className="text-gray-800">
          CAD {(item.price * item.qty).toLocaleString()}
        </span>
        <button onClick={onRemove} className="text-yellow-600 hover:text-red-600 text-lg">
          🗑
        </button>
      </div>
    </div>
  );
}
