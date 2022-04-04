import React from "react";
import './Blogs.css';
import { Accordion } from "react-bootstrap";

const Blogs = () => {
    const names = ["<article></article>,", " <section></section>,", " <form></form>,", " <table></table>"];
    return (
        <div className="blog-container">
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>What is Context API and what is its purpose?
                    </Accordion.Header>
                    <Accordion.Body>
                        The React Context API is a way for a React app to effectively produce global variables that can be passed around the application. It is the alternative to moving props (properties) from grandparent to parents to childrens. React.createContext() returns a consumer and a provider. Provider is a component that provides the state to its children. Consumer is a component that consumes and uses the state.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>What is sematic elements?</Accordion.Header>
                    <Accordion.Body>
                        Semantic elements in HTML surely describes the meaning of the the elements to both the browser and the developer. Semantic elements defines it's content properly. Semantic elements play a major role in SEO. There are many semantic elements. For instance, {names} etc.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>What are the differences between inline, block and inline-block elements?</Accordion.Header>
                    <Accordion.Body>
                        In HTML there are many kinds of elements. Such as block elements, inline elements and inline block elements. Generally, inline elements will not start on a new line. Besides, inline elements take as much width they need. Whereas, block elements will start on a new line and occupy the full width available. Inline-block elements formatted just like the inline elements, where it does not start on a new line.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
}

export default Blogs;