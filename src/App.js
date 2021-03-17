import './App.scss';
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import { Layout } from 'antd';
import {MenuLayout} from "./Layouts/MenuLayout/MenuLayout";
import {HeaderLayout} from "./Layouts/HeaderLayout/HeaderLayout";
import {ContentLayout} from "./Layouts/ContentLayout/ContentLayout";
import {FooterLayout} from "./Layouts/FooterLayout/FooterLayout";
import {SetInitialLocalStorage} from "./helpers/functions";
import {ContentData} from "./Mock/MockData";

function App() {
    /*useEffect(() => {
        SetInitialLocalStorage()
    }, [])*/
    const [ initialState, setInitialState ] = useState(ContentData)

    return (
          <>
            <Router>
                <Layout>
                    <MenuLayout/>
                    <Layout className="site-layout" style={{ marginLeft: 200 }}>
                        <HeaderLayout/>

                        <Switch>
                            <Route exact path="/">
                                {/*<About />*/}
                                <ContentLayout initialState={ initialState } setInitialState={ setInitialState } />
                            </Route>
                            <Route exact path="/it">
                                {/*<Users />*/}

                            </Route>
                            <Route exact path="/security">
                                {/*<Home />*/}
                            </Route>
                        </Switch>

                        <FooterLayout/>
                    </Layout>
                </Layout>
            </Router>
          </>
  )
}

export default App;
