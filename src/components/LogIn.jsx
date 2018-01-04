import React from "react";
import {Button, Icon, Modal, SideNavItem, SideNav, Footer} from 'react-materialize';
import 'materialize-css';
import "./LogIn.css";

const LogIn = props => (

<main>
  <div className="jumbotron text-center"></div>
<center>
  <br/>
  <div className="container">
    <div className="z-depth-1 grey lighten-4 row" id="greyBox">
    <form method="post">
    <br/>
      <div className='row'>
        <div className='input-field'>
          <i className="material-icons prefix">account_circle</i>
          <input className='validate' type='email' name='email' id='email' />
          <label htmlFor='email'>Enter your email</label>
         </div>
      </div>
      <div className='row'>
        <div className='input-field'>
          <i className="material-icons prefix">check_circle</i>
          <input className='validate' type='password' name='password' id='password' />
          <label htmlFor='password'>Enter your password</label>
        </div>
      </div>
      <br />
      <center>
        <div className='row'>
          <button type='submit' name='btn_login' className='col s12 btn btn-large light-green waves-effect waves-light"'>Login</button>
        </div>
      </center>
    </form>
    </div> 
  </div>
 
  <Modal
  header='More Pylons Are Required'
  fixedFooter
	trigger={<Button className = "btn orange lighten-1 waves-effect waves-light">Create Account</Button>}>
	    {<div>
        <br/>
        <br/>
        <div className='row'>
          <div className='input-field col s12'>
            <input className='validate' type='email' name='email' id='email' />
            <label htmlFor='email'>Enter your email</label>
          </div>
        </div>
        <br/>
        <div className='row'>
          <div className='input-field col s12'>
            <input className='validate' type='password' name='password' id='password' />
            <label htmlFor='password'>Enter your password</label>
          </div>
        </div>
        <br/>
        <div className='row'>
          <div className='input-field col s12'>
            <input className='validate' name='name' type='text' id='userNameSignUp' />
            <label>Enter your User Name</label>
          </div>
        </div>
        <br/>
        <br/>
        <div className='row'>
          <button type='submit' name='btn_login' className='col s12 btn btn-large light-green waves-effect waves-light"'>Sign Up!</button>
        </div>
      </div>}
</Modal>
</center>

<Footer id = "LogInFooter" copyrights="&copy 2017 SuperGroup"
    className="light-green"
    links={
      <ul>
        <li><a className="grey-text text-lighten-3" href="https://github.com/AaronA05" target="_blank">Aaron Arndt</a></li>
        <li><a className="grey-text text-lighten-3" href="https://github.com/satsumao" target="_blank">Matthew Duckworth</a></li>
        <li><a className="grey-text text-lighten-3" href="https://github.com/PhilipK2" target="_blank">Philip Kappaz II</a></li>
        <li><a className="grey-text text-lighten-3" href="https://github.com/sranney" target="_blank">Spencer Ranney</a></li>
      </ul>
      }>
        <h5 className="white-text">Final Project: Check your Checkers</h5>
        <p className="grey-text text-lighten-4">2017 Fall Cohort of the SMU Coding Bootcamp</p>
</Footer>   
</main>
)

export default LogIn
