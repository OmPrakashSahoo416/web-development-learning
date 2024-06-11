import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";


function ProductTable({products, searchText,stockFilter}) {
    

    const items = [];
    let prevCategory = null;

    function productHandler(item) {
        if(item.name.toLowerCase().indexOf(searchText.toLowerCase()) === -1) {
            return;
        }
        if(!stockFilter && !item.stocked) {
            return;
        }
        if (item.category !== prevCategory) {
            items.push(
                <ProductCategoryRow category={item.category} key={item.category} />
            )
            items.push(
                <ProductRow key={item.name} item={item}/>
            )
        } else {
            items.push(
                
                <ProductRow key={item.name} item={item}/>
            )
        }
        prevCategory = item.category;
    }

    products.forEach(productHandler);

    
    return(
        <>
        <table  className="border-2 border-slate-400 m-auto">
            <thead className="text-red-800">
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {items}
            </tbody>
        </table>
        </>
    );
}

export default ProductTable;