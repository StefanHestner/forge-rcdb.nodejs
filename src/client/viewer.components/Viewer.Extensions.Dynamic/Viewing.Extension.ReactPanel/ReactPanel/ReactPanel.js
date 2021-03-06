import ReactPanelContent from './ReactPanelContent'
import ReactDOM from 'react-dom'
import './ReactPanel.scss'
import React from 'react'

export default class ReactPanel extends Autodesk.Viewing.UI.DockingPanel {

  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////
  constructor (viewer, options) {

    super (viewer.container, options.id, options.title)

    this.container.classList.add('react-docking-panel')

    this.DOMContent = document.createElement('div')

    this.DOMContent.className = 'content'

    this.container.appendChild(this.DOMContent) 
  }

  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////
  setVisible (show) {

    super.setVisible(show)

    if (show) {

      this.reactNode = ReactDOM.render(
        <ReactPanelContent/>,
        this.DOMContent)

    } else if (this.reactNode) {

      ReactDOM.unmountComponentAtNode(
        this.DOMContent)

      this.reactNode = null  
    }
  }
}