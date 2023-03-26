import React from "react";
import { Alert } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import {
  TripCreateForm 
 } from '../ui-components';
 import {
  TripCardCollection
 } from '../ui-components'

const Home = () => (
  <div>
    <Alert variation="warning">Create a trip in order to pack a bag!</Alert>
    <TripCreateForm />
    <TripCardCollection />
    
  </div>
);

export default Home;
