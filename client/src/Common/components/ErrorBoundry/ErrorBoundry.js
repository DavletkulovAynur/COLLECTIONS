// import React,{Component} from 'react';
// import ErrorIndicator from "../error-indicator/ErrorIndicator";
//
// export default  class ErrorBoundry extends Component {
//
//   constructor() {
//     super();
//     this.state = {
//       hasError: false
//     }
//   }
//
//   componentDidCatch(error, errorInfo) {
//     this.setState({
//       hasError: true
//     })
//   }
//
//   render() {
//     if (this.state.hasError) {
//       return <ErrorIndicator/>
//     }
//
//     return this.props.children
//
//   }
// }
