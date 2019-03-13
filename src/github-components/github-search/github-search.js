/* 
 * GitHub Search Component
 * 
 * This component uses react's `useState` hook, and the `fetch` api.
 * 
 * We expect a function to be given as the child of this component, in the
 * "render props" pattern.  This function will be passed the following props:
 *
 * `search` - a function to call with search parameters
 * `result` - an object that contains the search result
 * `isSearching` - a boolean indicating whether a search is in progress
 *
 * You can use this component by creating a component that uses the above-
 * listed props, and then applying both as follows:
 *
 * ```
 * import React from "react";
 * import GithubSearch from "./github-components/github-search/github-search";
 *
 * // React component that takes search, result and isSearching props
 * function SearchUi({ search, result, isSearching }) {
 *   return (
 *     <div>
 *       implement something to call <pre>search()</pre>,
 *       print out <pre>result</pre>, and use the
 *       <pre>isSearching<pre> boolean
 *     </div>
 *   );
 * }
 *
 * export default function() {
 *   return (
 *     <GithubSearch>{SearchUi}</GithubSearch>
 *   );
 * }
 *
 * ```
 * 
 * Note that it contains no UI or even JSX, so we don't actually have to import
 * React as normal - only the hook.
 */

import { useState } from "react";
import PropTypes from "prop-types";

const defaultResult = { items: [], total_count: 0 };

export default function GithubSearch({ children }) {

  const [ result, setResult ] = useState(defaultResult);
  const [ isSearching, setIsSearching ] = useState(false);
	
	// create a function to pass through as render prop,
	// which will trigger a search with params
	const search = async (params) => {
		// set state that searching is active
    setIsSearching(true);
    try {
			// should use a library for constructing a query
      const query = Object.entries(params)
				.map(([k,v]) => `${k}=${v}`) 
				.join("=");

			// use the `fetch` api to get the data, convert to json
      const url = `https://api.github.com/search/repositories?${query}`;
      const response = await fetch(url);
      const json = await response.json();

			// set the results
      setResult(json);
		} catch(e) {
			// if we had an error, reset the result to default
			setResult(defaultResult);
    } finally {
			// whether we errored or not, we aren't searching any more
      setIsSearching(false);
    }
  }
	// cool - let's run the render child fn with props
  return children({ result, search, isSearching });
}

GithubSearch.propTypes = {
  children: PropTypes.func.isRequired,
};
GithubSearch.defaultProps = {};

