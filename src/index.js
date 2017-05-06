// @flow

/** mqr: matchMedia wrapper for simple media query management.
 * @name mqr
 * @returns {mqr}
 */
export default function mqr() {
  const all = [];

  return {
    /**
     * Register listener for a given query string.
     *
     * @param  {String} query     Media query string
     * @param  {Function} handler Callback function
     */
    listen(query: string, handler: Function, execute: boolean = true) {
      // create MediaQueryList
      const mql = window.matchMedia(query);

      // wrap handler
      const cb = m => {
        handler(m.matches);
      };

      // add listener
      mql.addListener(cb);

      if (execute) {
        // execute callback
        cb(mql);
      }

      // push to store
      all.push({
        query,
        handler,
        mql,
        cb,
      });
    },

    /**
     * Remove registered media query listener.
     *
     * @param  {String} query     Registered media query string
     * @param  {Function} handler Callback function to remove
     */
    remove(query: string, handler: Function) {
      const item = all.find(o => o.query === query && o.handler === handler);
      if (item) {
        // remove listener
        item.mql.removeListener(item.cb);

        // remove from store
        all.splice(all.indexOf(item), 1);
      }
    },

    /**
     * Simple media query string check.
     *
     * @param  {String} query   Media query string
     * @return {Boolean}        Check result
     */
    matches(query: string): boolean {
      return window.matchMedia(query).matches;
    },
  };
}
