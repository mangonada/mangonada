import GithubApiInterface from './githubBranchFunction'

var JSONbranches = [
  {
    "name": "dev",
    "commit": {
      "sha": "453e2c9462895b8b310eaf729821180b1ef4f60b",
      "url": "https://api.github.com/repos/mangonada/mangonada/commits/453e2c9462895b8b310eaf729821180b1ef4f60b"
    }
  },
  {
    "name": "master",
    "commit": {
      "sha": "56d20161b7aae27c3e5632a4ea6a7e73db1457ed",
      "url": "https://api.github.com/repos/mangonada/mangonada/commits/56d20161b7aae27c3e5632a4ea6a7e73db1457ed"
    }
  }
];

var JSONcommits = [
    {
        "sha": "453e2c9462895b8b310eaf729821180b1ef4f60b",
        "commit": {
            "author": {
                "name": "Martin Kwan",
                "email": "martinkkwan@gmail.com",
                "date": "2016-09-19T22:07:46Z"
            },
            "committer": {
                "name": "cadeban",
                "email": "cbanulis@icloud.com",
                "date": "2016-09-19T22:07:46Z"
            },
            "message": "Feat/npm script (#9)\n\n* (feat, npmLint) add npm lint script to be able to run eslint on all .js files\r\n\r\n* (feat, npmLint ) add npm lint script, remove linebreak-style from .eslintrc",
            "tree": {
                "sha": "682ffb2ce18928f5b7fe2781a02fc2ea442d481c",
                "url": "https://api.github.com/repos/mangonada/mangonada/git/trees/682ffb2ce18928f5b7fe2781a02fc2ea442d481c"
            },
            "url": "https://api.github.com/repos/mangonada/mangonada/git/commits/453e2c9462895b8b310eaf729821180b1ef4f60b",
            "comment_count": 0
        },
        "url": "https://api.github.com/repos/mangonada/mangonada/commits/453e2c9462895b8b310eaf729821180b1ef4f60b",
        "html_url": "https://github.com/mangonada/mangonada/commit/453e2c9462895b8b310eaf729821180b1ef4f60b",
        "comments_url": "https://api.github.com/repos/mangonada/mangonada/commits/453e2c9462895b8b310eaf729821180b1ef4f60b/comments",
        "author": {
            "login": "martinkwan",
            "id": 13195630,
            "avatar_url": "https://avatars.githubusercontent.com/u/13195630?v=3",
            "gravatar_id": "",
            "url": "https://api.github.com/users/martinkwan",
            "html_url": "https://github.com/martinkwan",
            "followers_url": "https://api.github.com/users/martinkwan/followers",
            "following_url": "https://api.github.com/users/martinkwan/following{/other_user}",
            "gists_url": "https://api.github.com/users/martinkwan/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/martinkwan/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/martinkwan/subscriptions",
            "organizations_url": "https://api.github.com/users/martinkwan/orgs",
            "repos_url": "https://api.github.com/users/martinkwan/repos",
            "events_url": "https://api.github.com/users/martinkwan/events{/privacy}",
            "received_events_url": "https://api.github.com/users/martinkwan/received_events",
            "type": "User",
            "site_admin": false
        },
        "committer": {
            "login": "cadeban",
            "id": 7953060,
            "avatar_url": "https://avatars.githubusercontent.com/u/7953060?v=3",
            "gravatar_id": "",
            "url": "https://api.github.com/users/cadeban",
            "html_url": "https://github.com/cadeban",
            "followers_url": "https://api.github.com/users/cadeban/followers",
            "following_url": "https://api.github.com/users/cadeban/following{/other_user}",
            "gists_url": "https://api.github.com/users/cadeban/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/cadeban/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/cadeban/subscriptions",
            "organizations_url": "https://api.github.com/users/cadeban/orgs",
            "repos_url": "https://api.github.com/users/cadeban/repos",
            "events_url": "https://api.github.com/users/cadeban/events{/privacy}",
            "received_events_url": "https://api.github.com/users/cadeban/received_events",
            "type": "User",
            "site_admin": false
        },
        "parents": [
            {
                "sha": "a5b67aa6f82dd87af0441f5c3785946ef7fd8f1d",
                "url": "https://api.github.com/repos/mangonada/mangonada/commits/a5b67aa6f82dd87af0441f5c3785946ef7fd8f1d",
                "html_url": "https://github.com/mangonada/mangonada/commit/a5b67aa6f82dd87af0441f5c3785946ef7fd8f1d"
            }
        ]
    },
    {
        "sha": "a5b67aa6f82dd87af0441f5c3785946ef7fd8f1d",
        "commit": {
            "author": {
                "name": "Martin Kwan",
                "email": "martinkkwan@gmail.com",
                "date": "2016-09-19T18:16:58Z"
            },
            "committer": {
                "name": "GitHub",
                "email": "noreply@github.com",
                "date": "2016-09-19T18:16:58Z"
            },
            "message": "Merge pull request #7 from cadeban/commandFeat\n\nFeat(gitCommands)/remove modified gitGraph lib from gitignore file",
            "tree": {
                "sha": "f7ea903321e9ed04641932838a696a76d31b4c26",
                "url": "https://api.github.com/repos/mangonada/mangonada/git/trees/f7ea903321e9ed04641932838a696a76d31b4c26"
            },
            "url": "https://api.github.com/repos/mangonada/mangonada/git/commits/a5b67aa6f82dd87af0441f5c3785946ef7fd8f1d",
            "comment_count": 0
        },
        "url": "https://api.github.com/repos/mangonada/mangonada/commits/a5b67aa6f82dd87af0441f5c3785946ef7fd8f1d",
        "html_url": "https://github.com/mangonada/mangonada/commit/a5b67aa6f82dd87af0441f5c3785946ef7fd8f1d",
        "comments_url": "https://api.github.com/repos/mangonada/mangonada/commits/a5b67aa6f82dd87af0441f5c3785946ef7fd8f1d/comments",
        "author": {
            "login": "martinkwan",
            "id": 13195630,
            "avatar_url": "https://avatars.githubusercontent.com/u/13195630?v=3",
            "gravatar_id": "",
            "url": "https://api.github.com/users/martinkwan",
            "html_url": "https://github.com/martinkwan",
            "followers_url": "https://api.github.com/users/martinkwan/followers",
            "following_url": "https://api.github.com/users/martinkwan/following{/other_user}",
            "gists_url": "https://api.github.com/users/martinkwan/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/martinkwan/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/martinkwan/subscriptions",
            "organizations_url": "https://api.github.com/users/martinkwan/orgs",
            "repos_url": "https://api.github.com/users/martinkwan/repos",
            "events_url": "https://api.github.com/users/martinkwan/events{/privacy}",
            "received_events_url": "https://api.github.com/users/martinkwan/received_events",
            "type": "User",
            "site_admin": false
        },
        "committer": {
            "login": "web-flow",
            "id": 19864447,
            "avatar_url": "https://avatars.githubusercontent.com/u/19864447?v=3",
            "gravatar_id": "",
            "url": "https://api.github.com/users/web-flow",
            "html_url": "https://github.com/web-flow",
            "followers_url": "https://api.github.com/users/web-flow/followers",
            "following_url": "https://api.github.com/users/web-flow/following{/other_user}",
            "gists_url": "https://api.github.com/users/web-flow/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/web-flow/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/web-flow/subscriptions",
            "organizations_url": "https://api.github.com/users/web-flow/orgs",
            "repos_url": "https://api.github.com/users/web-flow/repos",
            "events_url": "https://api.github.com/users/web-flow/events{/privacy}",
            "received_events_url": "https://api.github.com/users/web-flow/received_events",
            "type": "User",
            "site_admin": false
        },
        "parents": [
            {
                "sha": "db157b4ef84473925dc9574785e21d10adfd7559",
                "url": "https://api.github.com/repos/mangonada/mangonada/commits/db157b4ef84473925dc9574785e21d10adfd7559",
                "html_url": "https://github.com/mangonada/mangonada/commit/db157b4ef84473925dc9574785e21d10adfd7559"
            },
            {
                "sha": "0ad2da1cc874caf375993b164d57d617d14aa0ca",
                "url": "https://api.github.com/repos/mangonada/mangonada/commits/0ad2da1cc874caf375993b164d57d617d14aa0ca",
                "html_url": "https://github.com/mangonada/mangonada/commit/0ad2da1cc874caf375993b164d57d617d14aa0ca"
            }
        ]
    },
    {
        "sha": "0ad2da1cc874caf375993b164d57d617d14aa0ca",
        "commit": {
            "author": {
                "name": "Cadence Banulis",
                "email": "cbanulis@icloud.com",
                "date": "2016-09-19T17:26:04Z"
            },
            "committer": {
                "name": "Cadence Banulis",
                "email": "cbanulis@icloud.com",
                "date": "2016-09-19T17:26:04Z"
            },
            "message": "refactor(gitGraph) remove modified gitGraph from gitignore",
            "tree": {
                "sha": "ba844678e269a20af2ddb8567e8be514adc2d9cb",
                "url": "https://api.github.com/repos/mangonada/mangonada/git/trees/ba844678e269a20af2ddb8567e8be514adc2d9cb"
            },
            "url": "https://api.github.com/repos/mangonada/mangonada/git/commits/0ad2da1cc874caf375993b164d57d617d14aa0ca",
            "comment_count": 0
        },
        "url": "https://api.github.com/repos/mangonada/mangonada/commits/0ad2da1cc874caf375993b164d57d617d14aa0ca",
        "html_url": "https://github.com/mangonada/mangonada/commit/0ad2da1cc874caf375993b164d57d617d14aa0ca",
        "comments_url": "https://api.github.com/repos/mangonada/mangonada/commits/0ad2da1cc874caf375993b164d57d617d14aa0ca/comments",
        "author": {
            "login": "cadeban",
            "id": 7953060,
            "avatar_url": "https://avatars.githubusercontent.com/u/7953060?v=3",
            "gravatar_id": "",
            "url": "https://api.github.com/users/cadeban",
            "html_url": "https://github.com/cadeban",
            "followers_url": "https://api.github.com/users/cadeban/followers",
            "following_url": "https://api.github.com/users/cadeban/following{/other_user}",
            "gists_url": "https://api.github.com/users/cadeban/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/cadeban/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/cadeban/subscriptions",
            "organizations_url": "https://api.github.com/users/cadeban/orgs",
            "repos_url": "https://api.github.com/users/cadeban/repos",
            "events_url": "https://api.github.com/users/cadeban/events{/privacy}",
            "received_events_url": "https://api.github.com/users/cadeban/received_events",
            "type": "User",
            "site_admin": false
        },
        "committer": {
            "login": "cadeban",
            "id": 7953060,
            "avatar_url": "https://avatars.githubusercontent.com/u/7953060?v=3",
            "gravatar_id": "",
            "url": "https://api.github.com/users/cadeban",
            "html_url": "https://github.com/cadeban",
            "followers_url": "https://api.github.com/users/cadeban/followers",
            "following_url": "https://api.github.com/users/cadeban/following{/other_user}",
            "gists_url": "https://api.github.com/users/cadeban/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/cadeban/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/cadeban/subscriptions",
            "organizations_url": "https://api.github.com/users/cadeban/orgs",
            "repos_url": "https://api.github.com/users/cadeban/repos",
            "events_url": "https://api.github.com/users/cadeban/events{/privacy}",
            "received_events_url": "https://api.github.com/users/cadeban/received_events",
            "type": "User",
            "site_admin": false
        },
        "parents": [
            {
                "sha": "595092271fba9195be2179e4e2a9f1adb4db9e82",
                "url": "https://api.github.com/repos/mangonada/mangonada/commits/595092271fba9195be2179e4e2a9f1adb4db9e82",
                "html_url": "https://github.com/mangonada/mangonada/commit/595092271fba9195be2179e4e2a9f1adb4db9e82"
            },
            {
                "sha": "4fa84d6d5b0ccc659447ad60ccfdc2292daa6717",
                "url": "https://api.github.com/repos/mangonada/mangonada/commits/4fa84d6d5b0ccc659447ad60ccfdc2292daa6717",
                "html_url": "https://github.com/mangonada/mangonada/commit/4fa84d6d5b0ccc659447ad60ccfdc2292daa6717"
            }
        ]
    },
    {
        "sha": "db157b4ef84473925dc9574785e21d10adfd7559",
        "commit": {
            "author": {
                "name": "timoweave",
                "email": "timoweave@users.noreply.github.com",
                "date": "2016-09-18T00:31:19Z"
            },
            "committer": {
                "name": "arnav-aggarwal",
                "email": "arnavaggrwl@gmail.com",
                "date": "2016-09-18T00:31:19Z"
            },
            "message": "(feat, setup) add makeGitGraph martin/tim (#6)",
            "tree": {
                "sha": "5e49ad347b60a04fbecab437d3ca7b80bd789405",
                "url": "https://api.github.com/repos/mangonada/mangonada/git/trees/5e49ad347b60a04fbecab437d3ca7b80bd789405"
            },
            "url": "https://api.github.com/repos/mangonada/mangonada/git/commits/db157b4ef84473925dc9574785e21d10adfd7559",
            "comment_count": 0
        },
        "url": "https://api.github.com/repos/mangonada/mangonada/commits/db157b4ef84473925dc9574785e21d10adfd7559",
        "html_url": "https://github.com/mangonada/mangonada/commit/db157b4ef84473925dc9574785e21d10adfd7559",
        "comments_url": "https://api.github.com/repos/mangonada/mangonada/commits/db157b4ef84473925dc9574785e21d10adfd7559/comments",
        "author": {
            "login": "timoweave",
            "id": 13225610,
            "avatar_url": "https://avatars.githubusercontent.com/u/13225610?v=3",
            "gravatar_id": "",
            "url": "https://api.github.com/users/timoweave",
            "html_url": "https://github.com/timoweave",
            "followers_url": "https://api.github.com/users/timoweave/followers",
            "following_url": "https://api.github.com/users/timoweave/following{/other_user}",
            "gists_url": "https://api.github.com/users/timoweave/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/timoweave/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/timoweave/subscriptions",
            "organizations_url": "https://api.github.com/users/timoweave/orgs",
            "repos_url": "https://api.github.com/users/timoweave/repos",
            "events_url": "https://api.github.com/users/timoweave/events{/privacy}",
            "received_events_url": "https://api.github.com/users/timoweave/received_events",
            "type": "User",
            "site_admin": false
        },
        "committer": {
            "login": "arnav-aggarwal",
            "id": 19792993,
            "avatar_url": "https://avatars.githubusercontent.com/u/19792993?v=3",
            "gravatar_id": "",
            "url": "https://api.github.com/users/arnav-aggarwal",
            "html_url": "https://github.com/arnav-aggarwal",
            "followers_url": "https://api.github.com/users/arnav-aggarwal/followers",
            "following_url": "https://api.github.com/users/arnav-aggarwal/following{/other_user}",
            "gists_url": "https://api.github.com/users/arnav-aggarwal/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/arnav-aggarwal/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/arnav-aggarwal/subscriptions",
            "organizations_url": "https://api.github.com/users/arnav-aggarwal/orgs",
            "repos_url": "https://api.github.com/users/arnav-aggarwal/repos",
            "events_url": "https://api.github.com/users/arnav-aggarwal/events{/privacy}",
            "received_events_url": "https://api.github.com/users/arnav-aggarwal/received_events",
            "type": "User",
            "site_admin": false
        },
        "parents": [
            {
                "sha": "4fa84d6d5b0ccc659447ad60ccfdc2292daa6717",
                "url": "https://api.github.com/repos/mangonada/mangonada/commits/4fa84d6d5b0ccc659447ad60ccfdc2292daa6717",
                "html_url": "https://github.com/mangonada/mangonada/commit/4fa84d6d5b0ccc659447ad60ccfdc2292daa6717"
            }
        ]
    },
    {
        "sha": "4fa84d6d5b0ccc659447ad60ccfdc2292daa6717",
        "commit": {
            "author": {
                "name": "cadeban",
                "email": "cbanulis@icloud.com",
                "date": "2016-09-18T00:17:04Z"
            },
            "committer": {
                "name": "arnav-aggarwal",
                "email": "arnavaggrwl@gmail.com",
                "date": "2016-09-18T00:17:04Z"
            },
            "message": "Feat(gitCommands)/hardcode universal git commands (#5)\n\n* feat(gitCommands) add git commands property to commit object in gitGraph lib\r\n\r\n* feat(gitCommands) hardcode universal git commands",
            "tree": {
                "sha": "bce0bfad7e5ef878028a7745fc82f948724374a9",
                "url": "https://api.github.com/repos/mangonada/mangonada/git/trees/bce0bfad7e5ef878028a7745fc82f948724374a9"
            },
            "url": "https://api.github.com/repos/mangonada/mangonada/git/commits/4fa84d6d5b0ccc659447ad60ccfdc2292daa6717",
            "comment_count": 0
        },
        "url": "https://api.github.com/repos/mangonada/mangonada/commits/4fa84d6d5b0ccc659447ad60ccfdc2292daa6717",
        "html_url": "https://github.com/mangonada/mangonada/commit/4fa84d6d5b0ccc659447ad60ccfdc2292daa6717",
        "comments_url": "https://api.github.com/repos/mangonada/mangonada/commits/4fa84d6d5b0ccc659447ad60ccfdc2292daa6717/comments",
        "author": {
            "login": "cadeban",
            "id": 7953060,
            "avatar_url": "https://avatars.githubusercontent.com/u/7953060?v=3",
            "gravatar_id": "",
            "url": "https://api.github.com/users/cadeban",
            "html_url": "https://github.com/cadeban",
            "followers_url": "https://api.github.com/users/cadeban/followers",
            "following_url": "https://api.github.com/users/cadeban/following{/other_user}",
            "gists_url": "https://api.github.com/users/cadeban/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/cadeban/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/cadeban/subscriptions",
            "organizations_url": "https://api.github.com/users/cadeban/orgs",
            "repos_url": "https://api.github.com/users/cadeban/repos",
            "events_url": "https://api.github.com/users/cadeban/events{/privacy}",
            "received_events_url": "https://api.github.com/users/cadeban/received_events",
            "type": "User",
            "site_admin": false
        },
        "committer": {
            "login": "arnav-aggarwal",
            "id": 19792993,
            "avatar_url": "https://avatars.githubusercontent.com/u/19792993?v=3",
            "gravatar_id": "",
            "url": "https://api.github.com/users/arnav-aggarwal",
            "html_url": "https://github.com/arnav-aggarwal",
            "followers_url": "https://api.github.com/users/arnav-aggarwal/followers",
            "following_url": "https://api.github.com/users/arnav-aggarwal/following{/other_user}",
            "gists_url": "https://api.github.com/users/arnav-aggarwal/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/arnav-aggarwal/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/arnav-aggarwal/subscriptions",
            "organizations_url": "https://api.github.com/users/arnav-aggarwal/orgs",
            "repos_url": "https://api.github.com/users/arnav-aggarwal/repos",
            "events_url": "https://api.github.com/users/arnav-aggarwal/events{/privacy}",
            "received_events_url": "https://api.github.com/users/arnav-aggarwal/received_events",
            "type": "User",
            "site_admin": false
        },
        "parents": [
            {
                "sha": "520939a449957d806a1d00bdb262f345d78b6948",
                "url": "https://api.github.com/repos/mangonada/mangonada/commits/520939a449957d806a1d00bdb262f345d78b6948",
                "html_url": "https://github.com/mangonada/mangonada/commit/520939a449957d806a1d00bdb262f345d78b6948"
            }
        ]
    },
    {
        "sha": "595092271fba9195be2179e4e2a9f1adb4db9e82",
        "commit": {
            "author": {
                "name": "Cadence Banulis",
                "email": "cbanulis@icloud.com",
                "date": "2016-09-18T00:14:39Z"
            },
            "committer": {
                "name": "Cadence Banulis",
                "email": "cbanulis@icloud.com",
                "date": "2016-09-18T00:14:39Z"
            },
            "message": "feat(gitCommands) hardcode universal git commands",
            "tree": {
                "sha": "bce0bfad7e5ef878028a7745fc82f948724374a9",
                "url": "https://api.github.com/repos/mangonada/mangonada/git/trees/bce0bfad7e5ef878028a7745fc82f948724374a9"
            },
            "url": "https://api.github.com/repos/mangonada/mangonada/git/commits/595092271fba9195be2179e4e2a9f1adb4db9e82",
            "comment_count": 0
        },
        "url": "https://api.github.com/repos/mangonada/mangonada/commits/595092271fba9195be2179e4e2a9f1adb4db9e82",
        "html_url": "https://github.com/mangonada/mangonada/commit/595092271fba9195be2179e4e2a9f1adb4db9e82",
        "comments_url": "https://api.github.com/repos/mangonada/mangonada/commits/595092271fba9195be2179e4e2a9f1adb4db9e82/comments",
        "author": {
            "login": "cadeban",
            "id": 7953060,
            "avatar_url": "https://avatars.githubusercontent.com/u/7953060?v=3",
            "gravatar_id": "",
            "url": "https://api.github.com/users/cadeban",
            "html_url": "https://github.com/cadeban",
            "followers_url": "https://api.github.com/users/cadeban/followers",
            "following_url": "https://api.github.com/users/cadeban/following{/other_user}",
            "gists_url": "https://api.github.com/users/cadeban/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/cadeban/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/cadeban/subscriptions",
            "organizations_url": "https://api.github.com/users/cadeban/orgs",
            "repos_url": "https://api.github.com/users/cadeban/repos",
            "events_url": "https://api.github.com/users/cadeban/events{/privacy}",
            "received_events_url": "https://api.github.com/users/cadeban/received_events",
            "type": "User",
            "site_admin": false
        },
        "committer": {
            "login": "cadeban",
            "id": 7953060,
            "avatar_url": "https://avatars.githubusercontent.com/u/7953060?v=3",
            "gravatar_id": "",
            "url": "https://api.github.com/users/cadeban",
            "html_url": "https://github.com/cadeban",
            "followers_url": "https://api.github.com/users/cadeban/followers",
            "following_url": "https://api.github.com/users/cadeban/following{/other_user}",
            "gists_url": "https://api.github.com/users/cadeban/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/cadeban/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/cadeban/subscriptions",
            "organizations_url": "https://api.github.com/users/cadeban/orgs",
            "repos_url": "https://api.github.com/users/cadeban/repos",
            "events_url": "https://api.github.com/users/cadeban/events{/privacy}",
            "received_events_url": "https://api.github.com/users/cadeban/received_events",
            "type": "User",
            "site_admin": false
        },
        "parents": [
            {
                "sha": "abee56e0706520a2f076e62b028a63bd52f90aa8",
                "url": "https://api.github.com/repos/mangonada/mangonada/commits/abee56e0706520a2f076e62b028a63bd52f90aa8",
                "html_url": "https://github.com/mangonada/mangonada/commit/abee56e0706520a2f076e62b028a63bd52f90aa8"
            }
        ]
    },
    {
        "sha": "abee56e0706520a2f076e62b028a63bd52f90aa8",
        "commit": {
            "author": {
                "name": "Cadence Banulis",
                "email": "cbanulis@icloud.com",
                "date": "2016-09-17T23:43:40Z"
            },
            "committer": {
                "name": "Cadence Banulis",
                "email": "cbanulis@icloud.com",
                "date": "2016-09-17T23:43:40Z"
            },
            "message": "feat(gitCommands) add git commands property to commit object in gitGraph lib",
            "tree": {
                "sha": "bad843350a2c4a4dfba0cb58e370067d3f753cee",
                "url": "https://api.github.com/repos/mangonada/mangonada/git/trees/bad843350a2c4a4dfba0cb58e370067d3f753cee"
            },
            "url": "https://api.github.com/repos/mangonada/mangonada/git/commits/abee56e0706520a2f076e62b028a63bd52f90aa8",
            "comment_count": 0
        },
        "url": "https://api.github.com/repos/mangonada/mangonada/commits/abee56e0706520a2f076e62b028a63bd52f90aa8",
        "html_url": "https://github.com/mangonada/mangonada/commit/abee56e0706520a2f076e62b028a63bd52f90aa8",
        "comments_url": "https://api.github.com/repos/mangonada/mangonada/commits/abee56e0706520a2f076e62b028a63bd52f90aa8/comments",
        "author": {
            "login": "cadeban",
            "id": 7953060,
            "avatar_url": "https://avatars.githubusercontent.com/u/7953060?v=3",
            "gravatar_id": "",
            "url": "https://api.github.com/users/cadeban",
            "html_url": "https://github.com/cadeban",
            "followers_url": "https://api.github.com/users/cadeban/followers",
            "following_url": "https://api.github.com/users/cadeban/following{/other_user}",
            "gists_url": "https://api.github.com/users/cadeban/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/cadeban/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/cadeban/subscriptions",
            "organizations_url": "https://api.github.com/users/cadeban/orgs",
            "repos_url": "https://api.github.com/users/cadeban/repos",
            "events_url": "https://api.github.com/users/cadeban/events{/privacy}",
            "received_events_url": "https://api.github.com/users/cadeban/received_events",
            "type": "User",
            "site_admin": false
        },
        "committer": {
            "login": "cadeban",
            "id": 7953060,
            "avatar_url": "https://avatars.githubusercontent.com/u/7953060?v=3",
            "gravatar_id": "",
            "url": "https://api.github.com/users/cadeban",
            "html_url": "https://github.com/cadeban",
            "followers_url": "https://api.github.com/users/cadeban/followers",
            "following_url": "https://api.github.com/users/cadeban/following{/other_user}",
            "gists_url": "https://api.github.com/users/cadeban/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/cadeban/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/cadeban/subscriptions",
            "organizations_url": "https://api.github.com/users/cadeban/orgs",
            "repos_url": "https://api.github.com/users/cadeban/repos",
            "events_url": "https://api.github.com/users/cadeban/events{/privacy}",
            "received_events_url": "https://api.github.com/users/cadeban/received_events",
            "type": "User",
            "site_admin": false
        },
        "parents": [
            {
                "sha": "520939a449957d806a1d00bdb262f345d78b6948",
                "url": "https://api.github.com/repos/mangonada/mangonada/commits/520939a449957d806a1d00bdb262f345d78b6948",
                "html_url": "https://github.com/mangonada/mangonada/commit/520939a449957d806a1d00bdb262f345d78b6948"
            }
        ]
    },
    {
        "sha": "520939a449957d806a1d00bdb262f345d78b6948",
        "commit": {
            "author": {
                "name": "arnav-aggarwal",
                "email": "arnavaggrwl@gmail.com",
                "date": "2016-09-17T22:42:55Z"
            },
            "committer": {
                "name": "cadeban",
                "email": "cbanulis@icloud.com",
                "date": "2016-09-17T22:42:55Z"
            },
            "message": "Feat(renderGraph)/Demo repo renders to page\n\n* (feat, renderGraph) Render demo graph to page.\r\n\r\nCreate a new file with our own demo graph.\r\nEdit README.md formatting.\r\nPoint index.html to new practice js file.\r\n\r\n* (refactor, renderGraph) Remove useless comments\r\n\r\n* refactor(renderGraph) Create makeConfig function",
            "tree": {
                "sha": "a2b79e20f1d8f4b091088c168a6db5f348efc2b1",
                "url": "https://api.github.com/repos/mangonada/mangonada/git/trees/a2b79e20f1d8f4b091088c168a6db5f348efc2b1"
            },
            "url": "https://api.github.com/repos/mangonada/mangonada/git/commits/520939a449957d806a1d00bdb262f345d78b6948",
            "comment_count": 0
        },
        "url": "https://api.github.com/repos/mangonada/mangonada/commits/520939a449957d806a1d00bdb262f345d78b6948",
        "html_url": "https://github.com/mangonada/mangonada/commit/520939a449957d806a1d00bdb262f345d78b6948",
        "comments_url": "https://api.github.com/repos/mangonada/mangonada/commits/520939a449957d806a1d00bdb262f345d78b6948/comments",
        "author": {
            "login": "arnav-aggarwal",
            "id": 19792993,
            "avatar_url": "https://avatars.githubusercontent.com/u/19792993?v=3",
            "gravatar_id": "",
            "url": "https://api.github.com/users/arnav-aggarwal",
            "html_url": "https://github.com/arnav-aggarwal",
            "followers_url": "https://api.github.com/users/arnav-aggarwal/followers",
            "following_url": "https://api.github.com/users/arnav-aggarwal/following{/other_user}",
            "gists_url": "https://api.github.com/users/arnav-aggarwal/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/arnav-aggarwal/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/arnav-aggarwal/subscriptions",
            "organizations_url": "https://api.github.com/users/arnav-aggarwal/orgs",
            "repos_url": "https://api.github.com/users/arnav-aggarwal/repos",
            "events_url": "https://api.github.com/users/arnav-aggarwal/events{/privacy}",
            "received_events_url": "https://api.github.com/users/arnav-aggarwal/received_events",
            "type": "User",
            "site_admin": false
        },
        "committer": {
            "login": "cadeban",
            "id": 7953060,
            "avatar_url": "https://avatars.githubusercontent.com/u/7953060?v=3",
            "gravatar_id": "",
            "url": "https://api.github.com/users/cadeban",
            "html_url": "https://github.com/cadeban",
            "followers_url": "https://api.github.com/users/cadeban/followers",
            "following_url": "https://api.github.com/users/cadeban/following{/other_user}",
            "gists_url": "https://api.github.com/users/cadeban/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/cadeban/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/cadeban/subscriptions",
            "organizations_url": "https://api.github.com/users/cadeban/orgs",
            "repos_url": "https://api.github.com/users/cadeban/repos",
            "events_url": "https://api.github.com/users/cadeban/events{/privacy}",
            "received_events_url": "https://api.github.com/users/cadeban/received_events",
            "type": "User",
            "site_admin": false
        },
        "parents": [
            {
                "sha": "c70bb495988532b3a58ac32762437e70ac0d9d27",
                "url": "https://api.github.com/repos/mangonada/mangonada/commits/c70bb495988532b3a58ac32762437e70ac0d9d27",
                "html_url": "https://github.com/mangonada/mangonada/commit/c70bb495988532b3a58ac32762437e70ac0d9d27"
            }
        ]
    },
    {
        "sha": "c70bb495988532b3a58ac32762437e70ac0d9d27",
        "commit": {
            "author": {
                "name": "cadeban",
                "email": "cbanulis@icloud.com",
                "date": "2016-09-17T20:59:32Z"
            },
            "committer": {
                "name": "GitHub",
                "email": "noreply@github.com",
                "date": "2016-09-17T20:59:32Z"
            },
            "message": "Merge pull request #3 from arnav-aggarwal/doc/_contributing.md\n\n(doc, README) Format readme title",
            "tree": {
                "sha": "8ed1dc0bd8931c2d040f52a1b9cefb5a505763ae",
                "url": "https://api.github.com/repos/mangonada/mangonada/git/trees/8ed1dc0bd8931c2d040f52a1b9cefb5a505763ae"
            },
            "url": "https://api.github.com/repos/mangonada/mangonada/git/commits/c70bb495988532b3a58ac32762437e70ac0d9d27",
            "comment_count": 0
        },
        "url": "https://api.github.com/repos/mangonada/mangonada/commits/c70bb495988532b3a58ac32762437e70ac0d9d27",
        "html_url": "https://github.com/mangonada/mangonada/commit/c70bb495988532b3a58ac32762437e70ac0d9d27",
        "comments_url": "https://api.github.com/repos/mangonada/mangonada/commits/c70bb495988532b3a58ac32762437e70ac0d9d27/comments",
        "author": {
            "login": "cadeban",
            "id": 7953060,
            "avatar_url": "https://avatars.githubusercontent.com/u/7953060?v=3",
            "gravatar_id": "",
            "url": "https://api.github.com/users/cadeban",
            "html_url": "https://github.com/cadeban",
            "followers_url": "https://api.github.com/users/cadeban/followers",
            "following_url": "https://api.github.com/users/cadeban/following{/other_user}",
            "gists_url": "https://api.github.com/users/cadeban/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/cadeban/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/cadeban/subscriptions",
            "organizations_url": "https://api.github.com/users/cadeban/orgs",
            "repos_url": "https://api.github.com/users/cadeban/repos",
            "events_url": "https://api.github.com/users/cadeban/events{/privacy}",
            "received_events_url": "https://api.github.com/users/cadeban/received_events",
            "type": "User",
            "site_admin": false
        },
        "committer": {
            "login": "web-flow",
            "id": 19864447,
            "avatar_url": "https://avatars.githubusercontent.com/u/19864447?v=3",
            "gravatar_id": "",
            "url": "https://api.github.com/users/web-flow",
            "html_url": "https://github.com/web-flow",
            "followers_url": "https://api.github.com/users/web-flow/followers",
            "following_url": "https://api.github.com/users/web-flow/following{/other_user}",
            "gists_url": "https://api.github.com/users/web-flow/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/web-flow/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/web-flow/subscriptions",
            "organizations_url": "https://api.github.com/users/web-flow/orgs",
            "repos_url": "https://api.github.com/users/web-flow/repos",
            "events_url": "https://api.github.com/users/web-flow/events{/privacy}",
            "received_events_url": "https://api.github.com/users/web-flow/received_events",
            "type": "User",
            "site_admin": false
        },
        "parents": [
            {
                "sha": "02a9282cab083f9a8d8d0d6e026aba8ca6debedf",
                "url": "https://api.github.com/repos/mangonada/mangonada/commits/02a9282cab083f9a8d8d0d6e026aba8ca6debedf",
                "html_url": "https://github.com/mangonada/mangonada/commit/02a9282cab083f9a8d8d0d6e026aba8ca6debedf"
            },
            {
                "sha": "d5e1464d4d2c49d066ca2c106a9456e9236046fb",
                "url": "https://api.github.com/repos/mangonada/mangonada/commits/d5e1464d4d2c49d066ca2c106a9456e9236046fb",
                "html_url": "https://github.com/mangonada/mangonada/commit/d5e1464d4d2c49d066ca2c106a9456e9236046fb"
            }
        ]
    },
    {
        "sha": "d5e1464d4d2c49d066ca2c106a9456e9236046fb",
        "commit": {
            "author": {
                "name": "Arnav Aggarwal",
                "email": "arnavaggrwl@gmail.com",
                "date": "2016-09-17T20:57:45Z"
            },
            "committer": {
                "name": "Arnav Aggarwal",
                "email": "arnavaggrwl@gmail.com",
                "date": "2016-09-17T20:57:45Z"
            },
            "message": "(doc, README) Format readme title",
            "tree": {
                "sha": "8ed1dc0bd8931c2d040f52a1b9cefb5a505763ae",
                "url": "https://api.github.com/repos/mangonada/mangonada/git/trees/8ed1dc0bd8931c2d040f52a1b9cefb5a505763ae"
            },
            "url": "https://api.github.com/repos/mangonada/mangonada/git/commits/d5e1464d4d2c49d066ca2c106a9456e9236046fb",
            "comment_count": 0
        },
        "url": "https://api.github.com/repos/mangonada/mangonada/commits/d5e1464d4d2c49d066ca2c106a9456e9236046fb",
        "html_url": "https://github.com/mangonada/mangonada/commit/d5e1464d4d2c49d066ca2c106a9456e9236046fb",
        "comments_url": "https://api.github.com/repos/mangonada/mangonada/commits/d5e1464d4d2c49d066ca2c106a9456e9236046fb/comments",
        "author": {
            "login": "arnav-aggarwal",
            "id": 19792993,
            "avatar_url": "https://avatars.githubusercontent.com/u/19792993?v=3",
            "gravatar_id": "",
            "url": "https://api.github.com/users/arnav-aggarwal",
            "html_url": "https://github.com/arnav-aggarwal",
            "followers_url": "https://api.github.com/users/arnav-aggarwal/followers",
            "following_url": "https://api.github.com/users/arnav-aggarwal/following{/other_user}",
            "gists_url": "https://api.github.com/users/arnav-aggarwal/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/arnav-aggarwal/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/arnav-aggarwal/subscriptions",
            "organizations_url": "https://api.github.com/users/arnav-aggarwal/orgs",
            "repos_url": "https://api.github.com/users/arnav-aggarwal/repos",
            "events_url": "https://api.github.com/users/arnav-aggarwal/events{/privacy}",
            "received_events_url": "https://api.github.com/users/arnav-aggarwal/received_events",
            "type": "User",
            "site_admin": false
        },
        "committer": {
            "login": "arnav-aggarwal",
            "id": 19792993,
            "avatar_url": "https://avatars.githubusercontent.com/u/19792993?v=3",
            "gravatar_id": "",
            "url": "https://api.github.com/users/arnav-aggarwal",
            "html_url": "https://github.com/arnav-aggarwal",
            "followers_url": "https://api.github.com/users/arnav-aggarwal/followers",
            "following_url": "https://api.github.com/users/arnav-aggarwal/following{/other_user}",
            "gists_url": "https://api.github.com/users/arnav-aggarwal/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/arnav-aggarwal/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/arnav-aggarwal/subscriptions",
            "organizations_url": "https://api.github.com/users/arnav-aggarwal/orgs",
            "repos_url": "https://api.github.com/users/arnav-aggarwal/repos",
            "events_url": "https://api.github.com/users/arnav-aggarwal/events{/privacy}",
            "received_events_url": "https://api.github.com/users/arnav-aggarwal/received_events",
            "type": "User",
            "site_admin": false
        },
        "parents": [
            {
                "sha": "a3d1f5ffc99828cf0e3bcd233cdb2375749ce24d",
                "url": "https://api.github.com/repos/mangonada/mangonada/commits/a3d1f5ffc99828cf0e3bcd233cdb2375749ce24d",
                "html_url": "https://github.com/mangonada/mangonada/commit/a3d1f5ffc99828cf0e3bcd233cdb2375749ce24d"
            }
        ]
    },
    {
        "sha": "02a9282cab083f9a8d8d0d6e026aba8ca6debedf",
        "commit": {
            "author": {
                "name": "Martin Kwan",
                "email": "martinkkwan@gmail.com",
                "date": "2016-09-17T20:55:49Z"
            },
            "committer": {
                "name": "GitHub",
                "email": "noreply@github.com",
                "date": "2016-09-17T20:55:49Z"
            },
            "message": "Merge pull request #2 from arnav-aggarwal/doc/_contributing.md\n\n(doc, _contributing.md) Add contribution guide",
            "tree": {
                "sha": "1f10f6dc6c9ea53cf6ebfbb0b94df98031bcc755",
                "url": "https://api.github.com/repos/mangonada/mangonada/git/trees/1f10f6dc6c9ea53cf6ebfbb0b94df98031bcc755"
            },
            "url": "https://api.github.com/repos/mangonada/mangonada/git/commits/02a9282cab083f9a8d8d0d6e026aba8ca6debedf",
            "comment_count": 0
        },
        "url": "https://api.github.com/repos/mangonada/mangonada/commits/02a9282cab083f9a8d8d0d6e026aba8ca6debedf",
        "html_url": "https://github.com/mangonada/mangonada/commit/02a9282cab083f9a8d8d0d6e026aba8ca6debedf",
        "comments_url": "https://api.github.com/repos/mangonada/mangonada/commits/02a9282cab083f9a8d8d0d6e026aba8ca6debedf/comments",
        "author": {
            "login": "martinkwan",
            "id": 13195630,
            "avatar_url": "https://avatars.githubusercontent.com/u/13195630?v=3",
            "gravatar_id": "",
            "url": "https://api.github.com/users/martinkwan",
            "html_url": "https://github.com/martinkwan",
            "followers_url": "https://api.github.com/users/martinkwan/followers",
            "following_url": "https://api.github.com/users/martinkwan/following{/other_user}",
            "gists_url": "https://api.github.com/users/martinkwan/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/martinkwan/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/martinkwan/subscriptions",
            "organizations_url": "https://api.github.com/users/martinkwan/orgs",
            "repos_url": "https://api.github.com/users/martinkwan/repos",
            "events_url": "https://api.github.com/users/martinkwan/events{/privacy}",
            "received_events_url": "https://api.github.com/users/martinkwan/received_events",
            "type": "User",
            "site_admin": false
        },
        "committer": {
            "login": "web-flow",
            "id": 19864447,
            "avatar_url": "https://avatars.githubusercontent.com/u/19864447?v=3",
            "gravatar_id": "",
            "url": "https://api.github.com/users/web-flow",
            "html_url": "https://github.com/web-flow",
            "followers_url": "https://api.github.com/users/web-flow/followers",
            "following_url": "https://api.github.com/users/web-flow/following{/other_user}",
            "gists_url": "https://api.github.com/users/web-flow/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/web-flow/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/web-flow/subscriptions",
            "organizations_url": "https://api.github.com/users/web-flow/orgs",
            "repos_url": "https://api.github.com/users/web-flow/repos",
            "events_url": "https://api.github.com/users/web-flow/events{/privacy}",
            "received_events_url": "https://api.github.com/users/web-flow/received_events",
            "type": "User",
            "site_admin": false
        },
        "parents": [
            {
                "sha": "5be45f11a0176715f8b1b83537ae03fa586776d8",
                "url": "https://api.github.com/repos/mangonada/mangonada/commits/5be45f11a0176715f8b1b83537ae03fa586776d8",
                "html_url": "https://github.com/mangonada/mangonada/commit/5be45f11a0176715f8b1b83537ae03fa586776d8"
            },
            {
                "sha": "a3d1f5ffc99828cf0e3bcd233cdb2375749ce24d",
                "url": "https://api.github.com/repos/mangonada/mangonada/commits/a3d1f5ffc99828cf0e3bcd233cdb2375749ce24d",
                "html_url": "https://github.com/mangonada/mangonada/commit/a3d1f5ffc99828cf0e3bcd233cdb2375749ce24d"
            }
        ]
    },
    {
        "sha": "a3d1f5ffc99828cf0e3bcd233cdb2375749ce24d",
        "commit": {
            "author": {
                "name": "Arnav Aggarwal",
                "email": "arnavaggrwl@gmail.com",
                "date": "2016-09-17T20:54:21Z"
            },
            "committer": {
                "name": "Arnav Aggarwal",
                "email": "arnavaggrwl@gmail.com",
                "date": "2016-09-17T20:54:21Z"
            },
            "message": "(doc, README) Add readme",
            "tree": {
                "sha": "1f10f6dc6c9ea53cf6ebfbb0b94df98031bcc755",
                "url": "https://api.github.com/repos/mangonada/mangonada/git/trees/1f10f6dc6c9ea53cf6ebfbb0b94df98031bcc755"
            },
            "url": "https://api.github.com/repos/mangonada/mangonada/git/commits/a3d1f5ffc99828cf0e3bcd233cdb2375749ce24d",
            "comment_count": 0
        },
        "url": "https://api.github.com/repos/mangonada/mangonada/commits/a3d1f5ffc99828cf0e3bcd233cdb2375749ce24d",
        "html_url": "https://github.com/mangonada/mangonada/commit/a3d1f5ffc99828cf0e3bcd233cdb2375749ce24d",
        "comments_url": "https://api.github.com/repos/mangonada/mangonada/commits/a3d1f5ffc99828cf0e3bcd233cdb2375749ce24d/comments",
        "author": {
            "login": "arnav-aggarwal",
            "id": 19792993,
            "avatar_url": "https://avatars.githubusercontent.com/u/19792993?v=3",
            "gravatar_id": "",
            "url": "https://api.github.com/users/arnav-aggarwal",
            "html_url": "https://github.com/arnav-aggarwal",
            "followers_url": "https://api.github.com/users/arnav-aggarwal/followers",
            "following_url": "https://api.github.com/users/arnav-aggarwal/following{/other_user}",
            "gists_url": "https://api.github.com/users/arnav-aggarwal/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/arnav-aggarwal/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/arnav-aggarwal/subscriptions",
            "organizations_url": "https://api.github.com/users/arnav-aggarwal/orgs",
            "repos_url": "https://api.github.com/users/arnav-aggarwal/repos",
            "events_url": "https://api.github.com/users/arnav-aggarwal/events{/privacy}",
            "received_events_url": "https://api.github.com/users/arnav-aggarwal/received_events",
            "type": "User",
            "site_admin": false
        },
        "committer": {
            "login": "arnav-aggarwal",
            "id": 19792993,
            "avatar_url": "https://avatars.githubusercontent.com/u/19792993?v=3",
            "gravatar_id": "",
            "url": "https://api.github.com/users/arnav-aggarwal",
            "html_url": "https://github.com/arnav-aggarwal",
            "followers_url": "https://api.github.com/users/arnav-aggarwal/followers",
            "following_url": "https://api.github.com/users/arnav-aggarwal/following{/other_user}",
            "gists_url": "https://api.github.com/users/arnav-aggarwal/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/arnav-aggarwal/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/arnav-aggarwal/subscriptions",
            "organizations_url": "https://api.github.com/users/arnav-aggarwal/orgs",
            "repos_url": "https://api.github.com/users/arnav-aggarwal/repos",
            "events_url": "https://api.github.com/users/arnav-aggarwal/events{/privacy}",
            "received_events_url": "https://api.github.com/users/arnav-aggarwal/received_events",
            "type": "User",
            "site_admin": false
        },
        "parents": [
            {
                "sha": "a51549a46df969384b3989cb3c27cd7ac002ba87",
                "url": "https://api.github.com/repos/mangonada/mangonada/commits/a51549a46df969384b3989cb3c27cd7ac002ba87",
                "html_url": "https://github.com/mangonada/mangonada/commit/a51549a46df969384b3989cb3c27cd7ac002ba87"
            }
        ]
    },
    {
        "sha": "a51549a46df969384b3989cb3c27cd7ac002ba87",
        "commit": {
            "author": {
                "name": "Arnav Aggarwal",
                "email": "arnavaggrwl@gmail.com",
                "date": "2016-09-17T20:45:56Z"
            },
            "committer": {
                "name": "Arnav Aggarwal",
                "email": "arnavaggrwl@gmail.com",
                "date": "2016-09-17T20:45:56Z"
            },
            "message": "(doc, _contributing.md) Add contribution guide",
            "tree": {
                "sha": "2cc9f6437b905ca7e8716f33ca14d5f4789c3468",
                "url": "https://api.github.com/repos/mangonada/mangonada/git/trees/2cc9f6437b905ca7e8716f33ca14d5f4789c3468"
            },
            "url": "https://api.github.com/repos/mangonada/mangonada/git/commits/a51549a46df969384b3989cb3c27cd7ac002ba87",
            "comment_count": 0
        },
        "url": "https://api.github.com/repos/mangonada/mangonada/commits/a51549a46df969384b3989cb3c27cd7ac002ba87",
        "html_url": "https://github.com/mangonada/mangonada/commit/a51549a46df969384b3989cb3c27cd7ac002ba87",
        "comments_url": "https://api.github.com/repos/mangonada/mangonada/commits/a51549a46df969384b3989cb3c27cd7ac002ba87/comments",
        "author": {
            "login": "arnav-aggarwal",
            "id": 19792993,
            "avatar_url": "https://avatars.githubusercontent.com/u/19792993?v=3",
            "gravatar_id": "",
            "url": "https://api.github.com/users/arnav-aggarwal",
            "html_url": "https://github.com/arnav-aggarwal",
            "followers_url": "https://api.github.com/users/arnav-aggarwal/followers",
            "following_url": "https://api.github.com/users/arnav-aggarwal/following{/other_user}",
            "gists_url": "https://api.github.com/users/arnav-aggarwal/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/arnav-aggarwal/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/arnav-aggarwal/subscriptions",
            "organizations_url": "https://api.github.com/users/arnav-aggarwal/orgs",
            "repos_url": "https://api.github.com/users/arnav-aggarwal/repos",
            "events_url": "https://api.github.com/users/arnav-aggarwal/events{/privacy}",
            "received_events_url": "https://api.github.com/users/arnav-aggarwal/received_events",
            "type": "User",
            "site_admin": false
        },
        "committer": {
            "login": "arnav-aggarwal",
            "id": 19792993,
            "avatar_url": "https://avatars.githubusercontent.com/u/19792993?v=3",
            "gravatar_id": "",
            "url": "https://api.github.com/users/arnav-aggarwal",
            "html_url": "https://github.com/arnav-aggarwal",
            "followers_url": "https://api.github.com/users/arnav-aggarwal/followers",
            "following_url": "https://api.github.com/users/arnav-aggarwal/following{/other_user}",
            "gists_url": "https://api.github.com/users/arnav-aggarwal/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/arnav-aggarwal/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/arnav-aggarwal/subscriptions",
            "organizations_url": "https://api.github.com/users/arnav-aggarwal/orgs",
            "repos_url": "https://api.github.com/users/arnav-aggarwal/repos",
            "events_url": "https://api.github.com/users/arnav-aggarwal/events{/privacy}",
            "received_events_url": "https://api.github.com/users/arnav-aggarwal/received_events",
            "type": "User",
            "site_admin": false
        },
        "parents": [
            {
                "sha": "5be45f11a0176715f8b1b83537ae03fa586776d8",
                "url": "https://api.github.com/repos/mangonada/mangonada/commits/5be45f11a0176715f8b1b83537ae03fa586776d8",
                "html_url": "https://github.com/mangonada/mangonada/commit/5be45f11a0176715f8b1b83537ae03fa586776d8"
            }
        ]
    },
    {
        "sha": "5be45f11a0176715f8b1b83537ae03fa586776d8",
        "commit": {
            "author": {
                "name": "Martin Kwan",
                "email": "martinkkwan@gmail.com",
                "date": "2016-09-17T02:48:56Z"
            },
            "committer": {
                "name": "GitHub",
                "email": "noreply@github.com",
                "date": "2016-09-17T02:48:56Z"
            },
            "message": "Merge pull request #1 from arnav-aggarwal/init\n\nfeat, setup/Boilerplate setup",
            "tree": {
                "sha": "f5a5c7cea2ecaf09727909c20d5fcac745a8fc0f",
                "url": "https://api.github.com/repos/mangonada/mangonada/git/trees/f5a5c7cea2ecaf09727909c20d5fcac745a8fc0f"
            },
            "url": "https://api.github.com/repos/mangonada/mangonada/git/commits/5be45f11a0176715f8b1b83537ae03fa586776d8",
            "comment_count": 0
        },
        "url": "https://api.github.com/repos/mangonada/mangonada/commits/5be45f11a0176715f8b1b83537ae03fa586776d8",
        "html_url": "https://github.com/mangonada/mangonada/commit/5be45f11a0176715f8b1b83537ae03fa586776d8",
        "comments_url": "https://api.github.com/repos/mangonada/mangonada/commits/5be45f11a0176715f8b1b83537ae03fa586776d8/comments",
        "author": {
            "login": "martinkwan",
            "id": 13195630,
            "avatar_url": "https://avatars.githubusercontent.com/u/13195630?v=3",
            "gravatar_id": "",
            "url": "https://api.github.com/users/martinkwan",
            "html_url": "https://github.com/martinkwan",
            "followers_url": "https://api.github.com/users/martinkwan/followers",
            "following_url": "https://api.github.com/users/martinkwan/following{/other_user}",
            "gists_url": "https://api.github.com/users/martinkwan/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/martinkwan/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/martinkwan/subscriptions",
            "organizations_url": "https://api.github.com/users/martinkwan/orgs",
            "repos_url": "https://api.github.com/users/martinkwan/repos",
            "events_url": "https://api.github.com/users/martinkwan/events{/privacy}",
            "received_events_url": "https://api.github.com/users/martinkwan/received_events",
            "type": "User",
            "site_admin": false
        },
        "committer": {
            "login": "web-flow",
            "id": 19864447,
            "avatar_url": "https://avatars.githubusercontent.com/u/19864447?v=3",
            "gravatar_id": "",
            "url": "https://api.github.com/users/web-flow",
            "html_url": "https://github.com/web-flow",
            "followers_url": "https://api.github.com/users/web-flow/followers",
            "following_url": "https://api.github.com/users/web-flow/following{/other_user}",
            "gists_url": "https://api.github.com/users/web-flow/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/web-flow/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/web-flow/subscriptions",
            "organizations_url": "https://api.github.com/users/web-flow/orgs",
            "repos_url": "https://api.github.com/users/web-flow/repos",
            "events_url": "https://api.github.com/users/web-flow/events{/privacy}",
            "received_events_url": "https://api.github.com/users/web-flow/received_events",
            "type": "User",
            "site_admin": false
        },
        "parents": [
            {
                "sha": "56d20161b7aae27c3e5632a4ea6a7e73db1457ed",
                "url": "https://api.github.com/repos/mangonada/mangonada/commits/56d20161b7aae27c3e5632a4ea6a7e73db1457ed",
                "html_url": "https://github.com/mangonada/mangonada/commit/56d20161b7aae27c3e5632a4ea6a7e73db1457ed"
            },
            {
                "sha": "589d02068ca8b4bfb8135d25630a0ef237f63bf0",
                "url": "https://api.github.com/repos/mangonada/mangonada/commits/589d02068ca8b4bfb8135d25630a0ef237f63bf0",
                "html_url": "https://github.com/mangonada/mangonada/commit/589d02068ca8b4bfb8135d25630a0ef237f63bf0"
            }
        ]
    },
    {
        "sha": "589d02068ca8b4bfb8135d25630a0ef237f63bf0",
        "commit": {
            "author": {
                "name": "Arnav Aggarwal",
                "email": "arnavaggrwl@gmail.com",
                "date": "2016-09-17T02:38:34Z"
            },
            "committer": {
                "name": "Arnav Aggarwal",
                "email": "arnavaggrwl@gmail.com",
                "date": "2016-09-17T02:38:34Z"
            },
            "message": "(doc, setup) Change package.json project name",
            "tree": {
                "sha": "f5a5c7cea2ecaf09727909c20d5fcac745a8fc0f",
                "url": "https://api.github.com/repos/mangonada/mangonada/git/trees/f5a5c7cea2ecaf09727909c20d5fcac745a8fc0f"
            },
            "url": "https://api.github.com/repos/mangonada/mangonada/git/commits/589d02068ca8b4bfb8135d25630a0ef237f63bf0",
            "comment_count": 0
        },
        "url": "https://api.github.com/repos/mangonada/mangonada/commits/589d02068ca8b4bfb8135d25630a0ef237f63bf0",
        "html_url": "https://github.com/mangonada/mangonada/commit/589d02068ca8b4bfb8135d25630a0ef237f63bf0",
        "comments_url": "https://api.github.com/repos/mangonada/mangonada/commits/589d02068ca8b4bfb8135d25630a0ef237f63bf0/comments",
        "author": {
            "login": "arnav-aggarwal",
            "id": 19792993,
            "avatar_url": "https://avatars.githubusercontent.com/u/19792993?v=3",
            "gravatar_id": "",
            "url": "https://api.github.com/users/arnav-aggarwal",
            "html_url": "https://github.com/arnav-aggarwal",
            "followers_url": "https://api.github.com/users/arnav-aggarwal/followers",
            "following_url": "https://api.github.com/users/arnav-aggarwal/following{/other_user}",
            "gists_url": "https://api.github.com/users/arnav-aggarwal/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/arnav-aggarwal/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/arnav-aggarwal/subscriptions",
            "organizations_url": "https://api.github.com/users/arnav-aggarwal/orgs",
            "repos_url": "https://api.github.com/users/arnav-aggarwal/repos",
            "events_url": "https://api.github.com/users/arnav-aggarwal/events{/privacy}",
            "received_events_url": "https://api.github.com/users/arnav-aggarwal/received_events",
            "type": "User",
            "site_admin": false
        },
        "committer": {
            "login": "arnav-aggarwal",
            "id": 19792993,
            "avatar_url": "https://avatars.githubusercontent.com/u/19792993?v=3",
            "gravatar_id": "",
            "url": "https://api.github.com/users/arnav-aggarwal",
            "html_url": "https://github.com/arnav-aggarwal",
            "followers_url": "https://api.github.com/users/arnav-aggarwal/followers",
            "following_url": "https://api.github.com/users/arnav-aggarwal/following{/other_user}",
            "gists_url": "https://api.github.com/users/arnav-aggarwal/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/arnav-aggarwal/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/arnav-aggarwal/subscriptions",
            "organizations_url": "https://api.github.com/users/arnav-aggarwal/orgs",
            "repos_url": "https://api.github.com/users/arnav-aggarwal/repos",
            "events_url": "https://api.github.com/users/arnav-aggarwal/events{/privacy}",
            "received_events_url": "https://api.github.com/users/arnav-aggarwal/received_events",
            "type": "User",
            "site_admin": false
        },
        "parents": [
            {
                "sha": "6471a0b8c75c7c78b77a87527770b103b534e788",
                "url": "https://api.github.com/repos/mangonada/mangonada/commits/6471a0b8c75c7c78b77a87527770b103b534e788",
                "html_url": "https://github.com/mangonada/mangonada/commit/6471a0b8c75c7c78b77a87527770b103b534e788"
            }
        ]
    },
    {
        "sha": "6471a0b8c75c7c78b77a87527770b103b534e788",
        "commit": {
            "author": {
                "name": "Arnav Aggarwal",
                "email": "arnavaggrwl@gmail.com",
                "date": "2016-09-17T02:34:56Z"
            },
            "committer": {
                "name": "Arnav Aggarwal",
                "email": "arnavaggrwl@gmail.com",
                "date": "2016-09-17T02:34:56Z"
            },
            "message": "(feat, setup) Boilerplate setup",
            "tree": {
                "sha": "736e9e67d5c85d818858aa1034413108c8e45843",
                "url": "https://api.github.com/repos/mangonada/mangonada/git/trees/736e9e67d5c85d818858aa1034413108c8e45843"
            },
            "url": "https://api.github.com/repos/mangonada/mangonada/git/commits/6471a0b8c75c7c78b77a87527770b103b534e788",
            "comment_count": 0
        },
        "url": "https://api.github.com/repos/mangonada/mangonada/commits/6471a0b8c75c7c78b77a87527770b103b534e788",
        "html_url": "https://github.com/mangonada/mangonada/commit/6471a0b8c75c7c78b77a87527770b103b534e788",
        "comments_url": "https://api.github.com/repos/mangonada/mangonada/commits/6471a0b8c75c7c78b77a87527770b103b534e788/comments",
        "author": {
            "login": "arnav-aggarwal",
            "id": 19792993,
            "avatar_url": "https://avatars.githubusercontent.com/u/19792993?v=3",
            "gravatar_id": "",
            "url": "https://api.github.com/users/arnav-aggarwal",
            "html_url": "https://github.com/arnav-aggarwal",
            "followers_url": "https://api.github.com/users/arnav-aggarwal/followers",
            "following_url": "https://api.github.com/users/arnav-aggarwal/following{/other_user}",
            "gists_url": "https://api.github.com/users/arnav-aggarwal/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/arnav-aggarwal/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/arnav-aggarwal/subscriptions",
            "organizations_url": "https://api.github.com/users/arnav-aggarwal/orgs",
            "repos_url": "https://api.github.com/users/arnav-aggarwal/repos",
            "events_url": "https://api.github.com/users/arnav-aggarwal/events{/privacy}",
            "received_events_url": "https://api.github.com/users/arnav-aggarwal/received_events",
            "type": "User",
            "site_admin": false
        },
        "committer": {
            "login": "arnav-aggarwal",
            "id": 19792993,
            "avatar_url": "https://avatars.githubusercontent.com/u/19792993?v=3",
            "gravatar_id": "",
            "url": "https://api.github.com/users/arnav-aggarwal",
            "html_url": "https://github.com/arnav-aggarwal",
            "followers_url": "https://api.github.com/users/arnav-aggarwal/followers",
            "following_url": "https://api.github.com/users/arnav-aggarwal/following{/other_user}",
            "gists_url": "https://api.github.com/users/arnav-aggarwal/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/arnav-aggarwal/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/arnav-aggarwal/subscriptions",
            "organizations_url": "https://api.github.com/users/arnav-aggarwal/orgs",
            "repos_url": "https://api.github.com/users/arnav-aggarwal/repos",
            "events_url": "https://api.github.com/users/arnav-aggarwal/events{/privacy}",
            "received_events_url": "https://api.github.com/users/arnav-aggarwal/received_events",
            "type": "User",
            "site_admin": false
        },
        "parents": [
            {
                "sha": "56d20161b7aae27c3e5632a4ea6a7e73db1457ed",
                "url": "https://api.github.com/repos/mangonada/mangonada/commits/56d20161b7aae27c3e5632a4ea6a7e73db1457ed",
                "html_url": "https://github.com/mangonada/mangonada/commit/56d20161b7aae27c3e5632a4ea6a7e73db1457ed"
            }
        ]
    },
    {
        "sha": "56d20161b7aae27c3e5632a4ea6a7e73db1457ed",
        "commit": {
            "author": {
                "name": "Martin Kwan",
                "email": "martinkkwan@gmail.com",
                "date": "2016-09-15T22:42:42Z"
            },
            "committer": {
                "name": "Martin Kwan",
                "email": "martinkkwan@gmail.com",
                "date": "2016-09-15T22:42:42Z"
            },
            "message": "Initial commit",
            "tree": {
                "sha": "28d84a8e461a681cb95a393a720543e08627bc08",
                "url": "https://api.github.com/repos/mangonada/mangonada/git/trees/28d84a8e461a681cb95a393a720543e08627bc08"
            },
            "url": "https://api.github.com/repos/mangonada/mangonada/git/commits/56d20161b7aae27c3e5632a4ea6a7e73db1457ed",
            "comment_count": 0
        },
        "url": "https://api.github.com/repos/mangonada/mangonada/commits/56d20161b7aae27c3e5632a4ea6a7e73db1457ed",
        "html_url": "https://github.com/mangonada/mangonada/commit/56d20161b7aae27c3e5632a4ea6a7e73db1457ed",
        "comments_url": "https://api.github.com/repos/mangonada/mangonada/commits/56d20161b7aae27c3e5632a4ea6a7e73db1457ed/comments",
        "author": {
            "login": "martinkwan",
            "id": 13195630,
            "avatar_url": "https://avatars.githubusercontent.com/u/13195630?v=3",
            "gravatar_id": "",
            "url": "https://api.github.com/users/martinkwan",
            "html_url": "https://github.com/martinkwan",
            "followers_url": "https://api.github.com/users/martinkwan/followers",
            "following_url": "https://api.github.com/users/martinkwan/following{/other_user}",
            "gists_url": "https://api.github.com/users/martinkwan/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/martinkwan/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/martinkwan/subscriptions",
            "organizations_url": "https://api.github.com/users/martinkwan/orgs",
            "repos_url": "https://api.github.com/users/martinkwan/repos",
            "events_url": "https://api.github.com/users/martinkwan/events{/privacy}",
            "received_events_url": "https://api.github.com/users/martinkwan/received_events",
            "type": "User",
            "site_admin": false
        },
        "committer": {
            "login": "martinkwan",
            "id": 13195630,
            "avatar_url": "https://avatars.githubusercontent.com/u/13195630?v=3",
            "gravatar_id": "",
            "url": "https://api.github.com/users/martinkwan",
            "html_url": "https://github.com/martinkwan",
            "followers_url": "https://api.github.com/users/martinkwan/followers",
            "following_url": "https://api.github.com/users/martinkwan/following{/other_user}",
            "gists_url": "https://api.github.com/users/martinkwan/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/martinkwan/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/martinkwan/subscriptions",
            "organizations_url": "https://api.github.com/users/martinkwan/orgs",
            "repos_url": "https://api.github.com/users/martinkwan/repos",
            "events_url": "https://api.github.com/users/martinkwan/events{/privacy}",
            "received_events_url": "https://api.github.com/users/martinkwan/received_events",
            "type": "User",
            "site_admin": false
        },
        "parents": []
    }
];


let githubTranslator = new GithubApiInterface(JSONcommits, JSONbranches);
JSONcommits = githubTranslator.JSONCommits;
export const SHALookup = githubTranslator.SHALookup;
var branchLookUp = githubTranslator.branchLookUp;

// export SHALookup;
export default JSONcommits;
