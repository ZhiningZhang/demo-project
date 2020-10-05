import React from 'react'


//forwardRef
//https://www.youtube.com/watch?v=suNxXLmK0No&list=PL6n9fhu94yhVpO8VBlUXbxKUuG-n2b1bL&index=20
const DemoComponent = React.forwardRef((props, ref) => {

    function testClick() {
        ref.current.focus();
    }

    return (
        <button onClick={testClick} >Click </button>
    )

});

export default DemoComponent;