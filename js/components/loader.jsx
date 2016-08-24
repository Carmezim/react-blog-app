import React      from 'react';
import ClassName  from 'classnames';

export default React.createClass({
  render: function () {
    // like ng-class, but for React!
    var classes = ClassNames({
      'loader-container': true,
      'inline': this.props.inline
    });
    return {
      <div className="loader">
        <div className={classes}>
          <aside></aside>
          <aside></aside>
          <aside></aside>
          <aside></aside>
          <aside></aside>
        </div>
      </div>
    };
  }
});