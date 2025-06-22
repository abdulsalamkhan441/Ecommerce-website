export default function ProductCard({ img, name, category, price, badge }) {
  return (
    <div
      className="group p-4 bg-white hover:shadow-lg transition rounded-md"
      data-aos="fade-up"
    >
      <div className="relative overflow-hidden">
        <img src={img} alt={name} className="w-full h-48 object-cover rounded-md" />
        {badge && (
          <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded">
            -{badge}%
          </span>
        )}
      </div>
      <h3 className="mt-3 font-semibold text-sm">{name}</h3>
      <p className="text-gray-400 text-sm">{category}</p>
      <p className="text-black font-medium text-sm mt-1">{price}</p>
    </div>
  );
}
