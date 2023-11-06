import React from 'react';
import {useViewportSize} from "./useViewportSize";

function App() {
    const { height, width } = useViewportSize();

    return (
        <>
            Width: {width}, height: {height}
        </>
    );
}

export default App;
