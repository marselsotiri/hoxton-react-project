function Menu({ menuItems }){
return <div className='section-center'>
{menuItems.map((Item) => {
return <article className='menu-item'>
  <img src={Item.img} alt={Item.tile} className='photo' />
  <div className='item-info'>
    <header>
      <h4>{Item.title}</h4>
      <h4 className='price'>${Item.price}</h4>
    </header>
    <p className='item-text'>{Item.desc}</p>
  </div>
</article>
})}
</div>
}
export default Menu