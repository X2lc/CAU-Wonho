import { createStore } from 'redux';

const divToggle = document.querySelector('.toggle');
const counter = document.querySelector('h1');
const btnIncrease = document.querySelector('#increase');
@@ -38,4 +40,6 @@ function reducer(state = initialState, action) {
        default:
            return state;
    }
} 
}

const store = createStore(reducer); 