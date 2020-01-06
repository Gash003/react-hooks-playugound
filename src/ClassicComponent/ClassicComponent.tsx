import React from 'react';
import ClassicChildComponent from './ClassicChildComponent';

export default class ClassicComponent extends React.Component<any, {
    childVisible: boolean;
    main: string;
}> {
    
    constructor(props: any) {
        super(props);
        this.state = {
            childVisible: true,
            main: 'Some props'
        };

        this.updateState = this.updateState.bind(this);
        this.toggleChildVisibility = this.toggleChildVisibility.bind(this);
    }

    updateState() {
        this.setState({
            main: 'New props'
        });
    }

    toggleChildVisibility() {
        this.setState((prevState) => {
            return {
                childVisible: !prevState.childVisible
            };
        });
    }

    render() {
        return (<>
            <a href="https://reactjs.org/docs/react-component.html">Component lifecycle</a>
            <button onClick={this.toggleChildVisibility}>Toggle Child Visibility</button>
            {this.state.childVisible && <ClassicChildComponent someProp={this.state.main}></ClassicChildComponent>}
            <button onClick={this.updateState}>Update Child Props</button>
        </>);
    }
}