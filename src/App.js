<<<<<<< HEAD
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
=======
import './App.scss';
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import { Layout } from 'antd';
import {MenuLayout} from "./Layouts/MenuLayout/MenuLayout";
import {HeaderLayout} from "./Layouts/HeaderLayout/HeaderLayout";
import {ContentLayout} from "./Layouts/ContentLayout/ContentLayout";
import {FooterLayout} from "./Layouts/FooterLayout/FooterLayout";
import {GetLocal, SetInitialLocalStorage} from "./helpers/functions";
import {ContentData} from "./Mock/MockData";
import NoContent from "./components/NoContent/NoContent";
import {ItArticles} from "./components/ItArticles/ItArticles";
import {SecurityArticles} from "./components/SecurityArticles/SecyrityArticles";
import AddArticle from "./components/AddArticle/AddArticle";
import AddArticleForm from "./components/AddArticle/AddArticle";

function App() {

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
                                <ContentLayout initialState={ initialState } setInitialState={ setInitialState } />
                            </Route>
                            <Route exact path="/it">
                                <ItArticles initialState={ initialState.filter(t=>t.theme === "it") } setInitialState={ setInitialState } />
                            </Route>
                            <Route exact path="/security">
                                <SecurityArticles initialState={ initialState.filter(t=>t.theme === "security") } setInitialState={ setInitialState } />
                            </Route>
                            <Route exact path="/add-article">
                                <AddArticleForm initialState={ initialState } setInitialState={ setInitialState }/>
                            </Route>
                            <Route exact path="**">
                                <NoContent/>
                            </Route>
                        </Switch>

                        <FooterLayout/>
                    </Layout>
                </Layout>
            </Router>
          </>
  )
>>>>>>> feature/add-article-form
}

export default App;
