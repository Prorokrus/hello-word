import './App.scss';
import 'antd/dist/antd.css';
import React, { useEffect } from 'react';
import { Layout } from 'antd';
import {MenuLayout} from "./Layouts/MenuLayout/MenuLayout";
import {HeaderLayout} from "./Layouts/HeaderLayout/HeaderLayout";
import {ContentLayout} from "./Layouts/ContentLayout/ContentLayout";
import {FooterLayout} from "./Layouts/FooterLayout/FooterLayout";
import {SetInitialLocalStorage} from "./helpers/functions";

function App() {

    useEffect(() => {
        SetInitialLocalStorage()
    }, [])

    return (
          <>
            <Layout>
                <MenuLayout/>
                <Layout className="site-layout" style={{ marginLeft: 200 }}>
                    <HeaderLayout/>
                    <ContentLayout/>
                    <FooterLayout/>
                </Layout>
            </Layout>
          </>
  )
}

export default App;
