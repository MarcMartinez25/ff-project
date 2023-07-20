import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons"

const TitleBar = () => (
  <div className="flex m-4 p-2 items-center rounded bg-gradient-to-r from-blue-600 from-30% to-purple-600 text-white">
    <p className='flex-grow-0'>METAR DATA</p>
    <div className='flex-grow'></div>
    <div className="pr-2">
      <FontAwesomeIcon icon={faPaperPlane} />
    </div>
  </div>
)

export default TitleBar