import React,{ Component } from 'react'
    
const withClass = (WrappedComponent, className) => {
    const WithClass = class extends Component {
        render() {
            return (
                <div className={className}>
                    <WrappedComponent ref={this.forwardRef} {...this.props}/>
                </div>
            )
        }
    }

    return React.forwardRef((props, ref) => {
        return <WithClass {...props} forwardRef={ref}/>
    });
}

export default withClass;