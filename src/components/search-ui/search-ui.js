/**
 * Search UI Component
 *
 * This component is an example implementation to be used by the GithubSearch
 * component, as a child in it's render prop function. It accepts the same
 * props as that component's render function emits.
 *
 * The key parts to note are that we call the `search` prop, and make use of
 * the `result` and `isSearching`.
 */
import React, { useState } from "react";
import PropTypes from "prop-types";

import RepoList from "../repo-list/repo-list";

export default function SearchUi({ result, search, isSearching }) {
  const [query, setQuery] = useState("");

  const onSubmit = event => {
    event.preventDefault();
    if (query) {
      search({ q: query });
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <input
            type="search"
            placeholder="Query"
            value={query}
            onChange={e => setQuery(e.target.value)}
            className="form-control"
            id="query"
            name="q"
            autoComplete="off"
          />
        </div>
        <div className="form-group">
          <button disabled={!query} type="submit" className="form-button">
            Search
          </button>
        </div>
      </form>
      {isSearching && <p>Searching for "{query}" ...</p>}
      {query && !isSearching && <p>Results for "{query}"</p>}
      {!isSearching && <RepoList {...result} />}
    </div>
  );
}

SearchUi.propTypes = {
  result: PropTypes.shape().isRequired,
  search: PropTypes.func.isRequired,
  isSearching: PropTypes.bool
};
SearchUi.defaultProps = {
  isSearching: false
};
