

import './App.css'
import { LuTableOfContents } from "react-icons/lu";
import MyCard from './components/MyCard';
import SideBar from './layouts/SideBar';
import { useEffect, useState } from 'react';
import Header from './layouts/Header';
import BalanceCard from './components/BalanceCard';
import RecentTransaction from './components/RecentTransaction';
import WeeklyActivity from './components/WeeklyActivity';
import Expense from './components/Expense';
import QuickTransfer from './components/QuickTransfer';
import BalanceHistory from './components/BalanceHistory';

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
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2  ">
            <MyCard></MyCard>
            <BalanceCard></BalanceCard>
            <RecentTransaction></RecentTransaction>

           </div>

           <div className="grid grid-cols-1 md:grid-cols-12 gap-3 my-4 justify-center items-center">
              <div className=" md:col-span-7">
                <WeeklyActivity />
              </div>
              <div className="md:col-span-5">
                <Expense />
              </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-[25px] my-4">
            <div className="col-span-4">
              <QuickTransfer />
            </div>
            <div className="col-span-8">
              <BalanceHistory />
            </div>
          </div>

          </main>

         {/* footer */}

        </div>

    </div>
     
      
    </>
  )
}

export default App
