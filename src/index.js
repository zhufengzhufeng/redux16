import React from 'react';
import {render} from 'react-dom';
import Cart from  './components/cart'
import 'bootstrap/dist/css/bootstrap.css';
import {Provider} from 'react-redux';
import store from './store';
render(<Provider store={store}>
    <Cart></Cart>
</Provider>,window.root);