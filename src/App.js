import './App.scss';
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import { Layout } from 'antd';
import {MenuLayout} from "./Layouts/MenuLayout/MenuLayout";
import {HeaderLayout} from "./Layouts/HeaderLayout/HeaderLayout";
import {ContentLayout} from "./Layouts/ContentLayout/ContentLayout";
import {FooterLayout} from "./Layouts/FooterLayout/FooterLayout";
import NoContent from "./components/NoContent/NoContent";
import {ItArticle} from "./components/ItArticles/ItArticle";
import {SecurityArticles} from "./components/SecurityArticles/SecurityArticles";
import AddArticleForm from "./components/AddArticle/AddArticle";
import {StoreProvider, useRootStore} from "./mobx/ProviderRootStore";



function App() {
    const { setInitialState, content$ } = useRootStore()

    useEffect(() => {
        setInitialState()
    }, [])

    return (
            <Router>
                <Layout>
                    <MenuLayout/>
                    <Layout className="site-layout" style={{ marginLeft: 200 }}>
                        <HeaderLayout/>

                        <Switch>
                            <Route exact path="/">
                               {/* <ContentLayout initialState={ initialState } setInitialState={ setInitialState } />*/}
                                <ContentLayout/>
                            </Route>
                            <Route exact path="/it">
                                <ItArticle />
                            </Route>
                            <Route exact path="/security">
                                <SecurityArticles />
                            </Route>
                            <Route exact path="/add-article">
                                <AddArticleForm />
                            </Route>
                            <Route exact path="**">
                                <NoContent/>
                            </Route>
                        </Switch>

                        <FooterLayout/>
                    </Layout>
                </Layout>
            </Router>
  )
}

export default App;
