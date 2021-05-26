import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import { CreatePost } from '../CreatePost/CreatePost';
import { Layout } from '../Layout/Layout';
import { PostPreview } from '../PostPreview/PostPreview';
import { Header } from '../Header/Header';
import { rootReducer } from '../../reducers/index';

import './App.css';

const store = createStore(rootReducer)

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Layout leftSide={<CreatePost />} rightSide={<PostPreview ownProp={10} />} />
    </Provider>
  );
}

export default App;
