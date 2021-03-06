import React, { Fragment } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import ScrollableContent from './components/ScrollableContent';
import Sidebar from './components/Sidebar';

import EditorSidebar from '../components/EditorSidebar';
import Editor from '../components/Editor';

const Index = () => (
  <Fragment>
    <Header />
    <Main>
      <Sidebar>
        <EditorSidebar />
      </Sidebar>
      <ScrollableContent>
        <Editor />
      </ScrollableContent>
    </Main>
    <Footer />
  </Fragment>
);

export default Index;
