import React, { Children } from "react";
import Router from "next/router";
import smoothScroll from "../utils/smoothScroll";

class LinkSmoothScroll extends React.Component {
  linkClicked = e => {
    e.preventDefault();
    const scrollX = window.pageXOffset;
    const scrollY = window.pageYOffset;
    Router.push(this.props.href).then(() => {
      window.scrollTo(scrollX, scrollY);
      return smoothScroll(this.props.href);
    });
  };
  render() {
    const { children } = this.props;
    if (typeof children === "string") {
      children = <a> {children}</a>;
    }
    const child = Children.only(children);
    const props = { onClick: this.linkClicked };
    if (child.type === "a" && !("href" in child.props)) {
      props.href = this.props.href;
    }
    return React.cloneElement(child, props);
  }
}

export default LinkSmoothScroll;
