import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
  return (
    <div className="container text-center my-2 py-4">
      <ul className="list-none flex justify-center text-zinc-400">
        <li>
          <a href="https://github.com/MarcMartinez25" target="_blank" className="hover:text-blue-600">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li className="px-2">
          Developed By <a href="/" className="hover:text-blue-600">Marco Martinez</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/marcmartinez25/" target="_blank" className="hover:text-blue-600">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Footer