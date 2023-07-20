import React from "react"
import spaceship from "../../assets/spaceship.svg"
import Image from "next/image"

const EmptyState = () => (
  <div className="container flex justify-center py-4">
    <div className="flex flex-col items-center">
      <Image src={spaceship} alt="spaceship placeholder" className="w-64"/>
      <div className="p-4 text-center text-zinc-400">
        <div>No METAR data has been searched...</div>
        <div>Let&apos;s change that</div>
      </div>
    </div>
  </div>
)

export default EmptyState