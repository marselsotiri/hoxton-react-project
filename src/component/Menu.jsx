function Menu({ menuItems, selectCategory }) {
  return <div className='section-center'>
    {menuItems(selectCategory).map((item) => {
      return <article key={item.id} className='menu-item'>
        <img src={item.img} alt={item.tile} className='photo' />
        <div className='item-info'>
          <header>
            <h4>{item.title}</h4>
            <h4 className='price'>${item.price}</h4>
          </header>
          <p className='item-text'>{item.desc}</p>
        </div>
      </article>
    })}
  </div>
}
export default Menu