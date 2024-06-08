function SearchBar() {
    return(
        <>
        <form action="">

        <div className="">
        <input className="border-2 p-3 m-auto mt-2 flex w-64 border-slate-500" placeholder="Search for anything ..." type="text" name="" id="searchText" />
        </div>
        <div className="flex m-auto mt-2">
            <div className="m-auto">
            <input className="border-2 inline p-3 mr-3  border-slate-500" type="checkbox" />
            <p className="inline">Include out of stock</p>
            </div>

        </div>
        </form>
        </>
    );
}

export default SearchBar;