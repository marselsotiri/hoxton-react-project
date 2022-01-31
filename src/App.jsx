import './App.css'
import Categories from './component/Categories'
import Header from './component/Header'
import Menu from './component/Menu'

function App() {
 
  return  <main>
  <section className="menu section">
    <Header />

    <Categories />

    <Menu />    
  </section>
</main>
   
}

export default App
