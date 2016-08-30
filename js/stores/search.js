"user strict";

import Reflux from 'reflux';
import Actions from 'appRoot/actions';

export default Reflux.createStore({
  listenables: Actions,
  // called when mixin is used to init the component state
  getInitialState: function () {
    return this.query;
  },
  onSearch: function () {
    this.query = search;
    this.trigger(search);
  }
});