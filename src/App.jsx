import { useEffect, useState } from 'react'
import './App.css'
import Categories from './component/Categories'
import Header from './component/Header'
import Menu from './component/Menu'

function App() {
  const [menuItems, SetMenuItems] = useState([])
  const [categories, SetCategories] = useState([])

  useEffect(() => {
    fetch(`http://localhost:3001/menu`)
      .then(resp => resp.json())
      .then(menuFromServer => SetMenuItems(menuFromServer))
  }, [])


 
  return  <main>
  <section className="menu section">
    <Header />

    <Categories />

    <Menu menuItems={menuItems} />    
  </section>
</main>
   
}

export default App
