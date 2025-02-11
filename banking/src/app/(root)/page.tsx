import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import { getMaxListeners } from 'events';
import React from 'react'

const Home = () => {
  const loggedIn = { firstName: 'Sai' ,lastName: 'Abhiram', email: 'saiabhiram.raja@gmail.com' };

  return (
    <section className='home'>
      <div className='home-content'>
       <header className='home-header'>
       <HeaderBox 
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || 'Guest'}
            subtext="Access and manage your account and transactions efficiently."
          />

          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250} 
          />
       </header>
       RECENT  TRANCTIONS   
      </div>
      <RightSidebar 
        user={loggedIn}
        transactions={[]}
        banks={[{currentBalance : 125.50},{ currentBalance : 500.00}]}
      />
    </section>
  )
}

export default Home