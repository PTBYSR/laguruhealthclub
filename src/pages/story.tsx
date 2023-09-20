import Banner1 from '@/components/common/Banner1/Banner1'
import Banner2 from '@/components/common/Banner2/Banner2'
import BannerItem from '@/components/common/Banner2/BannerItem'
import BlogCard from '@/components/common/BlogCard/BlogCard'
import Card from '@/components/common/Card/Card'
import Footer from '@/components/layouts/Footer/Footer'
import Navbar from '@/components/layouts/Navbar/Navbar'
import Button from '@/components/ui/Button/Button'
import React from 'react'

const story = () => {
  return (
    <div>
      <Footer />
        <div className="bg-dark">
          <Navbar />
        </div>
        <div className="bg-dark"><Button/></div>
        <div className=' md:flex flex-col md:flex-row'>
        <Banner1/>
        <Banner1/>
        <Banner1/>

        </div>
        <Card />

        <BannerItem />
        <Banner2 />
        <BlogCard />
    </div>
  )
}

export default story