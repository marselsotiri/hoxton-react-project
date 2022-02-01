import { useEffect, useState } from 'react'
import './App.css'
import Categories from './component/Categories'
import Header from './component/Header'
import Menu from './component/Menu'

  

function App() {
  const [menuItems, setMenuItems] = useState([])
  const [categories, setCategories] = useState([])

  function allTheCategories(){
  let menuCopy = JSON.parse(JSON.stringify(menuItems))
  const newMenu = menuCopy.map(Item=>{ return Item.category })
  const allCategory = ["all", ...new Set(newMenu)]
  setCategories(allCategory)
  }

  useEffect(() => {allTheCategories()
  },[])

  useEffect(() => {
    fetch(`http://localhost:3001/menu`)
      .then(resp => resp.json())
      .then(menuFromServer => setMenuItems(menuFromServer))
  }, [])

  function filterCategories(category){

  }
 
  return  <main>
  <section className="menu section">
    <Header />

    <Categories />

    <Menu menuItems={menuItems} />    
  </section>
</main>
   
}

export default App
