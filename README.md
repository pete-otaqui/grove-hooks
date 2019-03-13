This project was bootstrapped with
[Create React App](https://github.com/facebook/create-react-app).

# Github Search example, using React Hooks and a `render props` approach.

This repository is a demonstration of using
[React Hooks](https://reactjs.org/docs/hooks-reference.html) to create a clean
component for searching Github repositories.

The `github-search.js` component is the key part - a pure function which uses
`setState()` - allowing the passing in of a "render props" style child
component.

## Example Usage

```JSX
<GithubSearch>{ChildComponent}</GithubSearch>
```

The `ChildComponent` will be passed in 3 props:

- `search` - a function for issuing a new search against the supplied params
- `result` - the result of the call to GitHub's api
- `isSearching` - a boolean flag indicating whether a search is in flight.

## Renaming Props

Should you need to change the names of any of these props, you simply provide a
function child, and rename the props as required in the body, making sure to
use the JSX style for returning the render of the component:

```JSX
<GithubSearch>
  {
    ({search, result, isSearching}) => (
      <ChildComponent
        ccSearchProp={search}
        ccResultProp={result}
        ccIsSearchingProp={isSearching}
      />
    )
  }
</GithubSearch>
```

