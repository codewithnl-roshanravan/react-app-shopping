import React from "react";
import Shopping from "./containers/Shopping/Shopping";

import Layout from "./components/Layout/Layout";

class App extends React.Component {
    render() {
       return (
            <div>
          <Layout>
            <Shopping />
          </Layout>
        </div>
       ) 
    }
     
}

export default App

