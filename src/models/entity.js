const compose = require('@stamp/it');
const Namespace = require('./namespace');
const { createModel, castAsString } = require('../utils');

module.exports = compose({
  /**
   *
   * @param {Object} opts
   * @param {string} opts.id The entity identifier. Will be stringified and trimmed.
   * @param {Object} opts.ns The entity namespace.
   */
  init({ id, ns }) {
    this.id = castAsString(id);
    this.ns = createModel(ns, Namespace);
  },
});
