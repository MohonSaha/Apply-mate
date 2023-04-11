import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='blog-container'>
            <div className='article-one blog'>
                <h3>1. When should you use context API?</h3>
                <p>Context provides a way to pass data through the component tree without having to pass props down manually at every level. Context is primarily used when some data needs to be accessible by many components at different nesting levels. Apply it sparingly because it makes component reuse more difficult. If you only want to avoid passing some props through many levels, component composition is often a simpler solution than context.</p>
            </div>
            <div className='article-two blog'>
                <h3>2. What is a custom hook?</h3>
                <p>
                Custom Hook is a JavaScript function which we create by ourselves, when we want to share logic between other JavaScript functions. It allows you to reuse some piece of code in several parts of your app. When we want to share the logic between other components, we can extract it to a separate function.
                </p>
            </div>
            <div className='article-three blog'>
                <h3>3. What is useRef?</h3>
                <p>The useRef is a hook that allows to directly create a reference to the DOM element in the functional component. The useRef returns a mutable ref object. This object has a property called .current. The value is persisted in the refContainer.current property. These values are accessed from the current property of the returned object. The .current property could be initialised to the passed argument initialValue. The object can persist a value for a full lifetime of the component. 
                </p>
            </div>
            <div className='article-four blog'>
                <h3>4. What is useMemo?</h3>
                <p>
                React has a built-in hook called useMemo that allows you to memoize expensive functions so that you can avoid calling them on every render. You simple pass in a function and an array of inputs and useMemo will only recompute the memoized value when one of the inputs has changed. It is very useful in optimizing the performance of a React component by eliminating repeating heavy computations.
                </p>
            </div>
        </div>
    );
};

export default Blog;