import './Footer.css'
import React from 'react'
//import {Footer} from 'react-bootstrap'

const Footer = () =>  (
	<div className="footer">
		<div className="container">
	      <div className="row">
	        <div className="col-8 branding">
	          <h5>Bears and Bulls</h5>
	          <p>Lorem ipsum dolor sit amet, mandamus consequuntur pri at, augue tollit accommodare duo at. In posse semper quo, brute munere mnesarchum ad his. Oportere consulatu qui eu. Ad modus porro mundi per. </p>
	        </div>
	        <div className="col-4">
	          <h5>References</h5>
	          <ul className="list-unstyled">
	            <li>
	              <a href="#!">MDBootstrap</a>
	            </li>
	            <li>
	              <a href="#!">eCharts</a>
	            </li>
	            <li>
	              <a href="#!">WebSocket</a>
	            </li>
	            <li>
	              <a href="#!">Link 4</a>
	            </li>
	          </ul>
	        </div>
	        <div className="col-12 github">
	          <hr></hr>
	          <a href="https://github.com/smalldoorman/bears-and-bulls">Github Repository</a>
	        </div>
	      </div>
	    </div>
		</div>)

export default Footer
