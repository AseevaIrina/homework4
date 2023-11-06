import React from 'react';
import {useWindowScroll} from "./useWindowScroll";

function App() {
    const [scroll, scrollTo] = useWindowScroll();

    return (
        <div style={{height:3000, width:2500}}>
            <div style={{position:'fixed', top:0, left:0}}>
                <p>
                    Scroll position x: {scroll.x}, y: {scroll.y}
                </p>
                <button onClick={() => scrollTo({ y: 0 })}>Scroll to top</button>
            </div>
        </div>
    );
}

export default App;
