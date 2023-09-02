import { useState } from 'react'
import './App.css'
import data from './data'
import Categories from './components/Categories';
import Menu from './components/Menu';

function App() {
  const [menuItem, setmenuItem] = useState(data);
  const allCategories = ['All', ...new Set(data.map((item) => item.category))];
  const filteritem =(category)=>{
if(category === 'All'){
  setmenuItem(data);
}else{
  const newItems = data.filter((item)=> item.category === category)
  setmenuItem(newItems);
}
  }
  return (

    <div>
      <h2>Workshop 2:Food Menu</h2>
      <main>
        <section className='menu section'>
          <div className='title'>
            <h2>Our Menu</h2>
            <div className="underline"></div>
          </div>
          <Categories allCategories={allCategories} filteritem={filteritem}/>
          <Menu items={menuItem}/>
        </section>
      </main>
    </div>


  )
};

export default App

