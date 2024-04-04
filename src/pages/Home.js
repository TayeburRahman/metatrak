import React from 'react'
import Banner from '../components/Banner'
import Expertise from '../components/Expertise'
import FormCon from '../components/FormCon'
import Protection from '../components/Protection'
import Supplier from '../components/Supplier'

function Home() {
    return (
        <div>
           <Banner/>
           <Protection />
           <Expertise/>
           <Supplier/>
           <FormCon />
        </div>
    )
}

export default Home
