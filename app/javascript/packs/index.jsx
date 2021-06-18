import React from 'react'
import ReactDOM from 'react-dom'
import Home from '../containers/Home'
// import "antd/dist/antd.css";

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Home />,
    document.body.appendChild(document.createElement('div')),
  )
})
