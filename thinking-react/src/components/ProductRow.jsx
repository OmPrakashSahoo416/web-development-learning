function ProductRow({ item }) {
  return (
    <>
      {item.stocked ? (
        <tr className="border-2 hover:bg-slate-100 border-slate-500">
          <td>{item.name}</td>
          <td>{item.price}</td>
        </tr>
      ) : (
        <tr className="border-2 hover:bg-red-100 border-slate-500">
          <td className="text-red-500">{item.name}</td>
          <td className="text-red-500">{item.price}</td>
        </tr>
      )}
    </>
  );
}
export default ProductRow;
