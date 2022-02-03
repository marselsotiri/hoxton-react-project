function Categories({ categories, setSelectCategory }) {
  return <div className="btn-container">

    {categories.map((category, index) => {
      return <button
        type="button"
        className="filter-btn"
        key={index}
        onClick={() => setSelectCategory(category)}
      >{category}
      </button>
    })}
  </div>

}
export default Categories