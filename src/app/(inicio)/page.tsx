'use client'
import React, { useEffect, useState } from 'react'
import { Box, Container, Typography } from '@mui/material'
import NewsList from '../../components/NewsList'
import { News } from '../../types/News'
import axios from 'axios'
import Navbar from '../../components/Navbar'
import Sectionreserva from '../../components/Sectionreserva'
import Sectionservicios from '../../components/Sectionservicios'
import Sectionopinion from '../../components/Sectionopinion'
import Contactanos from '../../components/Contactanos'

const HomePage: React.FC = () => {
  const [news, setNews] = useState<News[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get<Array<News>>(
          `${process.env.NEXT_PUBLIC_BASE_URL}/news`
        )
        setNews(response.data)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching news:', error)
        setLoading(false)
      }
    }

    fetchNews()
  }, [])

  return (
    <Container maxWidth="sm">
      {<Navbar />}
      <br/>
      {<Sectionreserva />}
      {<Sectionservicios />}
      <Sectionopinion />      
      {<Contactanos />}
    </Container>
  )
}

export default HomePage
