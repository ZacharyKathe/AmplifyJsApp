
import React from "react";
import './App.css';

import { withAuthenticator } from '@aws-amplify/ui-react';

import Nav from "./Pages/Nav";

import {
  NewTrip 
 } from './ui-components';
 
 

function App() {
  return (
    <div>
    <Nav />
      <NewTrip />
    
    </div>

        
        
      
  );
}

export default withAuthenticator(App);
