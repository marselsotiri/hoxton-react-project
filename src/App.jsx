import { useEffect, useState } from 'react'
import './App.css'
import Categories from './component/Categories'
import Header from './component/Header'
import Menu from './component/Menu'
import Suggests from './component/Suggests'



function App() {
  const [menuItems, setMenuItems] = useState([])
  const [selectCategory, setSelectCategory] = useState("all")
  const categories = ["all", ...new Set(menuItems.map(item => item.category))]

  useEffect(() => {
    fetch(`http://localhost:3001/menu`)
      .then(resp => resp.json())
      .then(menuFromServer => setMenuItems(menuFromServer))
  }, [])



  function itemsToDispaly(category) {
    let menuItemsToDisplay = []

    if (selectCategory === "all") {
      menuItemsToDisplay = menuItems
    } else {
      menuItemsToDisplay = menuItems.filter(item => item.category === category)
    }
    return menuItemsToDisplay
  }


  return <main>
    <section className="menu section">

      <Suggests />

      <Header />

      <Categories categories={categories} setSelectCategory={setSelectCategory} />

      <Menu menuItems={itemsToDispaly} selectCategory={selectCategory} />
    </section>
  </main>

}

export default App
