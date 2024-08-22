import { App as SendbirdApp } from '@sendbird/uikit-react';
import '@sendbird/uikit-react/dist/index.css';
// Extract the URL parameter
const urlParams = new URLSearchParams(window.location.search);
const userName = urlParams.get('name'); // 'John'
let user = userName;
function App() {
  return (
    // The chat interface can expand up to the dimensions of your parent component.
    // To achieve a full-screen mode, apply the following CSS rules to the parent element.
    <div style={{ width:'100vw', height:'100vh' }}>
      <SendbirdApp
        // You can find your Sendbird application ID on the Sendbird dashboard. 
        appId={'9734AAF0-7702-4DDD-B821-AA80808F6637'}
        // Specify the user ID you've created on the dashboard.
        // Or you can create a user by specifying a unique userId.  
        userId={user}
      />
    </div>
  )
}
console.log(user);
export default App;