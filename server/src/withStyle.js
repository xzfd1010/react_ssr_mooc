import React, {Component} from "react";

export default function withStyle(DecoratedComponent, styles) {
  class NewComponent extends Component {
    UNSAFE_componentWillMount() {
      if (styles._getCss) {
        this.props.staticContext.css.push(styles._getCss())
      }
    }

    render() {
      return <DecoratedComponent {...this.props}/>
    }
  }
  return NewComponent
}