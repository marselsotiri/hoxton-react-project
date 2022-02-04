import { useEffect, useState } from 'react'
import './App.css'
import Categories from './component/Categories'
import Header from './component/Header'
import Menu from './component/Menu'
import Suggestions from './component/Suggestions'



function App() {
  const [menuItems, setMenuItems] = useState([])
  const [suggestions, setSuggestions] = useState([])

  const [selectCategory, setSelectCategory] = useState("all")
  const categories = ["all", ...new Set(menuItems.map(item => item.category))]

  useEffect(() => {
    fetch(`http://localhost:3001/menu`)
      .then(resp => resp.json())
      .then(menuFromServer => setMenuItems(menuFromServer))
  }, [])

  function createSuggest() {

  }



  function itemsToDispaly(category) {
    let menuItemsToDisplay = []

    if (selectCategory === "all") {
      menuItemsToDisplay = menuItems
    } else {
      menuItemsToDisplay = menuItems.filter(item => item.category === category)
    }
    return menuItemsToDisplay
  }

  function createTweet(suggest) {
    fetch('http://localhost:3001/suggestions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(suggest)
    })
      .then(resp => resp.json())
      // .then(newSuggest => setSuggestions([...suggestions, newSuggest]))
  }



  return <main>
    <section className="menu section">


      <Header />

      <Categories categories={categories} setSelectCategory={setSelectCategory} />

      <Menu menuItems={itemsToDispaly} selectCategory={selectCategory} />

      <Suggestions createTweet={createTweet}/>

    </section>
  </main>

}

export default App
