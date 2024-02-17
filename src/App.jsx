import { useState } from 'react'
import {data} from './data.js'

function App() {
  
  const [website, setWebsite] = useState(data)

  const renderPeople = () => {
    return website.map(website => {
      return (
        <div className="container">
            <div key={website.id} className='tile'>
              
                <div className='icon'>
                  <img src={website.icon} alt={website.name} />
              </div>

              <div>
                <a href={website.link} target="_blank" rel="noreferrer">
                <h4>{website.name}↗️</h4>
                </a>
                <p>{website.desc}</p>
              </div>

          </div>
        </div>
      )
    })
  }

  return (
    <>
     <div className="container">
      {
        renderPeople()
      }
     </div>
        
    </>
  )
}

export default App
