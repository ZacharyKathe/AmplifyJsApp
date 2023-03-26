import React from "react";
import { Button } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { Alert } from '@aws-amplify/ui-react';

class Dashboard extends React.Component {
    render(){
    return (
      <div>
      <div className="Nav">
       
      </div>
      <Alert
        isDismissible={true}
        hasIcon={true}
        heading="Alert heading"
        variation="warning"
        >
        Create a trip to load your dashboad!
      </Alert>
      </div>
    );
   }
  }
  
  
  export default Dashboard;
  