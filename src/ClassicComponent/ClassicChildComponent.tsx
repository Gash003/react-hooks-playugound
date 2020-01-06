import React from 'react';

interface ClassicChildComponentProps {
    someProp: string;
}

interface ClassicChildComponentState {
    ultimateAnswer: number;
}


export default class ClassicChildComponent extends React.Component<
ClassicChildComponentProps,
ClassicChildComponentState
> {
    
    updateState() {
        this.setState({
            ultimateAnswer: 16
        });
    }
    
    constructor(props: ClassicChildComponentProps) {
        console.log('constructor() function');
        
        super(props);
        this.state = {
            ultimateAnswer: 42
        };
        
        this.updateState = this.updateState.bind(this);
    }

    static getDerivedStateFromProps() {
        console.log('getDerivedStateFromProps() function');
        return null;
    }
    
    // Optimize props updates
    shouldComponentUpdate(nextProps: ClassicChildComponentProps) {
        console.log('shouldComponentUpdate() function');
        return true;
    }
    
    render() {
        console.log('render() function');

        return (<div>
            Classic Child Component
            <ul>
                <li>Child state: {this.state.ultimateAnswer}</li>
                <li>Child props: {this.props.someProp}</li>
            </ul>
            <hr/>
            <button onClick={this.updateState}>Update Child State</button>
            <button onClick={() => this.forceUpdate()}>Force Child Update</button>
        </div>);
    }

    getSnapshotBeforeUpdate() {
        console.log('getSnapshotBeforeUpdate() function');
        return null;
    }
    
    componentDidMount() {
        console.log('componentDidMount() function');
    }
    
    componentDidUpdate() {
        console.log('componentDidUpdate() function');
    }
    
    componentWillUnmount() {
        console.log('componentWillUnmount() function');
    }
    
    

    static getDerivedStateFromError() {
        console.log('getDerivedStateFromError() function');
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
      }
    
      componentDidCatch() {
          console.log('componentDidCatch() function');
          // Example "componentStack":
          //   in ComponentThatThrows (created by App)
        //   in ErrorBoundary (created by App)
        //   in div (created by App)
        //   in App
      }
}