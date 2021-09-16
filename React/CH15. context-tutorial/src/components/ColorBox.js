import React from 'react';
import { ColorConsumer } from '../contexts/color';
const ColorBox = () => {
    return (
        <ColorConsumer>
            {value => (
            {({ state }) => (
                <>
                    <div
                        style={{
                            width: '64px',
                            height: '64px',
                            background: value.color
                            background: state.color
                        }}
                    />
                    <div
                        style={{
                            width: '32px',
                            height: '32px',
                            background: value.state.subcolor
                            background: state.subcolor
                        }}
                    />
                </>
            )}
        </ColorConsumer>
    );
};
export default ColorBox;