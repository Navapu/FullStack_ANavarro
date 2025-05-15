import './App.css'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Us from './pages/Us'
import Products from './pages/Products'
import { NavSearchParams } from './components/Nav'
function App() {
  const params = new URLSearchParams(window.location.search);
  const pagina = params.get("page") || "home"

  let page;
  switch(pagina){
    case "home": page=<Home />; break
    case "contact": page=<Contact />; break
    case "us": page=<Us />; break
    case "products": page=<Products />; break

  }

  
  return (
    <div>
      {page}        
      <NavSearchParams />
    </div>
  )
}

export default App
