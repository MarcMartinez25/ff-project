'use client';

import Footer from '@/components/Footer';
import EmptyState from '@/components/MetarCard/EmptyState';
import MetarCard from '@/components/MetarCard/MetarCard';
import Modal from '@/components/Modal';
import Search from '@/components/Search/Search';
import TitleBar from '@/components/TitleBar';
import { Airport } from '@/types/Airport';
import { useState } from 'react'

const Metar = () => {
  const [airportList, setAirportList] = useState<Airport[]>([]);
  const [showModal, setShowModal] = useState<string>("");

  return (
    <div className="container mx-auto flex flex-col h-screen">
      <TitleBar />
      <Search airportList={airportList} setAirportList={setAirportList} setShowModal={setShowModal} />
      <div className="flex-grow">
        {airportList.length > 0 ? (
          <div className='flex flex-col-reverse'>
            {airportList.map((airport) => (
              <MetarCard airport={airport} key={airport.icao}/>
            ))}
          </div>
        ) : (
          <EmptyState />
        )}
      </div>
      {showModal !== "" ? <Modal description={showModal} setShowModal={setShowModal} /> : ""}
      <Footer />
    </div >
  )
}

export default Metar