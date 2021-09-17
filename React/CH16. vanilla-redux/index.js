const toggleSwitch = () => ({ type: TOGGLE_SWITCH });
const increase = difference => ({ type: INCREASE, difference });
const decrease = () => ({ type: DECREASE }); 
const decrease = () => ({ type: DECREASE });

const initialState = {
    toggle: false,
    counter: 0
}; 