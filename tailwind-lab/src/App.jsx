import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
    <header className="bg-yellow-400 ">
      <ul className="flex justify-center gap-6 text-w">
          <li><a href="">ALL CATEGORIES</a></li>
          <li><a href="">TODAY DEALS</a></li>
          <li><a href="">ELOCTRONICS</a></li>
          <li><a href="">CLOTHINGS</a></li>
          <li><a href="">COMPUTERS</a></li>
          <li><a href="">FURNITTURES</a></li>
          <li><a href="">MOM & BABY</a></li>
          <li><a href="">BOOKS & MORE</a></li>
      </ul>
    </header>


      <div>
        <div className=" h-fit border-2 border-black 	flex justify-center gap-6">
          <img className="w-96 h-60 border-2 border-black" src="https://images.pexels.com/photos/18963473/pexels-photo-18963473/free-photo-of-road-among-trees.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
         <img className="w-60 h-60 border-2 border-black" src="https://images.pexels.com/photos/17400783/pexels-photo-17400783/free-photo-of-a-bridge-over-a-grassy-field-with-a-city-in-the-background.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
        
        </div>
        <br />
        <br />
        <h1 className="">Top Categories Of The Month</h1>
        <hr />
        <br />


        <div className='flex flex-wrap  gap-32  border-2 border-black justify-center' >
          <div className="w-60 h-59 border-2 border-black">
            <img src="https://images.pexels.com/photos/15511422/pexels-photo-15511422/free-photo-of-full-moon-over-birds-silhouettes-on-tree.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
          </div>
          <div className="w-60 h-60 border-2 border-black">
            <img className=' w-60 h-60' src="https://images.pexels.com/photos/25048225/pexels-photo-25048225/free-photo-of-resort-building-balconies-with-a-singular-person-on-theirs-s.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
          </div>
          <div className="w-60 h-60 border-2 border-black"></div>
          <div className="w-60 h-60 border-2 border-black"></div>
          <div className="w-60 h-60 border-2 border-black"></div>
          <div className="w-60 h-60 border-2 border-black"></div>

        </div>


      </div>
    </>
  )
}

export default App
