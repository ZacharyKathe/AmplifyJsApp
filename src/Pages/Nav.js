import React from "react";
import { Button } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { Alert } from '@aws-amplify/ui-react';

class Home extends React.Component {
    render(){
    return (
      <div>
      <div className="Nav">
       <Button onClick={() => alert('👋 hello route to page')}>Home</Button>
       <Button onClick={() => alert('👋  route to Trips page')}>Trips</Button> 
       <Button onClick={() => alert('👋  replace with logout button from figma')}>LogOut</Button>
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
  
  
  export default Home;
  