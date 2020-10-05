import React from 'react'



function TestComponent() {

    let testRef = null;

    function handleClick() {
        testRef.focus();
    }

    return (
        <div>
            <input type='text' ref={ e =>  testRef = e}/>
            <input type="button" value="Focus the text input" onClick={handleClick} />
        </div>
    )
}

export default TestComponent;