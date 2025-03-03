

import './App.css'
import { LuTableOfContents } from "react-icons/lu";
import MyCard from './components/MyCard';
import SideBar from './layouts/SideBar';
import { useEffect, useState } from 'react';
import Header from './layouts/Header';

function App() {

  const [sidebarOpen, setSidebarOpen] = useState(false)
  useEffect(() => {
  console.log(sidebarOpen)
  },[sidebarOpen])

  return (
    <>
      {/* first section  */}

    <div className='flex h-screen bg-[#E6EFF5] w-screen md:overflow-x-hidden' >
        {/* sidebar */}

        
        <SideBar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        ></SideBar>
       
        {/* content */}

        <div className='flex-1 flex flex-col'>
          {/* header */}
         
          <Header
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          >

          </Header>

          {/* main content */}

          <main className='flex-1 p-4 overflow-auto  container mx-auto mt-1'>
            
            {/* summaryCard, summaryTemp, recent Transaction  */}
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 overflow-x-auto md:overflow-visible scroll-smooth snap-x snap-mandatory">
            <MyCard></MyCard>
           </div>

          </main>

         {/* footer */}

        </div>

    </div>
     
      
    </>
  )
}

export default App
