
import React from "react";
import './App.css';

import { withAuthenticator } from '@aws-amplify/ui-react';

import Nav from "./Nav";

import PortfolioContainer from './PortfolioContainer'
 



function App() {
  return (
    <div>
    <PortfolioContainer />
    </div>

        
        
      
  );
}

export default withAuthenticator(App);
