import React from "react";
import PropTypes from "prop-types";

export default function Repo({ html_url, stargazers_count, full_name }) {
  return (
		<div className="repo">
			<p><a href={html_url}>{full_name}</a> {stargazers_count} stars</p>
		</div>
	);
}
Repo.propTypes = {
  html_url: PropTypes.string.isRequired,
  stargazers_count: PropTypes.number.isRequired,
  full_name: PropTypes.string.isRequired,
};
Repo.defaultProps = {};

/*

    {
      "id": 35130077,
      "node_id": "MDEwOlJlcG9zaXRvcnkzNTEzMDA3Nw==",
      "name": "a",
      "full_name": "angular/a",
      "private": false,
      "owner": {
        "login": "angular",
        "id": 139426,
        "node_id": "MDEyOk9yZ2FuaXphdGlvbjEzOTQyNg==",
        "avatar_url": "https://avatars3.githubusercontent.com/u/139426?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/angular",
        "html_url": "https://github.com/angular",
        "followers_url": "https://api.github.com/users/angular/followers",
        "following_url": "https://api.github.com/users/angular/following{/other_user}",
        "gists_url": "https://api.github.com/users/angular/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/angular/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/angular/subscriptions",
        "organizations_url": "https://api.github.com/users/angular/orgs",
        "repos_url": "https://api.github.com/users/angular/repos",
        "events_url": "https://api.github.com/users/angular/events{/privacy}",
        "received_events_url": "https://api.github.com/users/angular/received_events",
        "type": "Organization",
        "site_admin": false
      },
      "html_url": "https://github.com/angular/a",
      "description": "Library for annotating ES5",
      "fork": false,
      "url": "https://api.github.com/repos/angular/a",
      "forks_url": "https://api.github.com/repos/angular/a/forks",
      "keys_url": "https://api.github.com/repos/angular/a/keys{/key_id}",
      "collaborators_url": "https://api.github.com/repos/angular/a/collaborators{/collaborator}",
      "teams_url": "https://api.github.com/repos/angular/a/teams",
      "hooks_url": "https://api.github.com/repos/angular/a/hooks",
      "issue_events_url": "https://api.github.com/repos/angular/a/issues/events{/number}",
      "events_url": "https://api.github.com/repos/angular/a/events",
      "assignees_url": "https://api.github.com/repos/angular/a/assignees{/user}",
      "branches_url": "https://api.github.com/repos/angular/a/branches{/branch}",
      "tags_url": "https://api.github.com/repos/angular/a/tags",
      "blobs_url": "https://api.github.com/repos/angular/a/git/blobs{/sha}",
      "git_tags_url": "https://api.github.com/repos/angular/a/git/tags{/sha}",
      "git_refs_url": "https://api.github.com/repos/angular/a/git/refs{/sha}",
      "trees_url": "https://api.github.com/repos/angular/a/git/trees{/sha}",
      "statuses_url": "https://api.github.com/repos/angular/a/statuses/{sha}",
      "languages_url": "https://api.github.com/repos/angular/a/languages",
      "stargazers_url": "https://api.github.com/repos/angular/a/stargazers",
      "contributors_url": "https://api.github.com/repos/angular/a/contributors",
      "subscribers_url": "https://api.github.com/repos/angular/a/subscribers",
      "subscription_url": "https://api.github.com/repos/angular/a/subscription",
      "commits_url": "https://api.github.com/repos/angular/a/commits{/sha}",
      "git_commits_url": "https://api.github.com/repos/angular/a/git/commits{/sha}",
      "comments_url": "https://api.github.com/repos/angular/a/comments{/number}",
      "issue_comment_url": "https://api.github.com/repos/angular/a/issues/comments{/number}",
      "contents_url": "https://api.github.com/repos/angular/a/contents/{+path}",
      "compare_url": "https://api.github.com/repos/angular/a/compare/{base}...{head}",
      "merges_url": "https://api.github.com/repos/angular/a/merges",
      "archive_url": "https://api.github.com/repos/angular/a/{archive_format}{/ref}",
      "downloads_url": "https://api.github.com/repos/angular/a/downloads",
      "issues_url": "https://api.github.com/repos/angular/a/issues{/number}",
      "pulls_url": "https://api.github.com/repos/angular/a/pulls{/number}",
      "milestones_url": "https://api.github.com/repos/angular/a/milestones{/number}",
      "notifications_url": "https://api.github.com/repos/angular/a/notifications{?since,all,participating}",
      "labels_url": "https://api.github.com/repos/angular/a/labels{/name}",
      "releases_url": "https://api.github.com/repos/angular/a/releases{/id}",
      "deployments_url": "https://api.github.com/repos/angular/a/deployments",
      "created_at": "2015-05-06T00:02:24Z",
      "updated_at": "2019-02-24T15:44:55Z",
      "pushed_at": "2018-04-12T18:05:36Z",
      "git_url": "git://github.com/angular/a.git",
      "ssh_url": "git@github.com:angular/a.git",
      "clone_url": "https://github.com/angular/a.git",
      "svn_url": "https://github.com/angular/a",
      "homepage": null,
      "size": 121,
      "stargazers_count": 66,
      "watchers_count": 66,
      "language": "JavaScript",
      "has_issues": true,
      "has_projects": true,
      "has_downloads": true,
      "has_wiki": true,
      "has_pages": false,
      "forks_count": 26,
      "mirror_url": null,
      "archived": true,
      "open_issues_count": 7,
      "license": null,
      "forks": 26,
      "open_issues": 7,
      "watchers": 66,
      "default_branch": "master",
      "score": 68.05802
    }

*/

