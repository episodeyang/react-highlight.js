import React, {Component, PropTypes} from 'react'
import {findDOMNode} from 'react-dom'
import highlight from 'highlight.js'

var {node, string} = PropTypes;
export default class Highlight extends Component {

    static propTypes = {
        children: node,
        language: string
    };

    componentDidMount() {
        highlight.highlightBlock(findDOMNode(this.refs.code))
    }

    componentDidUpdate() {
        highlight.initHighlighting.called = false;
        highlight.highlightBlock(findDOMNode(this.refs.code))
    }

    render() {
        const {children, language} = this.props;

        return (
            <pre {...this.props}>
        <code
            className={language}
            ref='code'
        >
          {children}
        </code>
      </pre>
        )
    }
}
