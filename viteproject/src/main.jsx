import React from 'react'
import ReactDOM from 'react-dom/client'
// import './index.css'
import App from './App.jsx'

function MyApp(){

  return (
    <div>
      <h1>Hello, World!</h1>
    </div>
  )
}
const anotheruser="Shiv and anurag"
const reactElement=React.createElement(
  'a',
  {href:'https://google.com',target:'_blank'},
  'Click here to go to Google',
   anotheruser
)
ReactDOM.createRoot(document.getElementById('root')).render(
    // <App/>
    reactElement

)
