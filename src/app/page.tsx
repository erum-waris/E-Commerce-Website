 import React from 'react'
 import Hero from '@/components/Hero'
 import Catalog from '@/components/Catalog'
import ContactForm from '@/components/Contact'
import PantsCollection from '@/components/Pants'
import TopsCollection from '@/components/Tops'
 const Home = () => {
   return (
     <div >
     <Hero/>
    
      <Catalog />
  <PantsCollection />
<TopsCollection/>

 <ContactForm/>

     </div>
   )
 }
 
 export default Home 