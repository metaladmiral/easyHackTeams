import React, { useContext } from 'react';
import { Context } from '../..';
import { Navigate } from 'react-router-dom';

const Home = () => {
  const {isAuthenticated}=useContext(Context)

  if(!isAuthenticated){
    return <Navigate to={"/login"} />
  }
  return (
    <div style={styles.container}>
      <h1>Welcome to Our Website</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
        Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis
        sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
        Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per
        conubia nostra, per inceptos himenaeos.
      </p>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
  },
};

export default Home;
