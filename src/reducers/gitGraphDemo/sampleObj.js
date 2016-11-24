import GithubApiInterface from './githubBranchFunction';

export const JSONBranches = [
   {
       "name": "dev",
       "commit": {
           "sha": "8980523966b0becfbf3f5dc5c115403e08172d1a",
           "url": "https://api.github.com/repos/martinkwan/mangonada/commits/8980523966b0becfbf3f5dc5c115403e08172d1a"
       }
   },
   // {
   //     "name": "feat/npmScript",
   //     "commit": {
   //         "sha": "80fcadd5644418db48418f88d32d1126ead5b8d7",
   //         "url": "https://api.github.com/repos/martinkwan/mangonada/commits/80fcadd5644418db48418f88d32d1126ead5b8d7"
   //     }
   // },
   {
       "name": "gitLink",
       "commit": {
           "sha": "fff4f81e32763d3fc9b5d796852c424289ef8066",
           "url": "https://api.github.com/repos/martinkwan/mangonada/commits/fff4f81e32763d3fc9b5d796852c424289ef8066"
       }
   },
   // {
   //     "name": "githubBranchFunction",
   //     "commit": {
   //         "sha": "866fd982b89ffe1bbcd012ce5db9fe46fe4e7d2b",
   //         "url": "https://api.github.com/repos/martinkwan/mangonada/commits/866fd982b89ffe1bbcd012ce5db9fe46fe4e7d2b"
   //     }
   // },
   // {
   //     "name": "githubBranchRefactor",
   //     "commit": {
   //         "sha": "966e969742bd5f38b8e15618e01a605bda335436",
   //         "url": "https://api.github.com/repos/martinkwan/mangonada/commits/966e969742bd5f38b8e15618e01a605bda335436"
   //     }
   // },
   {
       "name": "master",
       "commit": {
           "sha": "55aa2b84338818ebd2d2438912c9e4282b56bb2a",
           "url": "https://api.github.com/repos/martinkwan/mangonada/commits/55aa2b84338818ebd2d2438912c9e4282b56bb2a"
       }
   },
   // {
   //     "name": "navBar",
   //     "commit": {
   //         "sha": "6dde7e755e0ddef95397f299286911016ef64299",
   //         "url": "https://api.github.com/repos/martinkwan/mangonada/commits/6dde7e755e0ddef95397f299286911016ef64299"
   //     }
   // },
   {
       "name": "searchBar",
       "commit": {
           "sha": "a0b7da4726f172bbc5ee23aa542507a6293ed212",
           "url": "https://api.github.com/repos/martinkwan/mangonada/commits/a0b7da4726f172bbc5ee23aa542507a6293ed212"
       }
   }
];

export const JSONCommits = [
{
sha: "55aa2b84338818ebd2d2438912c9e4282b56bb2a",
commit: {
author: {
name: "Martin Kwan",
email: "martinkkwan@gmail.com",
date: "2016-09-25T00:08:51Z"
},
committer: {
name: "GitHub",
email: "noreply@github.com",
date: "2016-09-25T00:08:51Z"
},
message: "Merge pull request #36 from cadeban/apiCyto (fix) fix commit parent bug w/ Tim",
tree: {
sha: "6bcdd8fd0689e389abfe9e5519fd094af0ca1bb3",
url: "https://api.github.com/repos/martinkwan/mangonada/git/trees/6bcdd8fd0689e389abfe9e5519fd094af0ca1bb3"
},
url: "https://api.github.com/repos/martinkwan/mangonada/git/commits/55aa2b84338818ebd2d2438912c9e4282b56bb2a",
comment_count: 0
},
url: "https://api.github.com/repos/martinkwan/mangonada/commits/55aa2b84338818ebd2d2438912c9e4282b56bb2a",
html_url: "https://github.com/martinkwan/mangonada/commit/55aa2b84338818ebd2d2438912c9e4282b56bb2a",
comments_url: "https://api.github.com/repos/martinkwan/mangonada/commits/55aa2b84338818ebd2d2438912c9e4282b56bb2a/comments",
author: {
login: "martinkwan",
id: 13195630,
avatar_url: "https://avatars.githubusercontent.com/u/13195630?v=3",
gravatar_id: "",
url: "https://api.github.com/users/martinkwan",
html_url: "https://github.com/martinkwan",
followers_url: "https://api.github.com/users/martinkwan/followers",
following_url: "https://api.github.com/users/martinkwan/following{/other_user}",
gists_url: "https://api.github.com/users/martinkwan/gists{/gist_id}",
starred_url: "https://api.github.com/users/martinkwan/starred{/owner}{/repo}",
subscriptions_url: "https://api.github.com/users/martinkwan/subscriptions",
organizations_url: "https://api.github.com/users/martinkwan/orgs",
repos_url: "https://api.github.com/users/martinkwan/repos",
events_url: "https://api.github.com/users/martinkwan/events{/privacy}",
received_events_url: "https://api.github.com/users/martinkwan/received_events",
type: "User",
site_admin: false
},
committer: {
login: "web-flow",
id: 19864447,
avatar_url: "https://avatars.githubusercontent.com/u/19864447?v=3",
gravatar_id: "",
url: "https://api.github.com/users/web-flow",
html_url: "https://github.com/web-flow",
followers_url: "https://api.github.com/users/web-flow/followers",
following_url: "https://api.github.com/users/web-flow/following{/other_user}",
gists_url: "https://api.github.com/users/web-flow/gists{/gist_id}",
starred_url: "https://api.github.com/users/web-flow/starred{/owner}{/repo}",
subscriptions_url: "https://api.github.com/users/web-flow/subscriptions",
organizations_url: "https://api.github.com/users/web-flow/orgs",
repos_url: "https://api.github.com/users/web-flow/repos",
events_url: "https://api.github.com/users/web-flow/events{/privacy}",
received_events_url: "https://api.github.com/users/web-flow/received_events",
type: "User",
site_admin: false
},
parents: [
{
sha: "bebd397c748fcefe4de1b4d3dadf63e0ea854f64",
url: "https://api.github.com/repos/martinkwan/mangonada/commits/bebd397c748fcefe4de1b4d3dadf63e0ea854f64",
html_url: "https://github.com/martinkwan/mangonada/commit/bebd397c748fcefe4de1b4d3dadf63e0ea854f64"
},
{
sha: "7314287febf944a10e98ca3b2c509b95ae0734e4",
url: "https://api.github.com/repos/martinkwan/mangonada/commits/7314287febf944a10e98ca3b2c509b95ae0734e4",
html_url: "https://github.com/martinkwan/mangonada/commit/7314287febf944a10e98ca3b2c509b95ae0734e4"
}
]
},
{
sha: "7314287febf944a10e98ca3b2c509b95ae0734e4",
commit: {
author: {
name: "Martin Kwan",
email: "martinkkwan@gmail.com",
date: "2016-09-25T00:08:27Z"
},
committer: {
name: "GitHub",
email: "noreply@github.com",
date: "2016-09-25T00:08:27Z"
},
message: "(task) Remove console.logs from githubBranchFunction",
tree: {
sha: "6bcdd8fd0689e389abfe9e5519fd094af0ca1bb3",
url: "https://api.github.com/repos/martinkwan/mangonada/git/trees/6bcdd8fd0689e389abfe9e5519fd094af0ca1bb3"
},
url: "https://api.github.com/repos/martinkwan/mangonada/git/commits/7314287febf944a10e98ca3b2c509b95ae0734e4",
comment_count: 0
},
url: "https://api.github.com/repos/martinkwan/mangonada/commits/7314287febf944a10e98ca3b2c509b95ae0734e4",
html_url: "https://github.com/martinkwan/mangonada/commit/7314287febf944a10e98ca3b2c509b95ae0734e4",
comments_url: "https://api.github.com/repos/martinkwan/mangonada/commits/7314287febf944a10e98ca3b2c509b95ae0734e4/comments",
author: {
login: "martinkwan",
id: 13195630,
avatar_url: "https://avatars.githubusercontent.com/u/13195630?v=3",
gravatar_id: "",
url: "https://api.github.com/users/martinkwan",
html_url: "https://github.com/martinkwan",
followers_url: "https://api.github.com/users/martinkwan/followers",
following_url: "https://api.github.com/users/martinkwan/following{/other_user}",
gists_url: "https://api.github.com/users/martinkwan/gists{/gist_id}",
starred_url: "https://api.github.com/users/martinkwan/starred{/owner}{/repo}",
subscriptions_url: "https://api.github.com/users/martinkwan/subscriptions",
organizations_url: "https://api.github.com/users/martinkwan/orgs",
repos_url: "https://api.github.com/users/martinkwan/repos",
events_url: "https://api.github.com/users/martinkwan/events{/privacy}",
received_events_url: "https://api.github.com/users/martinkwan/received_events",
type: "User",
site_admin: false
},
committer: {
login: "web-flow",
id: 19864447,
avatar_url: "https://avatars.githubusercontent.com/u/19864447?v=3",
gravatar_id: "",
url: "https://api.github.com/users/web-flow",
html_url: "https://github.com/web-flow",
followers_url: "https://api.github.com/users/web-flow/followers",
following_url: "https://api.github.com/users/web-flow/following{/other_user}",
gists_url: "https://api.github.com/users/web-flow/gists{/gist_id}",
starred_url: "https://api.github.com/users/web-flow/starred{/owner}{/repo}",
subscriptions_url: "https://api.github.com/users/web-flow/subscriptions",
organizations_url: "https://api.github.com/users/web-flow/orgs",
repos_url: "https://api.github.com/users/web-flow/repos",
events_url: "https://api.github.com/users/web-flow/events{/privacy}",
received_events_url: "https://api.github.com/users/web-flow/received_events",
type: "User",
site_admin: false
},
parents: [
{
sha: "8962cd64490cc016cde43777b4706dc2031bb65c",
url: "https://api.github.com/repos/martinkwan/mangonada/commits/8962cd64490cc016cde43777b4706dc2031bb65c",
html_url: "https://github.com/martinkwan/mangonada/commit/8962cd64490cc016cde43777b4706dc2031bb65c"
}
]
},
{
sha: "8962cd64490cc016cde43777b4706dc2031bb65c",
commit: {
author: {
name: "Cadence Banulis",
email: "cbanulis@icloud.com",
date: "2016-09-25T00:05:33Z"
},
committer: {
name: "Cadence Banulis",
email: "cbanulis@icloud.com",
date: "2016-09-25T00:05:33Z"
},
message: "(fix) fix commit parent bug",
tree: {
sha: "ded04209c0dffaf65071af7d31ebbb6de560c167",
url: "https://api.github.com/repos/martinkwan/mangonada/git/trees/ded04209c0dffaf65071af7d31ebbb6de560c167"
},
url: "https://api.github.com/repos/martinkwan/mangonada/git/commits/8962cd64490cc016cde43777b4706dc2031bb65c",
comment_count: 0
},
url: "https://api.github.com/repos/martinkwan/mangonada/commits/8962cd64490cc016cde43777b4706dc2031bb65c",
html_url: "https://github.com/martinkwan/mangonada/commit/8962cd64490cc016cde43777b4706dc2031bb65c",
comments_url: "https://api.github.com/repos/martinkwan/mangonada/commits/8962cd64490cc016cde43777b4706dc2031bb65c/comments",
author: {
login: "cadeban",
id: 7953060,
avatar_url: "https://avatars.githubusercontent.com/u/7953060?v=3",
gravatar_id: "",
url: "https://api.github.com/users/cadeban",
html_url: "https://github.com/cadeban",
followers_url: "https://api.github.com/users/cadeban/followers",
following_url: "https://api.github.com/users/cadeban/following{/other_user}",
gists_url: "https://api.github.com/users/cadeban/gists{/gist_id}",
starred_url: "https://api.github.com/users/cadeban/starred{/owner}{/repo}",
subscriptions_url: "https://api.github.com/users/cadeban/subscriptions",
organizations_url: "https://api.github.com/users/cadeban/orgs",
repos_url: "https://api.github.com/users/cadeban/repos",
events_url: "https://api.github.com/users/cadeban/events{/privacy}",
received_events_url: "https://api.github.com/users/cadeban/received_events",
type: "User",
site_admin: false
},
committer: {
login: "cadeban",
id: 7953060,
avatar_url: "https://avatars.githubusercontent.com/u/7953060?v=3",
gravatar_id: "",
url: "https://api.github.com/users/cadeban",
html_url: "https://github.com/cadeban",
followers_url: "https://api.github.com/users/cadeban/followers",
following_url: "https://api.github.com/users/cadeban/following{/other_user}",
gists_url: "https://api.github.com/users/cadeban/gists{/gist_id}",
starred_url: "https://api.github.com/users/cadeban/starred{/owner}{/repo}",
subscriptions_url: "https://api.github.com/users/cadeban/subscriptions",
organizations_url: "https://api.github.com/users/cadeban/orgs",
repos_url: "https://api.github.com/users/cadeban/repos",
events_url: "https://api.github.com/users/cadeban/events{/privacy}",
received_events_url: "https://api.github.com/users/cadeban/received_events",
type: "User",
site_admin: false
},
parents: [
{
sha: "f4ed52c213755a5deb25c910674835e9e835dc2f",
url: "https://api.github.com/repos/martinkwan/mangonada/commits/f4ed52c213755a5deb25c910674835e9e835dc2f",
html_url: "https://github.com/martinkwan/mangonada/commit/f4ed52c213755a5deb25c910674835e9e835dc2f"
}
]
},
{
sha: "bebd397c748fcefe4de1b4d3dadf63e0ea854f64",
commit: {
author: {
name: "Martin Kwan",
email: "martinkkwan@gmail.com",
date: "2016-09-24T23:40:40Z"
},
committer: {
name: "GitHub",
email: "noreply@github.com",
date: "2016-09-24T23:40:40Z"
},
message: "Merge pull request #35 from cadeban/apiCyto (fix) clean up directory",
tree: {
sha: "1d5212d1ba15fc9dbafa28ed0837e65918f877d0",
url: "https://api.github.com/repos/martinkwan/mangonada/git/trees/1d5212d1ba15fc9dbafa28ed0837e65918f877d0"
},
url: "https://api.github.com/repos/martinkwan/mangonada/git/commits/bebd397c748fcefe4de1b4d3dadf63e0ea854f64",
comment_count: 0
},
url: "https://api.github.com/repos/martinkwan/mangonada/commits/bebd397c748fcefe4de1b4d3dadf63e0ea854f64",
html_url: "https://github.com/martinkwan/mangonada/commit/bebd397c748fcefe4de1b4d3dadf63e0ea854f64",
comments_url: "https://api.github.com/repos/martinkwan/mangonada/commits/bebd397c748fcefe4de1b4d3dadf63e0ea854f64/comments",
author: {
login: "martinkwan",
id: 13195630,
avatar_url: "https://avatars.githubusercontent.com/u/13195630?v=3",
gravatar_id: "",
url: "https://api.github.com/users/martinkwan",
html_url: "https://github.com/martinkwan",
followers_url: "https://api.github.com/users/martinkwan/followers",
following_url: "https://api.github.com/users/martinkwan/following{/other_user}",
gists_url: "https://api.github.com/users/martinkwan/gists{/gist_id}",
starred_url: "https://api.github.com/users/martinkwan/starred{/owner}{/repo}",
subscriptions_url: "https://api.github.com/users/martinkwan/subscriptions",
organizations_url: "https://api.github.com/users/martinkwan/orgs",
repos_url: "https://api.github.com/users/martinkwan/repos",
events_url: "https://api.github.com/users/martinkwan/events{/privacy}",
received_events_url: "https://api.github.com/users/martinkwan/received_events",
type: "User",
site_admin: false
},
committer: {
login: "web-flow",
id: 19864447,
avatar_url: "https://avatars.githubusercontent.com/u/19864447?v=3",
gravatar_id: "",
url: "https://api.github.com/users/web-flow",
html_url: "https://github.com/web-flow",
followers_url: "https://api.github.com/users/web-flow/followers",
following_url: "https://api.github.com/users/web-flow/following{/other_user}",
gists_url: "https://api.github.com/users/web-flow/gists{/gist_id}",
starred_url: "https://api.github.com/users/web-flow/starred{/owner}{/repo}",
subscriptions_url: "https://api.github.com/users/web-flow/subscriptions",
organizations_url: "https://api.github.com/users/web-flow/orgs",
repos_url: "https://api.github.com/users/web-flow/repos",
events_url: "https://api.github.com/users/web-flow/events{/privacy}",
received_events_url: "https://api.github.com/users/web-flow/received_events",
type: "User",
site_admin: false
},
parents: [
{
sha: "a0b7da4726f172bbc5ee23aa542507a6293ed212",
url: "https://api.github.com/repos/martinkwan/mangonada/commits/a0b7da4726f172bbc5ee23aa542507a6293ed212",
html_url: "https://github.com/martinkwan/mangonada/commit/a0b7da4726f172bbc5ee23aa542507a6293ed212"
},
{
sha: "f4ed52c213755a5deb25c910674835e9e835dc2f",
url: "https://api.github.com/repos/martinkwan/mangonada/commits/f4ed52c213755a5deb25c910674835e9e835dc2f",
html_url: "https://github.com/martinkwan/mangonada/commit/f4ed52c213755a5deb25c910674835e9e835dc2f"
}
]
},
{
sha: "f4ed52c213755a5deb25c910674835e9e835dc2f",
commit: {
author: {
name: "Cadence Banulis",
email: "cbanulis@icloud.com",
date: "2016-09-24T23:31:44Z"
},
committer: {
name: "Cadence Banulis",
email: "cbanulis@icloud.com",
date: "2016-09-24T23:31:44Z"
},
message: "(fix) clean up directory",
tree: {
sha: "1d5212d1ba15fc9dbafa28ed0837e65918f877d0",
url: "https://api.github.com/repos/martinkwan/mangonada/git/trees/1d5212d1ba15fc9dbafa28ed0837e65918f877d0"
},
url: "https://api.github.com/repos/martinkwan/mangonada/git/commits/f4ed52c213755a5deb25c910674835e9e835dc2f",
comment_count: 0
},
url: "https://api.github.com/repos/martinkwan/mangonada/commits/f4ed52c213755a5deb25c910674835e9e835dc2f",
html_url: "https://github.com/martinkwan/mangonada/commit/f4ed52c213755a5deb25c910674835e9e835dc2f",
comments_url: "https://api.github.com/repos/martinkwan/mangonada/commits/f4ed52c213755a5deb25c910674835e9e835dc2f/comments",
author: {
login: "cadeban",
id: 7953060,
avatar_url: "https://avatars.githubusercontent.com/u/7953060?v=3",
gravatar_id: "",
url: "https://api.github.com/users/cadeban",
html_url: "https://github.com/cadeban",
followers_url: "https://api.github.com/users/cadeban/followers",
following_url: "https://api.github.com/users/cadeban/following{/other_user}",
gists_url: "https://api.github.com/users/cadeban/gists{/gist_id}",
starred_url: "https://api.github.com/users/cadeban/starred{/owner}{/repo}",
subscriptions_url: "https://api.github.com/users/cadeban/subscriptions",
organizations_url: "https://api.github.com/users/cadeban/orgs",
repos_url: "https://api.github.com/users/cadeban/repos",
events_url: "https://api.github.com/users/cadeban/events{/privacy}",
received_events_url: "https://api.github.com/users/cadeban/received_events",
type: "User",
site_admin: false
},
committer: {
login: "cadeban",
id: 7953060,
avatar_url: "https://avatars.githubusercontent.com/u/7953060?v=3",
gravatar_id: "",
url: "https://api.github.com/users/cadeban",
html_url: "https://github.com/cadeban",
followers_url: "https://api.github.com/users/cadeban/followers",
following_url: "https://api.github.com/users/cadeban/following{/other_user}",
gists_url: "https://api.github.com/users/cadeban/gists{/gist_id}",
starred_url: "https://api.github.com/users/cadeban/starred{/owner}{/repo}",
subscriptions_url: "https://api.github.com/users/cadeban/subscriptions",
organizations_url: "https://api.github.com/users/cadeban/orgs",
repos_url: "https://api.github.com/users/cadeban/repos",
events_url: "https://api.github.com/users/cadeban/events{/privacy}",
received_events_url: "https://api.github.com/users/cadeban/received_events",
type: "User",
site_admin: false
},
parents: [
{
sha: "fdeda6e219053d09fc15afd3b2723ee17b08e2ce",
url: "https://api.github.com/repos/martinkwan/mangonada/commits/fdeda6e219053d09fc15afd3b2723ee17b08e2ce",
html_url: "https://github.com/martinkwan/mangonada/commit/fdeda6e219053d09fc15afd3b2723ee17b08e2ce"
}
]
},
{
sha: "fdeda6e219053d09fc15afd3b2723ee17b08e2ce",
commit: {
author: {
name: "Cadence Banulis",
email: "cbanulis@icloud.com",
date: "2016-09-24T23:29:06Z"
},
committer: {
name: "Cadence Banulis",
email: "cbanulis@icloud.com",
date: "2016-09-24T23:29:06Z"
},
message: "(fix) remove files",
tree: {
sha: "e3b4d76633b3c1dcaaefe2f91fad4129a5fedb1b",
url: "https://api.github.com/repos/martinkwan/mangonada/git/trees/e3b4d76633b3c1dcaaefe2f91fad4129a5fedb1b"
},
url: "https://api.github.com/repos/martinkwan/mangonada/git/commits/fdeda6e219053d09fc15afd3b2723ee17b08e2ce",
comment_count: 0
},
url: "https://api.github.com/repos/martinkwan/mangonada/commits/fdeda6e219053d09fc15afd3b2723ee17b08e2ce",
html_url: "https://github.com/martinkwan/mangonada/commit/fdeda6e219053d09fc15afd3b2723ee17b08e2ce",
comments_url: "https://api.github.com/repos/martinkwan/mangonada/commits/fdeda6e219053d09fc15afd3b2723ee17b08e2ce/comments",
author: {
login: "cadeban",
id: 7953060,
avatar_url: "https://avatars.githubusercontent.com/u/7953060?v=3",
gravatar_id: "",
url: "https://api.github.com/users/cadeban",
html_url: "https://github.com/cadeban",
followers_url: "https://api.github.com/users/cadeban/followers",
following_url: "https://api.github.com/users/cadeban/following{/other_user}",
gists_url: "https://api.github.com/users/cadeban/gists{/gist_id}",
starred_url: "https://api.github.com/users/cadeban/starred{/owner}{/repo}",
subscriptions_url: "https://api.github.com/users/cadeban/subscriptions",
organizations_url: "https://api.github.com/users/cadeban/orgs",
repos_url: "https://api.github.com/users/cadeban/repos",
events_url: "https://api.github.com/users/cadeban/events{/privacy}",
received_events_url: "https://api.github.com/users/cadeban/received_events",
type: "User",
site_admin: false
},
committer: {
login: "cadeban",
id: 7953060,
avatar_url: "https://avatars.githubusercontent.com/u/7953060?v=3",
gravatar_id: "",
url: "https://api.github.com/users/cadeban",
html_url: "https://github.com/cadeban",
followers_url: "https://api.github.com/users/cadeban/followers",
following_url: "https://api.github.com/users/cadeban/following{/other_user}",
gists_url: "https://api.github.com/users/cadeban/gists{/gist_id}",
starred_url: "https://api.github.com/users/cadeban/starred{/owner}{/repo}",
subscriptions_url: "https://api.github.com/users/cadeban/subscriptions",
organizations_url: "https://api.github.com/users/cadeban/orgs",
repos_url: "https://api.github.com/users/cadeban/repos",
events_url: "https://api.github.com/users/cadeban/events{/privacy}",
received_events_url: "https://api.github.com/users/cadeban/received_events",
type: "User",
site_admin: false
},
parents: [
{
sha: "63c744040b31c07078e14d4bdd95d2c8d958d497",
url: "https://api.github.com/repos/martinkwan/mangonada/commits/63c744040b31c07078e14d4bdd95d2c8d958d497",
html_url: "https://github.com/martinkwan/mangonada/commit/63c744040b31c07078e14d4bdd95d2c8d958d497"
}
]
},
{
sha: "63c744040b31c07078e14d4bdd95d2c8d958d497",
commit: {
author: {
name: "Cadence Banulis",
email: "cbanulis@icloud.com",
date: "2016-09-24T23:22:55Z"
},
committer: {
name: "Cadence Banulis",
email: "cbanulis@icloud.com",
date: "2016-09-24T23:22:55Z"
},
message: "(fix) add extra files to .gitignore",
tree: {
sha: "41cda7f96b444ee67f16810e4b737418085a80d4",
url: "https://api.github.com/repos/martinkwan/mangonada/git/trees/41cda7f96b444ee67f16810e4b737418085a80d4"
},
url: "https://api.github.com/repos/martinkwan/mangonada/git/commits/63c744040b31c07078e14d4bdd95d2c8d958d497",
comment_count: 0
},
url: "https://api.github.com/repos/martinkwan/mangonada/commits/63c744040b31c07078e14d4bdd95d2c8d958d497",
html_url: "https://github.com/martinkwan/mangonada/commit/63c744040b31c07078e14d4bdd95d2c8d958d497",
comments_url: "https://api.github.com/repos/martinkwan/mangonada/commits/63c744040b31c07078e14d4bdd95d2c8d958d497/comments",
author: {
login: "cadeban",
id: 7953060,
avatar_url: "https://avatars.githubusercontent.com/u/7953060?v=3",
gravatar_id: "",
url: "https://api.github.com/users/cadeban",
html_url: "https://github.com/cadeban",
followers_url: "https://api.github.com/users/cadeban/followers",
following_url: "https://api.github.com/users/cadeban/following{/other_user}",
gists_url: "https://api.github.com/users/cadeban/gists{/gist_id}",
starred_url: "https://api.github.com/users/cadeban/starred{/owner}{/repo}",
subscriptions_url: "https://api.github.com/users/cadeban/subscriptions",
organizations_url: "https://api.github.com/users/cadeban/orgs",
repos_url: "https://api.github.com/users/cadeban/repos",
events_url: "https://api.github.com/users/cadeban/events{/privacy}",
received_events_url: "https://api.github.com/users/cadeban/received_events",
type: "User",
site_admin: false
},
committer: {
login: "cadeban",
id: 7953060,
avatar_url: "https://avatars.githubusercontent.com/u/7953060?v=3",
gravatar_id: "",
url: "https://api.github.com/users/cadeban",
html_url: "https://github.com/cadeban",
followers_url: "https://api.github.com/users/cadeban/followers",
following_url: "https://api.github.com/users/cadeban/following{/other_user}",
gists_url: "https://api.github.com/users/cadeban/gists{/gist_id}",
starred_url: "https://api.github.com/users/cadeban/starred{/owner}{/repo}",
subscriptions_url: "https://api.github.com/users/cadeban/subscriptions",
organizations_url: "https://api.github.com/users/cadeban/orgs",
repos_url: "https://api.github.com/users/cadeban/repos",
events_url: "https://api.github.com/users/cadeban/events{/privacy}",
received_events_url: "https://api.github.com/users/cadeban/received_events",
type: "User",
site_admin: false
},
parents: [
{
sha: "cf2a5045abc4ff805bcc6a23343a6ccaec929feb",
url: "https://api.github.com/repos/martinkwan/mangonada/commits/cf2a5045abc4ff805bcc6a23343a6ccaec929feb",
html_url: "https://github.com/martinkwan/mangonada/commit/cf2a5045abc4ff805bcc6a23343a6ccaec929feb"
}
]
},
{
sha: "cf2a5045abc4ff805bcc6a23343a6ccaec929feb",
commit: {
author: {
name: "Cadence Banulis",
email: "cbanulis@icloud.com",
date: "2016-09-24T23:21:40Z"
},
committer: {
name: "Cadence Banulis",
email: "cbanulis@icloud.com",
date: "2016-09-24T23:21:40Z"
},
message: "(fix) add extra file to .gitignore",
tree: {
sha: "1189032c723cbde3edfbdb379986b59fa8c77b9e",
url: "https://api.github.com/repos/martinkwan/mangonada/git/trees/1189032c723cbde3edfbdb379986b59fa8c77b9e"
},
url: "https://api.github.com/repos/martinkwan/mangonada/git/commits/cf2a5045abc4ff805bcc6a23343a6ccaec929feb",
comment_count: 0
},
url: "https://api.github.com/repos/martinkwan/mangonada/commits/cf2a5045abc4ff805bcc6a23343a6ccaec929feb",
html_url: "https://github.com/martinkwan/mangonada/commit/cf2a5045abc4ff805bcc6a23343a6ccaec929feb",
comments_url: "https://api.github.com/repos/martinkwan/mangonada/commits/cf2a5045abc4ff805bcc6a23343a6ccaec929feb/comments",
author: {
login: "cadeban",
id: 7953060,
avatar_url: "https://avatars.githubusercontent.com/u/7953060?v=3",
gravatar_id: "",
url: "https://api.github.com/users/cadeban",
html_url: "https://github.com/cadeban",
followers_url: "https://api.github.com/users/cadeban/followers",
following_url: "https://api.github.com/users/cadeban/following{/other_user}",
gists_url: "https://api.github.com/users/cadeban/gists{/gist_id}",
starred_url: "https://api.github.com/users/cadeban/starred{/owner}{/repo}",
subscriptions_url: "https://api.github.com/users/cadeban/subscriptions",
organizations_url: "https://api.github.com/users/cadeban/orgs",
repos_url: "https://api.github.com/users/cadeban/repos",
events_url: "https://api.github.com/users/cadeban/events{/privacy}",
received_events_url: "https://api.github.com/users/cadeban/received_events",
type: "User",
site_admin: false
},
committer: {
login: "cadeban",
id: 7953060,
avatar_url: "https://avatars.githubusercontent.com/u/7953060?v=3",
gravatar_id: "",
url: "https://api.github.com/users/cadeban",
html_url: "https://github.com/cadeban",
followers_url: "https://api.github.com/users/cadeban/followers",
following_url: "https://api.github.com/users/cadeban/following{/other_user}",
gists_url: "https://api.github.com/users/cadeban/gists{/gist_id}",
starred_url: "https://api.github.com/users/cadeban/starred{/owner}{/repo}",
subscriptions_url: "https://api.github.com/users/cadeban/subscriptions",
organizations_url: "https://api.github.com/users/cadeban/orgs",
repos_url: "https://api.github.com/users/cadeban/repos",
events_url: "https://api.github.com/users/cadeban/events{/privacy}",
received_events_url: "https://api.github.com/users/cadeban/received_events",
type: "User",
site_admin: false
},
parents: [
{
sha: "f7566e316eacb179f6cacd16ffaeb85c5daf3b94",
url: "https://api.github.com/repos/martinkwan/mangonada/commits/f7566e316eacb179f6cacd16ffaeb85c5daf3b94",
html_url: "https://github.com/martinkwan/mangonada/commit/f7566e316eacb179f6cacd16ffaeb85c5daf3b94"
}
]
},
{
sha: "f7566e316eacb179f6cacd16ffaeb85c5daf3b94",
commit: {
author: {
name: "Cadence Banulis",
email: "cbanulis@icloud.com",
date: "2016-09-24T23:09:32Z"
},
committer: {
name: "Cadence Banulis",
email: "cbanulis@icloud.com",
date: "2016-09-24T23:09:32Z"
},
message: "(fix) add gitGraph.js back into directory",
tree: {
sha: "116326ebf3bb49d0a4c9c5bb795e83822f3446ba",
url: "https://api.github.com/repos/martinkwan/mangonada/git/trees/116326ebf3bb49d0a4c9c5bb795e83822f3446ba"
},
url: "https://api.github.com/repos/martinkwan/mangonada/git/commits/f7566e316eacb179f6cacd16ffaeb85c5daf3b94",
comment_count: 0
},
url: "https://api.github.com/repos/martinkwan/mangonada/commits/f7566e316eacb179f6cacd16ffaeb85c5daf3b94",
html_url: "https://github.com/martinkwan/mangonada/commit/f7566e316eacb179f6cacd16ffaeb85c5daf3b94",
comments_url: "https://api.github.com/repos/martinkwan/mangonada/commits/f7566e316eacb179f6cacd16ffaeb85c5daf3b94/comments",
author: {
login: "cadeban",
id: 7953060,
avatar_url: "https://avatars.githubusercontent.com/u/7953060?v=3",
gravatar_id: "",
url: "https://api.github.com/users/cadeban",
html_url: "https://github.com/cadeban",
followers_url: "https://api.github.com/users/cadeban/followers",
following_url: "https://api.github.com/users/cadeban/following{/other_user}",
gists_url: "https://api.github.com/users/cadeban/gists{/gist_id}",
starred_url: "https://api.github.com/users/cadeban/starred{/owner}{/repo}",
subscriptions_url: "https://api.github.com/users/cadeban/subscriptions",
organizations_url: "https://api.github.com/users/cadeban/orgs",
repos_url: "https://api.github.com/users/cadeban/repos",
events_url: "https://api.github.com/users/cadeban/events{/privacy}",
received_events_url: "https://api.github.com/users/cadeban/received_events",
type: "User",
site_admin: false
},
committer: {
login: "cadeban",
id: 7953060,
avatar_url: "https://avatars.githubusercontent.com/u/7953060?v=3",
gravatar_id: "",
url: "https://api.github.com/users/cadeban",
html_url: "https://github.com/cadeban",
followers_url: "https://api.github.com/users/cadeban/followers",
following_url: "https://api.github.com/users/cadeban/following{/other_user}",
gists_url: "https://api.github.com/users/cadeban/gists{/gist_id}",
starred_url: "https://api.github.com/users/cadeban/starred{/owner}{/repo}",
subscriptions_url: "https://api.github.com/users/cadeban/subscriptions",
organizations_url: "https://api.github.com/users/cadeban/orgs",
repos_url: "https://api.github.com/users/cadeban/repos",
events_url: "https://api.github.com/users/cadeban/events{/privacy}",
received_events_url: "https://api.github.com/users/cadeban/received_events",
type: "User",
site_admin: false
},
parents: [
{
sha: "e963879796af4955d575538d4e283d969631a25a",
url: "https://api.github.com/repos/martinkwan/mangonada/commits/e963879796af4955d575538d4e283d969631a25a",
html_url: "https://github.com/martinkwan/mangonada/commit/e963879796af4955d575538d4e283d969631a25a"
}
]
},
{
sha: "e963879796af4955d575538d4e283d969631a25a",
commit: {
author: {
name: "Cadence Banulis",
email: "cbanulis@icloud.com",
date: "2016-09-24T18:25:09Z"
},
committer: {
name: "Cadence Banulis",
email: "cbanulis@icloud.com",
date: "2016-09-24T18:25:09Z"
},
message: "(feat) hook up back-end to front-end example w/ Tim",
tree: {
sha: "eb0ae2ea80673f81b94bc59c7796a8b9fb41390c",
url: "https://api.github.com/repos/martinkwan/mangonada/git/trees/eb0ae2ea80673f81b94bc59c7796a8b9fb41390c"
},
url: "https://api.github.com/repos/martinkwan/mangonada/git/commits/e963879796af4955d575538d4e283d969631a25a",
comment_count: 0
},
url: "https://api.github.com/repos/martinkwan/mangonada/commits/e963879796af4955d575538d4e283d969631a25a",
html_url: "https://github.com/martinkwan/mangonada/commit/e963879796af4955d575538d4e283d969631a25a",
comments_url: "https://api.github.com/repos/martinkwan/mangonada/commits/e963879796af4955d575538d4e283d969631a25a/comments",
author: {
login: "cadeban",
id: 7953060,
avatar_url: "https://avatars.githubusercontent.com/u/7953060?v=3",
gravatar_id: "",
url: "https://api.github.com/users/cadeban",
html_url: "https://github.com/cadeban",
followers_url: "https://api.github.com/users/cadeban/followers",
following_url: "https://api.github.com/users/cadeban/following{/other_user}",
gists_url: "https://api.github.com/users/cadeban/gists{/gist_id}",
starred_url: "https://api.github.com/users/cadeban/starred{/owner}{/repo}",
subscriptions_url: "https://api.github.com/users/cadeban/subscriptions",
organizations_url: "https://api.github.com/users/cadeban/orgs",
repos_url: "https://api.github.com/users/cadeban/repos",
events_url: "https://api.github.com/users/cadeban/events{/privacy}",
received_events_url: "https://api.github.com/users/cadeban/received_events",
type: "User",
site_admin: false
},
committer: {
login: "cadeban",
id: 7953060,
avatar_url: "https://avatars.githubusercontent.com/u/7953060?v=3",
gravatar_id: "",
url: "https://api.github.com/users/cadeban",
html_url: "https://github.com/cadeban",
followers_url: "https://api.github.com/users/cadeban/followers",
following_url: "https://api.github.com/users/cadeban/following{/other_user}",
gists_url: "https://api.github.com/users/cadeban/gists{/gist_id}",
starred_url: "https://api.github.com/users/cadeban/starred{/owner}{/repo}",
subscriptions_url: "https://api.github.com/users/cadeban/subscriptions",
organizations_url: "https://api.github.com/users/cadeban/orgs",
repos_url: "https://api.github.com/users/cadeban/repos",
events_url: "https://api.github.com/users/cadeban/events{/privacy}",
received_events_url: "https://api.github.com/users/cadeban/received_events",
type: "User",
site_admin: false
},
parents: [
{
sha: "7192380d728f146ac79be79b355226d05fcdb07d",
url: "https://api.github.com/repos/martinkwan/mangonada/commits/7192380d728f146ac79be79b355226d05fcdb07d",
html_url: "https://github.com/martinkwan/mangonada/commit/7192380d728f146ac79be79b355226d05fcdb07d"
}
]
},
{
sha: "7192380d728f146ac79be79b355226d05fcdb07d",
commit: {
author: {
name: "Cadence Banulis",
email: "cbanulis@icloud.com",
date: "2016-09-24T18:00:47Z"
},
committer: {
name: "Cadence Banulis",
email: "cbanulis@icloud.com",
date: "2016-09-24T18:00:47Z"
},
message: "(chore) remove bower components",
tree: {
sha: "87e21646bc46b1009ea0a0049c4af9972b43a18b",
url: "https://api.github.com/repos/martinkwan/mangonada/git/trees/87e21646bc46b1009ea0a0049c4af9972b43a18b"
},
url: "https://api.github.com/repos/martinkwan/mangonada/git/commits/7192380d728f146ac79be79b355226d05fcdb07d",
comment_count: 0
},
url: "https://api.github.com/repos/martinkwan/mangonada/commits/7192380d728f146ac79be79b355226d05fcdb07d",
html_url: "https://github.com/martinkwan/mangonada/commit/7192380d728f146ac79be79b355226d05fcdb07d",
comments_url: "https://api.github.com/repos/martinkwan/mangonada/commits/7192380d728f146ac79be79b355226d05fcdb07d/comments",
author: {
login: "cadeban",
id: 7953060,
avatar_url: "https://avatars.githubusercontent.com/u/7953060?v=3",
gravatar_id: "",
url: "https://api.github.com/users/cadeban",
html_url: "https://github.com/cadeban",
followers_url: "https://api.github.com/users/cadeban/followers",
following_url: "https://api.github.com/users/cadeban/following{/other_user}",
gists_url: "https://api.github.com/users/cadeban/gists{/gist_id}",
starred_url: "https://api.github.com/users/cadeban/starred{/owner}{/repo}",
subscriptions_url: "https://api.github.com/users/cadeban/subscriptions",
organizations_url: "https://api.github.com/users/cadeban/orgs",
repos_url: "https://api.github.com/users/cadeban/repos",
events_url: "https://api.github.com/users/cadeban/events{/privacy}",
received_events_url: "https://api.github.com/users/cadeban/received_events",
type: "User",
site_admin: false
},
committer: {
login: "cadeban",
id: 7953060,
avatar_url: "https://avatars.githubusercontent.com/u/7953060?v=3",
gravatar_id: "",
url: "https://api.github.com/users/cadeban",
html_url: "https://github.com/cadeban",
followers_url: "https://api.github.com/users/cadeban/followers",
following_url: "https://api.github.com/users/cadeban/following{/other_user}",
gists_url: "https://api.github.com/users/cadeban/gists{/gist_id}",
starred_url: "https://api.github.com/users/cadeban/starred{/owner}{/repo}",
subscriptions_url: "https://api.github.com/users/cadeban/subscriptions",
organizations_url: "https://api.github.com/users/cadeban/orgs",
repos_url: "https://api.github.com/users/cadeban/repos",
events_url: "https://api.github.com/users/cadeban/events{/privacy}",
received_events_url: "https://api.github.com/users/cadeban/received_events",
type: "User",
site_admin: false
},
parents: [
{
sha: "73357596d3d19bdd4429e8899426e742902e4c59",
url: "https://api.github.com/repos/martinkwan/mangonada/commits/73357596d3d19bdd4429e8899426e742902e4c59",
html_url: "https://github.com/martinkwan/mangonada/commit/73357596d3d19bdd4429e8899426e742902e4c59"
}
]
},
{
sha: "73357596d3d19bdd4429e8899426e742902e4c59",
commit: {
author: {
name: "Cadence Banulis",
email: "cbanulis@icloud.com",
date: "2016-09-24T03:29:36Z"
},
committer: {
name: "Cadence Banulis",
email: "cbanulis@icloud.com",
date: "2016-09-24T17:57:25Z"
},
message: "(feat) begin integrating github API call with cytoscape functions w/ Tim",
tree: {
sha: "034a18c3f120ebcf4bd4d05e69b7664e4d1b13d7",
url: "https://api.github.com/repos/martinkwan/mangonada/git/trees/034a18c3f120ebcf4bd4d05e69b7664e4d1b13d7"
},
url: "https://api.github.com/repos/martinkwan/mangonada/git/commits/73357596d3d19bdd4429e8899426e742902e4c59",
comment_count: 0
},
url: "https://api.github.com/repos/martinkwan/mangonada/commits/73357596d3d19bdd4429e8899426e742902e4c59",
html_url: "https://github.com/martinkwan/mangonada/commit/73357596d3d19bdd4429e8899426e742902e4c59",
comments_url: "https://api.github.com/repos/martinkwan/mangonada/commits/73357596d3d19bdd4429e8899426e742902e4c59/comments",
author: {
login: "cadeban",
id: 7953060,
avatar_url: "https://avatars.githubusercontent.com/u/7953060?v=3",
gravatar_id: "",
url: "https://api.github.com/users/cadeban",
html_url: "https://github.com/cadeban",
followers_url: "https://api.github.com/users/cadeban/followers",
following_url: "https://api.github.com/users/cadeban/following{/other_user}",
gists_url: "https://api.github.com/users/cadeban/gists{/gist_id}",
starred_url: "https://api.github.com/users/cadeban/starred{/owner}{/repo}",
subscriptions_url: "https://api.github.com/users/cadeban/subscriptions",
organizations_url: "https://api.github.com/users/cadeban/orgs",
repos_url: "https://api.github.com/users/cadeban/repos",
events_url: "https://api.github.com/users/cadeban/events{/privacy}",
received_events_url: "https://api.github.com/users/cadeban/received_events",
type: "User",
site_admin: false
},
committer: {
login: "cadeban",
id: 7953060,
avatar_url: "https://avatars.githubusercontent.com/u/7953060?v=3",
gravatar_id: "",
url: "https://api.github.com/users/cadeban",
html_url: "https://github.com/cadeban",
followers_url: "https://api.github.com/users/cadeban/followers",
following_url: "https://api.github.com/users/cadeban/following{/other_user}",
gists_url: "https://api.github.com/users/cadeban/gists{/gist_id}",
starred_url: "https://api.github.com/users/cadeban/starred{/owner}{/repo}",
subscriptions_url: "https://api.github.com/users/cadeban/subscriptions",
organizations_url: "https://api.github.com/users/cadeban/orgs",
repos_url: "https://api.github.com/users/cadeban/repos",
events_url: "https://api.github.com/users/cadeban/events{/privacy}",
received_events_url: "https://api.github.com/users/cadeban/received_events",
type: "User",
site_admin: false
},
parents: [
{
sha: "a347ed9e8a0eab04a40acf1ad7708dbf804e74d9",
url: "https://api.github.com/repos/martinkwan/mangonada/commits/a347ed9e8a0eab04a40acf1ad7708dbf804e74d9",
html_url: "https://github.com/martinkwan/mangonada/commit/a347ed9e8a0eab04a40acf1ad7708dbf804e74d9"
}
]
},
{
sha: "a347ed9e8a0eab04a40acf1ad7708dbf804e74d9",
commit: {
author: {
name: "Cadence Banulis",
email: "cbanulis@icloud.com",
date: "2016-09-24T02:18:58Z"
},
committer: {
name: "Cadence Banulis",
email: "cbanulis@icloud.com",
date: "2016-09-24T17:55:22Z"
},
message: "(chore) added githubBranchFunction and jsonToGitGraph to example folder",
tree: {
sha: "86e6ddf9072b4dc86405af37fa01b4a730dfeafb",
url: "https://api.github.com/repos/martinkwan/mangonada/git/trees/86e6ddf9072b4dc86405af37fa01b4a730dfeafb"
},
url: "https://api.github.com/repos/martinkwan/mangonada/git/commits/a347ed9e8a0eab04a40acf1ad7708dbf804e74d9",
comment_count: 0
},
url: "https://api.github.com/repos/martinkwan/mangonada/commits/a347ed9e8a0eab04a40acf1ad7708dbf804e74d9",
html_url: "https://github.com/martinkwan/mangonada/commit/a347ed9e8a0eab04a40acf1ad7708dbf804e74d9",
comments_url: "https://api.github.com/repos/martinkwan/mangonada/commits/a347ed9e8a0eab04a40acf1ad7708dbf804e74d9/comments",
author: {
login: "cadeban",
id: 7953060,
avatar_url: "https://avatars.githubusercontent.com/u/7953060?v=3",
gravatar_id: "",
url: "https://api.github.com/users/cadeban",
html_url: "https://github.com/cadeban",
followers_url: "https://api.github.com/users/cadeban/followers",
following_url: "https://api.github.com/users/cadeban/following{/other_user}",
gists_url: "https://api.github.com/users/cadeban/gists{/gist_id}",
starred_url: "https://api.github.com/users/cadeban/starred{/owner}{/repo}",
subscriptions_url: "https://api.github.com/users/cadeban/subscriptions",
organizations_url: "https://api.github.com/users/cadeban/orgs",
repos_url: "https://api.github.com/users/cadeban/repos",
events_url: "https://api.github.com/users/cadeban/events{/privacy}",
received_events_url: "https://api.github.com/users/cadeban/received_events",
type: "User",
site_admin: false
},
committer: {
login: "cadeban",
id: 7953060,
avatar_url: "https://avatars.githubusercontent.com/u/7953060?v=3",
gravatar_id: "",
url: "https://api.github.com/users/cadeban",
html_url: "https://github.com/cadeban",
followers_url: "https://api.github.com/users/cadeban/followers",
following_url: "https://api.github.com/users/cadeban/following{/other_user}",
gists_url: "https://api.github.com/users/cadeban/gists{/gist_id}",
starred_url: "https://api.github.com/users/cadeban/starred{/owner}{/repo}",
subscriptions_url: "https://api.github.com/users/cadeban/subscriptions",
organizations_url: "https://api.github.com/users/cadeban/orgs",
repos_url: "https://api.github.com/users/cadeban/repos",
events_url: "https://api.github.com/users/cadeban/events{/privacy}",
received_events_url: "https://api.github.com/users/cadeban/received_events",
type: "User",
site_admin: false
},
parents: [
{
sha: "a0b7da4726f172bbc5ee23aa542507a6293ed212",
url: "https://api.github.com/repos/martinkwan/mangonada/commits/a0b7da4726f172bbc5ee23aa542507a6293ed212",
html_url: "https://github.com/martinkwan/mangonada/commit/a0b7da4726f172bbc5ee23aa542507a6293ed212"
}
]
},
{
sha: "a0b7da4726f172bbc5ee23aa542507a6293ed212",
commit: {
author: {
name: "arnav-aggarwal",
email: "arnavaggrwl@gmail.com",
date: "2016-09-24T02:50:56Z"
},
committer: {
name: "GitHub",
email: "noreply@github.com",
date: "2016-09-24T02:50:56Z"
},
message: "Merge pull request #33 from martinkwan/gitLink (feat) display public repos with search",
tree: {
sha: "fa918b9a7d3b9720f61649bef4e93ed7a392eac0",
url: "https://api.github.com/repos/martinkwan/mangonada/git/trees/fa918b9a7d3b9720f61649bef4e93ed7a392eac0"
},
url: "https://api.github.com/repos/martinkwan/mangonada/git/commits/a0b7da4726f172bbc5ee23aa542507a6293ed212",
comment_count: 0
},
url: "https://api.github.com/repos/martinkwan/mangonada/commits/a0b7da4726f172bbc5ee23aa542507a6293ed212",
html_url: "https://github.com/martinkwan/mangonada/commit/a0b7da4726f172bbc5ee23aa542507a6293ed212",
comments_url: "https://api.github.com/repos/martinkwan/mangonada/commits/a0b7da4726f172bbc5ee23aa542507a6293ed212/comments",
author: {
login: "arnav-aggarwal",
id: 19792993,
avatar_url: "https://avatars.githubusercontent.com/u/19792993?v=3",
gravatar_id: "",
url: "https://api.github.com/users/arnav-aggarwal",
html_url: "https://github.com/arnav-aggarwal",
followers_url: "https://api.github.com/users/arnav-aggarwal/followers",
following_url: "https://api.github.com/users/arnav-aggarwal/following{/other_user}",
gists_url: "https://api.github.com/users/arnav-aggarwal/gists{/gist_id}",
starred_url: "https://api.github.com/users/arnav-aggarwal/starred{/owner}{/repo}",
subscriptions_url: "https://api.github.com/users/arnav-aggarwal/subscriptions",
organizations_url: "https://api.github.com/users/arnav-aggarwal/orgs",
repos_url: "https://api.github.com/users/arnav-aggarwal/repos",
events_url: "https://api.github.com/users/arnav-aggarwal/events{/privacy}",
received_events_url: "https://api.github.com/users/arnav-aggarwal/received_events",
type: "User",
site_admin: false
},
committer: {
login: "web-flow",
id: 19864447,
avatar_url: "https://avatars.githubusercontent.com/u/19864447?v=3",
gravatar_id: "",
url: "https://api.github.com/users/web-flow",
html_url: "https://github.com/web-flow",
followers_url: "https://api.github.com/users/web-flow/followers",
following_url: "https://api.github.com/users/web-flow/following{/other_user}",
gists_url: "https://api.github.com/users/web-flow/gists{/gist_id}",
starred_url: "https://api.github.com/users/web-flow/starred{/owner}{/repo}",
subscriptions_url: "https://api.github.com/users/web-flow/subscriptions",
organizations_url: "https://api.github.com/users/web-flow/orgs",
repos_url: "https://api.github.com/users/web-flow/repos",
events_url: "https://api.github.com/users/web-flow/events{/privacy}",
received_events_url: "https://api.github.com/users/web-flow/received_events",
type: "User",
site_admin: false
},
parents: [
{
sha: "ebd6c31f06d2cda93fd80a33da488ab25b3c0f9f",
url: "https://api.github.com/repos/martinkwan/mangonada/commits/ebd6c31f06d2cda93fd80a33da488ab25b3c0f9f",
html_url: "https://github.com/martinkwan/mangonada/commit/ebd6c31f06d2cda93fd80a33da488ab25b3c0f9f"
},
{
sha: "fff4f81e32763d3fc9b5d796852c424289ef8066",
url: "https://api.github.com/repos/martinkwan/mangonada/commits/fff4f81e32763d3fc9b5d796852c424289ef8066",
html_url: "https://github.com/martinkwan/mangonada/commit/fff4f81e32763d3fc9b5d796852c424289ef8066"
}
]
},
{
sha: "fff4f81e32763d3fc9b5d796852c424289ef8066",
commit: {
author: {
name: "Martin",
email: "martinkkwan@gmail.com",
date: "2016-09-24T02:38:27Z"
},
committer: {
name: "Martin",
email: "martinkkwan@gmail.com",
date: "2016-09-24T02:38:27Z"
},
message: "(feat) display public repos with search",
tree: {
sha: "fa918b9a7d3b9720f61649bef4e93ed7a392eac0",
url: "https://api.github.com/repos/martinkwan/mangonada/git/trees/fa918b9a7d3b9720f61649bef4e93ed7a392eac0"
},
url: "https://api.github.com/repos/martinkwan/mangonada/git/commits/fff4f81e32763d3fc9b5d796852c424289ef8066",
comment_count: 0
},
url: "https://api.github.com/repos/martinkwan/mangonada/commits/fff4f81e32763d3fc9b5d796852c424289ef8066",
html_url: "https://github.com/martinkwan/mangonada/commit/fff4f81e32763d3fc9b5d796852c424289ef8066",
comments_url: "https://api.github.com/repos/martinkwan/mangonada/commits/fff4f81e32763d3fc9b5d796852c424289ef8066/comments",
author: {
login: "martinkwan",
id: 13195630,
avatar_url: "https://avatars.githubusercontent.com/u/13195630?v=3",
gravatar_id: "",
url: "https://api.github.com/users/martinkwan",
html_url: "https://github.com/martinkwan",
followers_url: "https://api.github.com/users/martinkwan/followers",
following_url: "https://api.github.com/users/martinkwan/following{/other_user}",
gists_url: "https://api.github.com/users/martinkwan/gists{/gist_id}",
starred_url: "https://api.github.com/users/martinkwan/starred{/owner}{/repo}",
subscriptions_url: "https://api.github.com/users/martinkwan/subscriptions",
organizations_url: "https://api.github.com/users/martinkwan/orgs",
repos_url: "https://api.github.com/users/martinkwan/repos",
events_url: "https://api.github.com/users/martinkwan/events{/privacy}",
received_events_url: "https://api.github.com/users/martinkwan/received_events",
type: "User",
site_admin: false
},
committer: {
login: "martinkwan",
id: 13195630,
avatar_url: "https://avatars.githubusercontent.com/u/13195630?v=3",
gravatar_id: "",
url: "https://api.github.com/users/martinkwan",
html_url: "https://github.com/martinkwan",
followers_url: "https://api.github.com/users/martinkwan/followers",
following_url: "https://api.github.com/users/martinkwan/following{/other_user}",
gists_url: "https://api.github.com/users/martinkwan/gists{/gist_id}",
starred_url: "https://api.github.com/users/martinkwan/starred{/owner}{/repo}",
subscriptions_url: "https://api.github.com/users/martinkwan/subscriptions",
organizations_url: "https://api.github.com/users/martinkwan/orgs",
repos_url: "https://api.github.com/users/martinkwan/repos",
events_url: "https://api.github.com/users/martinkwan/events{/privacy}",
received_events_url: "https://api.github.com/users/martinkwan/received_events",
type: "User",
site_admin: false
},
parents: [
{
sha: "ebd6c31f06d2cda93fd80a33da488ab25b3c0f9f",
url: "https://api.github.com/repos/martinkwan/mangonada/commits/ebd6c31f06d2cda93fd80a33da488ab25b3c0f9f",
html_url: "https://github.com/martinkwan/mangonada/commit/ebd6c31f06d2cda93fd80a33da488ab25b3c0f9f"
}
]
},
{
sha: "ebd6c31f06d2cda93fd80a33da488ab25b3c0f9f",
commit: {
author: {
name: "Martin Kwan",
email: "martinkkwan@gmail.com",
date: "2016-09-24T02:18:28Z"
},
committer: {
name: "GitHub",
email: "noreply@github.com",
date: "2016-09-24T02:18:28Z"
},
message: "Merge pull request #32 from timoweave/example (testing) add remaing testing example files",
tree: {
sha: "e4f6de2e804e0f81a809e26239c39486f3180a93",
url: "https://api.github.com/repos/martinkwan/mangonada/git/trees/e4f6de2e804e0f81a809e26239c39486f3180a93"
},
url: "https://api.github.com/repos/martinkwan/mangonada/git/commits/ebd6c31f06d2cda93fd80a33da488ab25b3c0f9f",
comment_count: 0
},
url: "https://api.github.com/repos/martinkwan/mangonada/commits/ebd6c31f06d2cda93fd80a33da488ab25b3c0f9f",
html_url: "https://github.com/martinkwan/mangonada/commit/ebd6c31f06d2cda93fd80a33da488ab25b3c0f9f",
comments_url: "https://api.github.com/repos/martinkwan/mangonada/commits/ebd6c31f06d2cda93fd80a33da488ab25b3c0f9f/comments",
author: {
login: "martinkwan",
id: 13195630,
avatar_url: "https://avatars.githubusercontent.com/u/13195630?v=3",
gravatar_id: "",
url: "https://api.github.com/users/martinkwan",
html_url: "https://github.com/martinkwan",
followers_url: "https://api.github.com/users/martinkwan/followers",
following_url: "https://api.github.com/users/martinkwan/following{/other_user}",
gists_url: "https://api.github.com/users/martinkwan/gists{/gist_id}",
starred_url: "https://api.github.com/users/martinkwan/starred{/owner}{/repo}",
subscriptions_url: "https://api.github.com/users/martinkwan/subscriptions",
organizations_url: "https://api.github.com/users/martinkwan/orgs",
repos_url: "https://api.github.com/users/martinkwan/repos",
events_url: "https://api.github.com/users/martinkwan/events{/privacy}",
received_events_url: "https://api.github.com/users/martinkwan/received_events",
type: "User",
site_admin: false
},
committer: {
login: "web-flow",
id: 19864447,
avatar_url: "https://avatars.githubusercontent.com/u/19864447?v=3",
gravatar_id: "",
url: "https://api.github.com/users/web-flow",
html_url: "https://github.com/web-flow",
followers_url: "https://api.github.com/users/web-flow/followers",
following_url: "https://api.github.com/users/web-flow/following{/other_user}",
gists_url: "https://api.github.com/users/web-flow/gists{/gist_id}",
starred_url: "https://api.github.com/users/web-flow/starred{/owner}{/repo}",
subscriptions_url: "https://api.github.com/users/web-flow/subscriptions",
organizations_url: "https://api.github.com/users/web-flow/orgs",
repos_url: "https://api.github.com/users/web-flow/repos",
events_url: "https://api.github.com/users/web-flow/events{/privacy}",
received_events_url: "https://api.github.com/users/web-flow/received_events",
type: "User",
site_admin: false
},
parents: [
{
sha: "ab741eeaf780d0a5f6a43b0556bc9a42258d1b6c",
url: "https://api.github.com/repos/martinkwan/mangonada/commits/ab741eeaf780d0a5f6a43b0556bc9a42258d1b6c",
html_url: "https://github.com/martinkwan/mangonada/commit/ab741eeaf780d0a5f6a43b0556bc9a42258d1b6c"
},
{
sha: "b59db16f814e16fd247b6867e64c183b159f84c1",
url: "https://api.github.com/repos/martinkwan/mangonada/commits/b59db16f814e16fd247b6867e64c183b159f84c1",
html_url: "https://github.com/martinkwan/mangonada/commit/b59db16f814e16fd247b6867e64c183b159f84c1"
}
]
},
{
sha: "b59db16f814e16fd247b6867e64c183b159f84c1",
commit: {
author: {
name: "Timothy Shiu",
email: "timoweave@gmail.com",
date: "2016-09-24T02:15:13Z"
},
committer: {
name: "Timothy Shiu",
email: "timoweave@gmail.com",
date: "2016-09-24T02:15:46Z"
},
message: "(testing) add remaing testing example files",
tree: {
sha: "e4f6de2e804e0f81a809e26239c39486f3180a93",
url: "https://api.github.com/repos/martinkwan/mangonada/git/trees/e4f6de2e804e0f81a809e26239c39486f3180a93"
},
url: "https://api.github.com/repos/martinkwan/mangonada/git/commits/b59db16f814e16fd247b6867e64c183b159f84c1",
comment_count: 0
},
url: "https://api.github.com/repos/martinkwan/mangonada/commits/b59db16f814e16fd247b6867e64c183b159f84c1",
html_url: "https://github.com/martinkwan/mangonada/commit/b59db16f814e16fd247b6867e64c183b159f84c1",
comments_url: "https://api.github.com/repos/martinkwan/mangonada/commits/b59db16f814e16fd247b6867e64c183b159f84c1/comments",
author: {
login: "timoweave",
id: 13225610,
avatar_url: "https://avatars.githubusercontent.com/u/13225610?v=3",
gravatar_id: "",
url: "https://api.github.com/users/timoweave",
html_url: "https://github.com/timoweave",
followers_url: "https://api.github.com/users/timoweave/followers",
following_url: "https://api.github.com/users/timoweave/following{/other_user}",
gists_url: "https://api.github.com/users/timoweave/gists{/gist_id}",
starred_url: "https://api.github.com/users/timoweave/starred{/owner}{/repo}",
subscriptions_url: "https://api.github.com/users/timoweave/subscriptions",
organizations_url: "https://api.github.com/users/timoweave/orgs",
repos_url: "https://api.github.com/users/timoweave/repos",
events_url: "https://api.github.com/users/timoweave/events{/privacy}",
received_events_url: "https://api.github.com/users/timoweave/received_events",
type: "User",
site_admin: false
},
committer: {
login: "timoweave",
id: 13225610,
avatar_url: "https://avatars.githubusercontent.com/u/13225610?v=3",
gravatar_id: "",
url: "https://api.github.com/users/timoweave",
html_url: "https://github.com/timoweave",
followers_url: "https://api.github.com/users/timoweave/followers",
following_url: "https://api.github.com/users/timoweave/following{/other_user}",
gists_url: "https://api.github.com/users/timoweave/gists{/gist_id}",
starred_url: "https://api.github.com/users/timoweave/starred{/owner}{/repo}",
subscriptions_url: "https://api.github.com/users/timoweave/subscriptions",
organizations_url: "https://api.github.com/users/timoweave/orgs",
repos_url: "https://api.github.com/users/timoweave/repos",
events_url: "https://api.github.com/users/timoweave/events{/privacy}",
received_events_url: "https://api.github.com/users/timoweave/received_events",
type: "User",
site_admin: false
},
parents: [
{
sha: "ab741eeaf780d0a5f6a43b0556bc9a42258d1b6c",
url: "https://api.github.com/repos/martinkwan/mangonada/commits/ab741eeaf780d0a5f6a43b0556bc9a42258d1b6c",
html_url: "https://github.com/martinkwan/mangonada/commit/ab741eeaf780d0a5f6a43b0556bc9a42258d1b6c"
}
]
},
{
sha: "ab741eeaf780d0a5f6a43b0556bc9a42258d1b6c",
commit: {
author: {
name: "Martin Kwan",
email: "martinkkwan@gmail.com",
date: "2016-09-24T02:14:11Z"
},
committer: {
name: "GitHub",
email: "noreply@github.com",
date: "2016-09-24T02:14:11Z"
},
message: "Merge pull request #31 from timoweave/chore (fix) change webpack output directory",
tree: {
sha: "44be738bab3f076890a047ef9253095afd099ead",
url: "https://api.github.com/repos/martinkwan/mangonada/git/trees/44be738bab3f076890a047ef9253095afd099ead"
},
url: "https://api.github.com/repos/martinkwan/mangonada/git/commits/ab741eeaf780d0a5f6a43b0556bc9a42258d1b6c",
comment_count: 0
},
url: "https://api.github.com/repos/martinkwan/mangonada/commits/ab741eeaf780d0a5f6a43b0556bc9a42258d1b6c",
html_url: "https://github.com/martinkwan/mangonada/commit/ab741eeaf780d0a5f6a43b0556bc9a42258d1b6c",
comments_url: "https://api.github.com/repos/martinkwan/mangonada/commits/ab741eeaf780d0a5f6a43b0556bc9a42258d1b6c/comments",
author: {
login: "martinkwan",
id: 13195630,
avatar_url: "https://avatars.githubusercontent.com/u/13195630?v=3",
gravatar_id: "",
url: "https://api.github.com/users/martinkwan",
html_url: "https://github.com/martinkwan",
followers_url: "https://api.github.com/users/martinkwan/followers",
following_url: "https://api.github.com/users/martinkwan/following{/other_user}",
gists_url: "https://api.github.com/users/martinkwan/gists{/gist_id}",
starred_url: "https://api.github.com/users/martinkwan/starred{/owner}{/repo}",
subscriptions_url: "https://api.github.com/users/martinkwan/subscriptions",
organizations_url: "https://api.github.com/users/martinkwan/orgs",
repos_url: "https://api.github.com/users/martinkwan/repos",
events_url: "https://api.github.com/users/martinkwan/events{/privacy}",
received_events_url: "https://api.github.com/users/martinkwan/received_events",
type: "User",
site_admin: false
},
committer: {
login: "web-flow",
id: 19864447,
avatar_url: "https://avatars.githubusercontent.com/u/19864447?v=3",
gravatar_id: "",
url: "https://api.github.com/users/web-flow",
html_url: "https://github.com/web-flow",
followers_url: "https://api.github.com/users/web-flow/followers",
following_url: "https://api.github.com/users/web-flow/following{/other_user}",
gists_url: "https://api.github.com/users/web-flow/gists{/gist_id}",
starred_url: "https://api.github.com/users/web-flow/starred{/owner}{/repo}",
subscriptions_url: "https://api.github.com/users/web-flow/subscriptions",
organizations_url: "https://api.github.com/users/web-flow/orgs",
repos_url: "https://api.github.com/users/web-flow/repos",
events_url: "https://api.github.com/users/web-flow/events{/privacy}",
received_events_url: "https://api.github.com/users/web-flow/received_events",
type: "User",
site_admin: false
},
parents: [
{
sha: "ca24d0030a2f34c3b567356b0a08d7888d7a20d6",
url: "https://api.github.com/repos/martinkwan/mangonada/commits/ca24d0030a2f34c3b567356b0a08d7888d7a20d6",
html_url: "https://github.com/martinkwan/mangonada/commit/ca24d0030a2f34c3b567356b0a08d7888d7a20d6"
},
{
sha: "22eeea66683266524315b9ceaceb76ff410c90f2",
url: "https://api.github.com/repos/martinkwan/mangonada/commits/22eeea66683266524315b9ceaceb76ff410c90f2",
html_url: "https://github.com/martinkwan/mangonada/commit/22eeea66683266524315b9ceaceb76ff410c90f2"
}
]
},
{
sha: "22eeea66683266524315b9ceaceb76ff410c90f2",
commit: {
author: {
name: "Timothy Shiu",
email: "timoweave@gmail.com",
date: "2016-09-24T02:11:59Z"
},
committer: {
name: "Timothy Shiu",
email: "timoweave@gmail.com",
date: "2016-09-24T02:12:10Z"
},
message: "(fix) change webpack output directory",
tree: {
sha: "44be738bab3f076890a047ef9253095afd099ead",
url: "https://api.github.com/repos/martinkwan/mangonada/git/trees/44be738bab3f076890a047ef9253095afd099ead"
},
url: "https://api.github.com/repos/martinkwan/mangonada/git/commits/22eeea66683266524315b9ceaceb76ff410c90f2",
comment_count: 0
},
url: "https://api.github.com/repos/martinkwan/mangonada/commits/22eeea66683266524315b9ceaceb76ff410c90f2",
html_url: "https://github.com/martinkwan/mangonada/commit/22eeea66683266524315b9ceaceb76ff410c90f2",
comments_url: "https://api.github.com/repos/martinkwan/mangonada/commits/22eeea66683266524315b9ceaceb76ff410c90f2/comments",
author: {
login: "timoweave",
id: 13225610,
avatar_url: "https://avatars.githubusercontent.com/u/13225610?v=3",
gravatar_id: "",
url: "https://api.github.com/users/timoweave",
html_url: "https://github.com/timoweave",
followers_url: "https://api.github.com/users/timoweave/followers",
following_url: "https://api.github.com/users/timoweave/following{/other_user}",
gists_url: "https://api.github.com/users/timoweave/gists{/gist_id}",
starred_url: "https://api.github.com/users/timoweave/starred{/owner}{/repo}",
subscriptions_url: "https://api.github.com/users/timoweave/subscriptions",
organizations_url: "https://api.github.com/users/timoweave/orgs",
repos_url: "https://api.github.com/users/timoweave/repos",
events_url: "https://api.github.com/users/timoweave/events{/privacy}",
received_events_url: "https://api.github.com/users/timoweave/received_events",
type: "User",
site_admin: false
},
committer: {
login: "timoweave",
id: 13225610,
avatar_url: "https://avatars.githubusercontent.com/u/13225610?v=3",
gravatar_id: "",
url: "https://api.github.com/users/timoweave",
html_url: "https://github.com/timoweave",
followers_url: "https://api.github.com/users/timoweave/followers",
following_url: "https://api.github.com/users/timoweave/following{/other_user}",
gists_url: "https://api.github.com/users/timoweave/gists{/gist_id}",
starred_url: "https://api.github.com/users/timoweave/starred{/owner}{/repo}",
subscriptions_url: "https://api.github.com/users/timoweave/subscriptions",
organizations_url: "https://api.github.com/users/timoweave/orgs",
repos_url: "https://api.github.com/users/timoweave/repos",
events_url: "https://api.github.com/users/timoweave/events{/privacy}",
received_events_url: "https://api.github.com/users/timoweave/received_events",
type: "User",
site_admin: false
},
parents: [
{
sha: "ca24d0030a2f34c3b567356b0a08d7888d7a20d6",
url: "https://api.github.com/repos/martinkwan/mangonada/commits/ca24d0030a2f34c3b567356b0a08d7888d7a20d6",
html_url: "https://github.com/martinkwan/mangonada/commit/ca24d0030a2f34c3b567356b0a08d7888d7a20d6"
}
]
},
{
sha: "ca24d0030a2f34c3b567356b0a08d7888d7a20d6",
commit: {
author: {
name: "Martin Kwan",
email: "martinkkwan@gmail.com",
date: "2016-09-24T01:44:29Z"
},
committer: {
name: "GitHub",
email: "noreply@github.com",
date: "2016-09-24T01:44:29Z"
},
message: "Merge pull request #30 from timoweave/testing (feat) complete parsing and formatting github api data w/ cady",
tree: {
sha: "4b8b35e04899c1e74421c9603acfaa7731806b24",
url: "https://api.github.com/repos/martinkwan/mangonada/git/trees/4b8b35e04899c1e74421c9603acfaa7731806b24"
},
url: "https://api.github.com/repos/martinkwan/mangonada/git/commits/ca24d0030a2f34c3b567356b0a08d7888d7a20d6",
comment_count: 0
},
url: "https://api.github.com/repos/martinkwan/mangonada/commits/ca24d0030a2f34c3b567356b0a08d7888d7a20d6",
html_url: "https://github.com/martinkwan/mangonada/commit/ca24d0030a2f34c3b567356b0a08d7888d7a20d6",
comments_url: "https://api.github.com/repos/martinkwan/mangonada/commits/ca24d0030a2f34c3b567356b0a08d7888d7a20d6/comments",
author: {
login: "martinkwan",
id: 13195630,
avatar_url: "https://avatars.githubusercontent.com/u/13195630?v=3",
gravatar_id: "",
url: "https://api.github.com/users/martinkwan",
html_url: "https://github.com/martinkwan",
followers_url: "https://api.github.com/users/martinkwan/followers",
following_url: "https://api.github.com/users/martinkwan/following{/other_user}",
gists_url: "https://api.github.com/users/martinkwan/gists{/gist_id}",
starred_url: "https://api.github.com/users/martinkwan/starred{/owner}{/repo}",
subscriptions_url: "https://api.github.com/users/martinkwan/subscriptions",
organizations_url: "https://api.github.com/users/martinkwan/orgs",
repos_url: "https://api.github.com/users/martinkwan/repos",
events_url: "https://api.github.com/users/martinkwan/events{/privacy}",
received_events_url: "https://api.github.com/users/martinkwan/received_events",
type: "User",
site_admin: false
},
committer: {
login: "web-flow",
id: 19864447,
avatar_url: "https://avatars.githubusercontent.com/u/19864447?v=3",
gravatar_id: "",
url: "https://api.github.com/users/web-flow",
html_url: "https://github.com/web-flow",
followers_url: "https://api.github.com/users/web-flow/followers",
following_url: "https://api.github.com/users/web-flow/following{/other_user}",
gists_url: "https://api.github.com/users/web-flow/gists{/gist_id}",
starred_url: "https://api.github.com/users/web-flow/starred{/owner}{/repo}",
subscriptions_url: "https://api.github.com/users/web-flow/subscriptions",
organizations_url: "https://api.github.com/users/web-flow/orgs",
repos_url: "https://api.github.com/users/web-flow/repos",
events_url: "https://api.github.com/users/web-flow/events{/privacy}",
received_events_url: "https://api.github.com/users/web-flow/received_events",
type: "User",
site_admin: false
},
parents: [
{
sha: "f02f5baf5810af64495b9f2b9b36b0cd3bbf3e6a",
url: "https://api.github.com/repos/martinkwan/mangonada/commits/f02f5baf5810af64495b9f2b9b36b0cd3bbf3e6a",
html_url: "https://github.com/martinkwan/mangonada/commit/f02f5baf5810af64495b9f2b9b36b0cd3bbf3e6a"
},
{
sha: "204fc19f9323a87f7f425192d649a70860a2a370",
url: "https://api.github.com/repos/martinkwan/mangonada/commits/204fc19f9323a87f7f425192d649a70860a2a370",
html_url: "https://github.com/martinkwan/mangonada/commit/204fc19f9323a87f7f425192d649a70860a2a370"
}
]
},
{
sha: "204fc19f9323a87f7f425192d649a70860a2a370",
commit: {
author: {
name: "Timothy Shiu",
email: "timoweave@gmail.com",
date: "2016-09-24T00:12:56Z"
},
committer: {
name: "Timothy Shiu",
email: "timoweave@gmail.com",
date: "2016-09-24T00:12:56Z"
},
message: "(feat) complete parsing of github api data",
tree: {
sha: "4b8b35e04899c1e74421c9603acfaa7731806b24",
url: "https://api.github.com/repos/martinkwan/mangonada/git/trees/4b8b35e04899c1e74421c9603acfaa7731806b24"
},
url: "https://api.github.com/repos/martinkwan/mangonada/git/commits/204fc19f9323a87f7f425192d649a70860a2a370",
comment_count: 0
},
url: "https://api.github.com/repos/martinkwan/mangonada/commits/204fc19f9323a87f7f425192d649a70860a2a370",
html_url: "https://github.com/martinkwan/mangonada/commit/204fc19f9323a87f7f425192d649a70860a2a370",
comments_url: "https://api.github.com/repos/martinkwan/mangonada/commits/204fc19f9323a87f7f425192d649a70860a2a370/comments",
author: {
login: "timoweave",
id: 13225610,
avatar_url: "https://avatars.githubusercontent.com/u/13225610?v=3",
gravatar_id: "",
url: "https://api.github.com/users/timoweave",
html_url: "https://github.com/timoweave",
followers_url: "https://api.github.com/users/timoweave/followers",
following_url: "https://api.github.com/users/timoweave/following{/other_user}",
gists_url: "https://api.github.com/users/timoweave/gists{/gist_id}",
starred_url: "https://api.github.com/users/timoweave/starred{/owner}{/repo}",
subscriptions_url: "https://api.github.com/users/timoweave/subscriptions",
organizations_url: "https://api.github.com/users/timoweave/orgs",
repos_url: "https://api.github.com/users/timoweave/repos",
events_url: "https://api.github.com/users/timoweave/events{/privacy}",
received_events_url: "https://api.github.com/users/timoweave/received_events",
type: "User",
site_admin: false
},
committer: {
login: "timoweave",
id: 13225610,
avatar_url: "https://avatars.githubusercontent.com/u/13225610?v=3",
gravatar_id: "",
url: "https://api.github.com/users/timoweave",
html_url: "https://github.com/timoweave",
followers_url: "https://api.github.com/users/timoweave/followers",
following_url: "https://api.github.com/users/timoweave/following{/other_user}",
gists_url: "https://api.github.com/users/timoweave/gists{/gist_id}",
starred_url: "https://api.github.com/users/timoweave/starred{/owner}{/repo}",
subscriptions_url: "https://api.github.com/users/timoweave/subscriptions",
organizations_url: "https://api.github.com/users/timoweave/orgs",
repos_url: "https://api.github.com/users/timoweave/repos",
events_url: "https://api.github.com/users/timoweave/events{/privacy}",
received_events_url: "https://api.github.com/users/timoweave/received_events",
type: "User",
site_admin: false
},
parents: [
{
sha: "c9498b2407d3277d45caf0fe8403416314e4ed08",
url: "https://api.github.com/repos/martinkwan/mangonada/commits/c9498b2407d3277d45caf0fe8403416314e4ed08",
html_url: "https://github.com/martinkwan/mangonada/commit/c9498b2407d3277d45caf0fe8403416314e4ed08"
}
]
},
{
sha: "c9498b2407d3277d45caf0fe8403416314e4ed08",
commit: {
author: {
name: "Timothy Shiu",
email: "timoweave@gmail.com",
date: "2016-09-23T23:35:32Z"
},
committer: {
name: "Timothy Shiu",
email: "timoweave@gmail.com",
date: "2016-09-23T23:35:42Z"
},
message: "(feat) parse json data from github api",
tree: {
sha: "33e29a85f2db72c13bc4f389b9a6859ebdf781b4",
url: "https://api.github.com/repos/martinkwan/mangonada/git/trees/33e29a85f2db72c13bc4f389b9a6859ebdf781b4"
},
url: "https://api.github.com/repos/martinkwan/mangonada/git/commits/c9498b2407d3277d45caf0fe8403416314e4ed08",
comment_count: 0
},
url: "https://api.github.com/repos/martinkwan/mangonada/commits/c9498b2407d3277d45caf0fe8403416314e4ed08",
html_url: "https://github.com/martinkwan/mangonada/commit/c9498b2407d3277d45caf0fe8403416314e4ed08",
comments_url: "https://api.github.com/repos/martinkwan/mangonada/commits/c9498b2407d3277d45caf0fe8403416314e4ed08/comments",
author: {
login: "timoweave",
id: 13225610,
avatar_url: "https://avatars.githubusercontent.com/u/13225610?v=3",
gravatar_id: "",
url: "https://api.github.com/users/timoweave",
html_url: "https://github.com/timoweave",
followers_url: "https://api.github.com/users/timoweave/followers",
following_url: "https://api.github.com/users/timoweave/following{/other_user}",
gists_url: "https://api.github.com/users/timoweave/gists{/gist_id}",
starred_url: "https://api.github.com/users/timoweave/starred{/owner}{/repo}",
subscriptions_url: "https://api.github.com/users/timoweave/subscriptions",
organizations_url: "https://api.github.com/users/timoweave/orgs",
repos_url: "https://api.github.com/users/timoweave/repos",
events_url: "https://api.github.com/users/timoweave/events{/privacy}",
received_events_url: "https://api.github.com/users/timoweave/received_events",
type: "User",
site_admin: false
},
committer: {
login: "timoweave",
id: 13225610,
avatar_url: "https://avatars.githubusercontent.com/u/13225610?v=3",
gravatar_id: "",
url: "https://api.github.com/users/timoweave",
html_url: "https://github.com/timoweave",
followers_url: "https://api.github.com/users/timoweave/followers",
following_url: "https://api.github.com/users/timoweave/following{/other_user}",
gists_url: "https://api.github.com/users/timoweave/gists{/gist_id}",
starred_url: "https://api.github.com/users/timoweave/starred{/owner}{/repo}",
subscriptions_url: "https://api.github.com/users/timoweave/subscriptions",
organizations_url: "https://api.github.com/users/timoweave/orgs",
repos_url: "https://api.github.com/users/timoweave/repos",
events_url: "https://api.github.com/users/timoweave/events{/privacy}",
received_events_url: "https://api.github.com/users/timoweave/received_events",
type: "User",
site_admin: false
},
parents: [
{
sha: "f02f5baf5810af64495b9f2b9b36b0cd3bbf3e6a",
url: "https://api.github.com/repos/martinkwan/mangonada/commits/f02f5baf5810af64495b9f2b9b36b0cd3bbf3e6a",
html_url: "https://github.com/martinkwan/mangonada/commit/f02f5baf5810af64495b9f2b9b36b0cd3bbf3e6a"
}
]
},
{
sha: "f02f5baf5810af64495b9f2b9b36b0cd3bbf3e6a",
commit: {
author: {
name: "Martin Kwan",
email: "martinkkwan@gmail.com",
date: "2016-09-23T23:19:14Z"
},
committer: {
name: "GitHub",
email: "noreply@github.com",
date: "2016-09-23T23:19:14Z"
},
message: "Merge pull request #29 from arnav-aggarwal/master (refactor) Route page rendering through React",
tree: {
sha: "cef3291e7039b5d30f0e1f2d35756c646afbdb37",
url: "https://api.github.com/repos/martinkwan/mangonada/git/trees/cef3291e7039b5d30f0e1f2d35756c646afbdb37"
},
url: "https://api.github.com/repos/martinkwan/mangonada/git/commits/f02f5baf5810af64495b9f2b9b36b0cd3bbf3e6a",
comment_count: 0
},
url: "https://api.github.com/repos/martinkwan/mangonada/commits/f02f5baf5810af64495b9f2b9b36b0cd3bbf3e6a",
html_url: "https://github.com/martinkwan/mangonada/commit/f02f5baf5810af64495b9f2b9b36b0cd3bbf3e6a",
comments_url: "https://api.github.com/repos/martinkwan/mangonada/commits/f02f5baf5810af64495b9f2b9b36b0cd3bbf3e6a/comments",
author: {
login: "martinkwan",
id: 13195630,
avatar_url: "https://avatars.githubusercontent.com/u/13195630?v=3",
gravatar_id: "",
url: "https://api.github.com/users/martinkwan",
html_url: "https://github.com/martinkwan",
followers_url: "https://api.github.com/users/martinkwan/followers",
following_url: "https://api.github.com/users/martinkwan/following{/other_user}",
gists_url: "https://api.github.com/users/martinkwan/gists{/gist_id}",
starred_url: "https://api.github.com/users/martinkwan/starred{/owner}{/repo}",
subscriptions_url: "https://api.github.com/users/martinkwan/subscriptions",
organizations_url: "https://api.github.com/users/martinkwan/orgs",
repos_url: "https://api.github.com/users/martinkwan/repos",
events_url: "https://api.github.com/users/martinkwan/events{/privacy}",
received_events_url: "https://api.github.com/users/martinkwan/received_events",
type: "User",
site_admin: false
},
committer: {
login: "web-flow",
id: 19864447,
avatar_url: "https://avatars.githubusercontent.com/u/19864447?v=3",
gravatar_id: "",
url: "https://api.github.com/users/web-flow",
html_url: "https://github.com/web-flow",
followers_url: "https://api.github.com/users/web-flow/followers",
following_url: "https://api.github.com/users/web-flow/following{/other_user}",
gists_url: "https://api.github.com/users/web-flow/gists{/gist_id}",
starred_url: "https://api.github.com/users/web-flow/starred{/owner}{/repo}",
subscriptions_url: "https://api.github.com/users/web-flow/subscriptions",
organizations_url: "https://api.github.com/users/web-flow/orgs",
repos_url: "https://api.github.com/users/web-flow/repos",
events_url: "https://api.github.com/users/web-flow/events{/privacy}",
received_events_url: "https://api.github.com/users/web-flow/received_events",
type: "User",
site_admin: false
},
parents: [
{
sha: "73e253f2fbdcb7f497c296b2cd169ed48c57df87",
url: "https://api.github.com/repos/martinkwan/mangonada/commits/73e253f2fbdcb7f497c296b2cd169ed48c57df87",
html_url: "https://github.com/martinkwan/mangonada/commit/73e253f2fbdcb7f497c296b2cd169ed48c57df87"
},
{
sha: "608dc9f3e134cd6394f5896ac5592d6029367f30",
url: "https://api.github.com/repos/martinkwan/mangonada/commits/608dc9f3e134cd6394f5896ac5592d6029367f30",
html_url: "https://github.com/martinkwan/mangonada/commit/608dc9f3e134cd6394f5896ac5592d6029367f30"
}
]
},
{
sha: "608dc9f3e134cd6394f5896ac5592d6029367f30",
commit: {
author: {
name: "Arnav Aggarwal",
email: "arnavaggrwl@gmail.com",
date: "2016-09-23T23:15:39Z"
},
committer: {
name: "Arnav Aggarwal",
email: "arnavaggrwl@gmail.com",
date: "2016-09-23T23:15:39Z"
},
message: "Merge branch 'dev' of https://github.com/mangonada/mangonada",
tree: {
sha: "cef3291e7039b5d30f0e1f2d35756c646afbdb37",
url: "https://api.github.com/repos/martinkwan/mangonada/git/trees/cef3291e7039b5d30f0e1f2d35756c646afbdb37"
},
url: "https://api.github.com/repos/martinkwan/mangonada/git/commits/608dc9f3e134cd6394f5896ac5592d6029367f30",
comment_count: 0
},
url: "https://api.github.com/repos/martinkwan/mangonada/commits/608dc9f3e134cd6394f5896ac5592d6029367f30",
html_url: "https://github.com/martinkwan/mangonada/commit/608dc9f3e134cd6394f5896ac5592d6029367f30",
comments_url: "https://api.github.com/repos/martinkwan/mangonada/commits/608dc9f3e134cd6394f5896ac5592d6029367f30/comments",
author: {
login: "arnav-aggarwal",
id: 19792993,
avatar_url: "https://avatars.githubusercontent.com/u/19792993?v=3",
gravatar_id: "",
url: "https://api.github.com/users/arnav-aggarwal",
html_url: "https://github.com/arnav-aggarwal",
followers_url: "https://api.github.com/users/arnav-aggarwal/followers",
following_url: "https://api.github.com/users/arnav-aggarwal/following{/other_user}",
gists_url: "https://api.github.com/users/arnav-aggarwal/gists{/gist_id}",
starred_url: "https://api.github.com/users/arnav-aggarwal/starred{/owner}{/repo}",
subscriptions_url: "https://api.github.com/users/arnav-aggarwal/subscriptions",
organizations_url: "https://api.github.com/users/arnav-aggarwal/orgs",
repos_url: "https://api.github.com/users/arnav-aggarwal/repos",
events_url: "https://api.github.com/users/arnav-aggarwal/events{/privacy}",
received_events_url: "https://api.github.com/users/arnav-aggarwal/received_events",
type: "User",
site_admin: false
},
committer: {
login: "arnav-aggarwal",
id: 19792993,
avatar_url: "https://avatars.githubusercontent.com/u/19792993?v=3",
gravatar_id: "",
url: "https://api.github.com/users/arnav-aggarwal",
html_url: "https://github.com/arnav-aggarwal",
followers_url: "https://api.github.com/users/arnav-aggarwal/followers",
following_url: "https://api.github.com/users/arnav-aggarwal/following{/other_user}",
gists_url: "https://api.github.com/users/arnav-aggarwal/gists{/gist_id}",
starred_url: "https://api.github.com/users/arnav-aggarwal/starred{/owner}{/repo}",
subscriptions_url: "https://api.github.com/users/arnav-aggarwal/subscriptions",
organizations_url: "https://api.github.com/users/arnav-aggarwal/orgs",
repos_url: "https://api.github.com/users/arnav-aggarwal/repos",
events_url: "https://api.github.com/users/arnav-aggarwal/events{/privacy}",
received_events_url: "https://api.github.com/users/arnav-aggarwal/received_events",
type: "User",
site_admin: false
},
parents: [
{
sha: "53e0a301edf1b9dffc0fe188397682d3bb3e6d25",
url: "https://api.github.com/repos/martinkwan/mangonada/commits/53e0a301edf1b9dffc0fe188397682d3bb3e6d25",
html_url: "https://github.com/martinkwan/mangonada/commit/53e0a301edf1b9dffc0fe188397682d3bb3e6d25"
},
{
sha: "73e253f2fbdcb7f497c296b2cd169ed48c57df87",
url: "https://api.github.com/repos/martinkwan/mangonada/commits/73e253f2fbdcb7f497c296b2cd169ed48c57df87",
html_url: "https://github.com/martinkwan/mangonada/commit/73e253f2fbdcb7f497c296b2cd169ed48c57df87"
}
]
},
{
sha: "53e0a301edf1b9dffc0fe188397682d3bb3e6d25",
commit: {
author: {
name: "Arnav Aggarwal",
email: "arnavaggrwl@gmail.com",
date: "2016-09-23T23:11:06Z"
},
committer: {
name: "Arnav Aggarwal",
email: "arnavaggrwl@gmail.com",
date: "2016-09-23T23:12:41Z"
},
message: "(refactor) Route page rendering through React Made several components and reducers. Put in a sample action that will likely be replaced by a backend server request. -gitGraph is not rendered by React -Created a submit button -Moved all client side code except index.html into src",
tree: {
sha: "630acf0ec9c2e00370cd86ff3f4dc11e0fe05500",
url: "https://api.github.com/repos/martinkwan/mangonada/git/trees/630acf0ec9c2e00370cd86ff3f4dc11e0fe05500"
},
url: "https://api.github.com/repos/martinkwan/mangonada/git/commits/53e0a301edf1b9dffc0fe188397682d3bb3e6d25",
comment_count: 0
},
url: "https://api.github.com/repos/martinkwan/mangonada/commits/53e0a301edf1b9dffc0fe188397682d3bb3e6d25",
html_url: "https://github.com/martinkwan/mangonada/commit/53e0a301edf1b9dffc0fe188397682d3bb3e6d25",
comments_url: "https://api.github.com/repos/martinkwan/mangonada/commits/53e0a301edf1b9dffc0fe188397682d3bb3e6d25/comments",
author: {
login: "arnav-aggarwal",
id: 19792993,
avatar_url: "https://avatars.githubusercontent.com/u/19792993?v=3",
gravatar_id: "",
url: "https://api.github.com/users/arnav-aggarwal",
html_url: "https://github.com/arnav-aggarwal",
followers_url: "https://api.github.com/users/arnav-aggarwal/followers",
following_url: "https://api.github.com/users/arnav-aggarwal/following{/other_user}",
gists_url: "https://api.github.com/users/arnav-aggarwal/gists{/gist_id}",
starred_url: "https://api.github.com/users/arnav-aggarwal/starred{/owner}{/repo}",
subscriptions_url: "https://api.github.com/users/arnav-aggarwal/subscriptions",
organizations_url: "https://api.github.com/users/arnav-aggarwal/orgs",
repos_url: "https://api.github.com/users/arnav-aggarwal/repos",
events_url: "https://api.github.com/users/arnav-aggarwal/events{/privacy}",
received_events_url: "https://api.github.com/users/arnav-aggarwal/received_events",
type: "User",
site_admin: false
},
committer: {
login: "arnav-aggarwal",
id: 19792993,
avatar_url: "https://avatars.githubusercontent.com/u/19792993?v=3",
gravatar_id: "",
url: "https://api.github.com/users/arnav-aggarwal",
html_url: "https://github.com/arnav-aggarwal",
followers_url: "https://api.github.com/users/arnav-aggarwal/followers",
following_url: "https://api.github.com/users/arnav-aggarwal/following{/other_user}",
gists_url: "https://api.github.com/users/arnav-aggarwal/gists{/gist_id}",
starred_url: "https://api.github.com/users/arnav-aggarwal/starred{/owner}{/repo}",
subscriptions_url: "https://api.github.com/users/arnav-aggarwal/subscriptions",
organizations_url: "https://api.github.com/users/arnav-aggarwal/orgs",
repos_url: "https://api.github.com/users/arnav-aggarwal/repos",
events_url: "https://api.github.com/users/arnav-aggarwal/events{/privacy}",
received_events_url: "https://api.github.com/users/arnav-aggarwal/received_events",
type: "User",
site_admin: false
},
parents: [
{
sha: "6723e37e52cc261584b98d03d2ff689fae521d71",
url: "https://api.github.com/repos/martinkwan/mangonada/commits/6723e37e52cc261584b98d03d2ff689fae521d71",
html_url: "https://github.com/martinkwan/mangonada/commit/6723e37e52cc261584b98d03d2ff689fae521d71"
}
]
},
{
sha: "73e253f2fbdcb7f497c296b2cd169ed48c57df87",
commit: {
author: {
name: "Martin Kwan",
email: "martinkkwan@gmail.com",
date: "2016-09-23T18:34:50Z"
},
committer: {
name: "GitHub",
email: "noreply@github.com",
date: "2016-09-23T18:34:50Z"
},
message: "Merge pull request #28 from timoweave/testing (feat) add server api to interface github api w/ cady",
tree: {
sha: "5ef2a074e32d8f4c142905be753f2b78952c0c0e",
url: "https://api.github.com/repos/martinkwan/mangonada/git/trees/5ef2a074e32d8f4c142905be753f2b78952c0c0e"
},
url: "https://api.github.com/repos/martinkwan/mangonada/git/commits/73e253f2fbdcb7f497c296b2cd169ed48c57df87",
comment_count: 0
},
url: "https://api.github.com/repos/martinkwan/mangonada/commits/73e253f2fbdcb7f497c296b2cd169ed48c57df87",
html_url: "https://github.com/martinkwan/mangonada/commit/73e253f2fbdcb7f497c296b2cd169ed48c57df87",
comments_url: "https://api.github.com/repos/martinkwan/mangonada/commits/73e253f2fbdcb7f497c296b2cd169ed48c57df87/comments",
author: {
login: "martinkwan",
id: 13195630,
avatar_url: "https://avatars.githubusercontent.com/u/13195630?v=3",
gravatar_id: "",
url: "https://api.github.com/users/martinkwan",
html_url: "https://github.com/martinkwan",
followers_url: "https://api.github.com/users/martinkwan/followers",
following_url: "https://api.github.com/users/martinkwan/following{/other_user}",
gists_url: "https://api.github.com/users/martinkwan/gists{/gist_id}",
starred_url: "https://api.github.com/users/martinkwan/starred{/owner}{/repo}",
subscriptions_url: "https://api.github.com/users/martinkwan/subscriptions",
organizations_url: "https://api.github.com/users/martinkwan/orgs",
repos_url: "https://api.github.com/users/martinkwan/repos",
events_url: "https://api.github.com/users/martinkwan/events{/privacy}",
received_events_url: "https://api.github.com/users/martinkwan/received_events",
type: "User",
site_admin: false
},
committer: {
login: "web-flow",
id: 19864447,
avatar_url: "https://avatars.githubusercontent.com/u/19864447?v=3",
gravatar_id: "",
url: "https://api.github.com/users/web-flow",
html_url: "https://github.com/web-flow",
followers_url: "https://api.github.com/users/web-flow/followers",
following_url: "https://api.github.com/users/web-flow/following{/other_user}",
gists_url: "https://api.github.com/users/web-flow/gists{/gist_id}",
starred_url: "https://api.github.com/users/web-flow/starred{/owner}{/repo}",
subscriptions_url: "https://api.github.com/users/web-flow/subscriptions",
organizations_url: "https://api.github.com/users/web-flow/orgs",
repos_url: "https://api.github.com/users/web-flow/repos",
events_url: "https://api.github.com/users/web-flow/events{/privacy}",
received_events_url: "https://api.github.com/users/web-flow/received_events",
type: "User",
site_admin: false
},
parents: [
{
sha: "c49a37f568d57fd711940c343010a8eff7ea65c0",
url: "https://api.github.com/repos/martinkwan/mangonada/commits/c49a37f568d57fd711940c343010a8eff7ea65c0",
html_url: "https://github.com/martinkwan/mangonada/commit/c49a37f568d57fd711940c343010a8eff7ea65c0"
},
{
sha: "b035d0ce9ebf030ea7475acedbe6787e0a4af4be",
url: "https://api.github.com/repos/martinkwan/mangonada/commits/b035d0ce9ebf030ea7475acedbe6787e0a4af4be",
html_url: "https://github.com/martinkwan/mangonada/commit/b035d0ce9ebf030ea7475acedbe6787e0a4af4be"
}
]
},
{
sha: "b035d0ce9ebf030ea7475acedbe6787e0a4af4be",
commit: {
author: {
name: "Timothy Shiu",
email: "timoweave@gmail.com",
date: "2016-09-23T18:33:14Z"
},
committer: {
name: "Timothy Shiu",
email: "timoweave@gmail.com",
date: "2016-09-23T18:33:23Z"
},
message: "(feat) add server api to interface github api w/ cady",
tree: {
sha: "5ef2a074e32d8f4c142905be753f2b78952c0c0e",
url: "https://api.github.com/repos/martinkwan/mangonada/git/trees/5ef2a074e32d8f4c142905be753f2b78952c0c0e"
},
url: "https://api.github.com/repos/martinkwan/mangonada/git/commits/b035d0ce9ebf030ea7475acedbe6787e0a4af4be",
comment_count: 0
},
url: "https://api.github.com/repos/martinkwan/mangonada/commits/b035d0ce9ebf030ea7475acedbe6787e0a4af4be",
html_url: "https://github.com/martinkwan/mangonada/commit/b035d0ce9ebf030ea7475acedbe6787e0a4af4be",
comments_url: "https://api.github.com/repos/martinkwan/mangonada/commits/b035d0ce9ebf030ea7475acedbe6787e0a4af4be/comments",
author: {
login: "timoweave",
id: 13225610,
avatar_url: "https://avatars.githubusercontent.com/u/13225610?v=3",
gravatar_id: "",
url: "https://api.github.com/users/timoweave",
html_url: "https://github.com/timoweave",
followers_url: "https://api.github.com/users/timoweave/followers",
following_url: "https://api.github.com/users/timoweave/following{/other_user}",
gists_url: "https://api.github.com/users/timoweave/gists{/gist_id}",
starred_url: "https://api.github.com/users/timoweave/starred{/owner}{/repo}",
subscriptions_url: "https://api.github.com/users/timoweave/subscriptions",
organizations_url: "https://api.github.com/users/timoweave/orgs",
repos_url: "https://api.github.com/users/timoweave/repos",
events_url: "https://api.github.com/users/timoweave/events{/privacy}",
received_events_url: "https://api.github.com/users/timoweave/received_events",
type: "User",
site_admin: false
},
committer: {
login: "timoweave",
id: 13225610,
avatar_url: "https://avatars.githubusercontent.com/u/13225610?v=3",
gravatar_id: "",
url: "https://api.github.com/users/timoweave",
html_url: "https://github.com/timoweave",
followers_url: "https://api.github.com/users/timoweave/followers",
following_url: "https://api.github.com/users/timoweave/following{/other_user}",
gists_url: "https://api.github.com/users/timoweave/gists{/gist_id}",
starred_url: "https://api.github.com/users/timoweave/starred{/owner}{/repo}",
subscriptions_url: "https://api.github.com/users/timoweave/subscriptions",
organizations_url: "https://api.github.com/users/timoweave/orgs",
repos_url: "https://api.github.com/users/timoweave/repos",
events_url: "https://api.github.com/users/timoweave/events{/privacy}",
received_events_url: "https://api.github.com/users/timoweave/received_events",
type: "User",
site_admin: false
},
parents: [
{
sha: "c49a37f568d57fd711940c343010a8eff7ea65c0",
url: "https://api.github.com/repos/martinkwan/mangonada/commits/c49a37f568d57fd711940c343010a8eff7ea65c0",
html_url: "https://github.com/martinkwan/mangonada/commit/c49a37f568d57fd711940c343010a8eff7ea65c0"
}
]
},
{
sha: "6723e37e52cc261584b98d03d2ff689fae521d71",
commit: {
author: {
name: "Arnav Aggarwal",
email: "arnavaggrwl@gmail.com",
date: "2016-09-23T02:55:38Z"
},
committer: {
name: "Arnav Aggarwal",
email: "arnavaggrwl@gmail.com",
date: "2016-09-23T02:55:38Z"
},
message: "(task) Add React routing functionality",
tree: {
sha: "96b47670d00d7995dd0bfa1661494285916144e0",
url: "https://api.github.com/repos/martinkwan/mangonada/git/trees/96b47670d00d7995dd0bfa1661494285916144e0"
},
url: "https://api.github.com/repos/martinkwan/mangonada/git/commits/6723e37e52cc261584b98d03d2ff689fae521d71",
comment_count: 0
},
url: "https://api.github.com/repos/martinkwan/mangonada/commits/6723e37e52cc261584b98d03d2ff689fae521d71",
html_url: "https://github.com/martinkwan/mangonada/commit/6723e37e52cc261584b98d03d2ff689fae521d71",
comments_url: "https://api.github.com/repos/martinkwan/mangonada/commits/6723e37e52cc261584b98d03d2ff689fae521d71/comments",
author: {
login: "arnav-aggarwal",
id: 19792993,
avatar_url: "https://avatars.githubusercontent.com/u/19792993?v=3",
gravatar_id: "",
url: "https://api.github.com/users/arnav-aggarwal",
html_url: "https://github.com/arnav-aggarwal",
followers_url: "https://api.github.com/users/arnav-aggarwal/followers",
following_url: "https://api.github.com/users/arnav-aggarwal/following{/other_user}",
gists_url: "https://api.github.com/users/arnav-aggarwal/gists{/gist_id}",
starred_url: "https://api.github.com/users/arnav-aggarwal/starred{/owner}{/repo}",
subscriptions_url: "https://api.github.com/users/arnav-aggarwal/subscriptions",
organizations_url: "https://api.github.com/users/arnav-aggarwal/orgs",
repos_url: "https://api.github.com/users/arnav-aggarwal/repos",
events_url: "https://api.github.com/users/arnav-aggarwal/events{/privacy}",
received_events_url: "https://api.github.com/users/arnav-aggarwal/received_events",
type: "User",
site_admin: false
},
committer: {
login: "arnav-aggarwal",
id: 19792993,
avatar_url: "https://avatars.githubusercontent.com/u/19792993?v=3",
gravatar_id: "",
url: "https://api.github.com/users/arnav-aggarwal",
html_url: "https://github.com/arnav-aggarwal",
followers_url: "https://api.github.com/users/arnav-aggarwal/followers",
following_url: "https://api.github.com/users/arnav-aggarwal/following{/other_user}",
gists_url: "https://api.github.com/users/arnav-aggarwal/gists{/gist_id}",
starred_url: "https://api.github.com/users/arnav-aggarwal/starred{/owner}{/repo}",
subscriptions_url: "https://api.github.com/users/arnav-aggarwal/subscriptions",
organizations_url: "https://api.github.com/users/arnav-aggarwal/orgs",
repos_url: "https://api.github.com/users/arnav-aggarwal/repos",
events_url: "https://api.github.com/users/arnav-aggarwal/events{/privacy}",
received_events_url: "https://api.github.com/users/arnav-aggarwal/received_events",
type: "User",
site_admin: false
},
parents: [
{
sha: "d001741296969f21707f256b8892fc299143e768",
url: "https://api.github.com/repos/martinkwan/mangonada/commits/d001741296969f21707f256b8892fc299143e768",
html_url: "https://github.com/martinkwan/mangonada/commit/d001741296969f21707f256b8892fc299143e768"
}
]
},
{
sha: "c49a37f568d57fd711940c343010a8eff7ea65c0",
commit: {
author: {
name: "Martin Kwan",
email: "martinkkwan@gmail.com",
date: "2016-09-23T02:03:17Z"
},
committer: {
name: "GitHub",
email: "noreply@github.com",
date: "2016-09-23T02:03:17Z"
},
message: "Merge pull request #27 from timoweave/test (test) add json validation w/ cady",
tree: {
sha: "6e8d5b5f9edecf3721f3dadc4af7c2dbfe892d10",
url: "https://api.github.com/repos/martinkwan/mangonada/git/trees/6e8d5b5f9edecf3721f3dadc4af7c2dbfe892d10"
},
url: "https://api.github.com/repos/martinkwan/mangonada/git/commits/c49a37f568d57fd711940c343010a8eff7ea65c0",
comment_count: 0
},
url: "https://api.github.com/repos/martinkwan/mangonada/commits/c49a37f568d57fd711940c343010a8eff7ea65c0",
html_url: "https://github.com/martinkwan/mangonada/commit/c49a37f568d57fd711940c343010a8eff7ea65c0",
comments_url: "https://api.github.com/repos/martinkwan/mangonada/commits/c49a37f568d57fd711940c343010a8eff7ea65c0/comments",
author: {
login: "martinkwan",
id: 13195630,
avatar_url: "https://avatars.githubusercontent.com/u/13195630?v=3",
gravatar_id: "",
url: "https://api.github.com/users/martinkwan",
html_url: "https://github.com/martinkwan",
followers_url: "https://api.github.com/users/martinkwan/followers",
following_url: "https://api.github.com/users/martinkwan/following{/other_user}",
gists_url: "https://api.github.com/users/martinkwan/gists{/gist_id}",
starred_url: "https://api.github.com/users/martinkwan/starred{/owner}{/repo}",
subscriptions_url: "https://api.github.com/users/martinkwan/subscriptions",
organizations_url: "https://api.github.com/users/martinkwan/orgs",
repos_url: "https://api.github.com/users/martinkwan/repos",
events_url: "https://api.github.com/users/martinkwan/events{/privacy}",
received_events_url: "https://api.github.com/users/martinkwan/received_events",
type: "User",
site_admin: false
},
committer: {
login: "web-flow",
id: 19864447,
avatar_url: "https://avatars.githubusercontent.com/u/19864447?v=3",
gravatar_id: "",
url: "https://api.github.com/users/web-flow",
html_url: "https://github.com/web-flow",
followers_url: "https://api.github.com/users/web-flow/followers",
following_url: "https://api.github.com/users/web-flow/following{/other_user}",
gists_url: "https://api.github.com/users/web-flow/gists{/gist_id}",
starred_url: "https://api.github.com/users/web-flow/starred{/owner}{/repo}",
subscriptions_url: "https://api.github.com/users/web-flow/subscriptions",
organizations_url: "https://api.github.com/users/web-flow/orgs",
repos_url: "https://api.github.com/users/web-flow/repos",
events_url: "https://api.github.com/users/web-flow/events{/privacy}",
received_events_url: "https://api.github.com/users/web-flow/received_events",
type: "User",
site_admin: false
},
parents: [
{
sha: "80957c67f695b238591d56cae4cd667151b820ae",
url: "https://api.github.com/repos/martinkwan/mangonada/commits/80957c67f695b238591d56cae4cd667151b820ae",
html_url: "https://github.com/martinkwan/mangonada/commit/80957c67f695b238591d56cae4cd667151b820ae"
},
{
sha: "34a97f7302b2f5666011df7da2abb7f7213f000f",
url: "https://api.github.com/repos/martinkwan/mangonada/commits/34a97f7302b2f5666011df7da2abb7f7213f000f",
html_url: "https://github.com/martinkwan/mangonada/commit/34a97f7302b2f5666011df7da2abb7f7213f000f"
}
]
},




{
sha: "34a97f7302b2f5666011df7da2abb7f7213f000f",
commit: {
author: {
name: "Timothy Shiu",
email: "timoweave@gmail.com",
date: "2016-09-23T01:58:05Z"
},
committer: {
name: "Timothy Shiu",
email: "timoweave@gmail.com",
date: "2016-09-23T01:58:05Z"
},
message: "(test) add json validation w/ cady",
tree: {
sha: "6e8d5b5f9edecf3721f3dadc4af7c2dbfe892d10",
url: "https://api.github.com/repos/martinkwan/mangonada/git/trees/6e8d5b5f9edecf3721f3dadc4af7c2dbfe892d10"
},
url: "https://api.github.com/repos/martinkwan/mangonada/git/commits/34a97f7302b2f5666011df7da2abb7f7213f000f",
comment_count: 0
},
url: "https://api.github.com/repos/martinkwan/mangonada/commits/34a97f7302b2f5666011df7da2abb7f7213f000f",
html_url: "https://github.com/martinkwan/mangonada/commit/34a97f7302b2f5666011df7da2abb7f7213f000f",
comments_url: "https://api.github.com/repos/martinkwan/mangonada/commits/34a97f7302b2f5666011df7da2abb7f7213f000f/comments",
author: {
login: "timoweave",
id: 13225610,
avatar_url: "https://avatars.githubusercontent.com/u/13225610?v=3",
gravatar_id: "",
url: "https://api.github.com/users/timoweave",
html_url: "https://github.com/timoweave",
followers_url: "https://api.github.com/users/timoweave/followers",
following_url: "https://api.github.com/users/timoweave/following{/other_user}",
gists_url: "https://api.github.com/users/timoweave/gists{/gist_id}",
starred_url: "https://api.github.com/users/timoweave/starred{/owner}{/repo}",
subscriptions_url: "https://api.github.com/users/timoweave/subscriptions",
organizations_url: "https://api.github.com/users/timoweave/orgs",
repos_url: "https://api.github.com/users/timoweave/repos",
events_url: "https://api.github.com/users/timoweave/events{/privacy}",
received_events_url: "https://api.github.com/users/timoweave/received_events",
type: "User",
site_admin: false
},
committer: {
login: "timoweave",
id: 13225610,
avatar_url: "https://avatars.githubusercontent.com/u/13225610?v=3",
gravatar_id: "",
url: "https://api.github.com/users/timoweave",
html_url: "https://github.com/timoweave",
followers_url: "https://api.github.com/users/timoweave/followers",
following_url: "https://api.github.com/users/timoweave/following{/other_user}",
gists_url: "https://api.github.com/users/timoweave/gists{/gist_id}",
starred_url: "https://api.github.com/users/timoweave/starred{/owner}{/repo}",
subscriptions_url: "https://api.github.com/users/timoweave/subscriptions",
organizations_url: "https://api.github.com/users/timoweave/orgs",
repos_url: "https://api.github.com/users/timoweave/repos",
events_url: "https://api.github.com/users/timoweave/events{/privacy}",
received_events_url: "https://api.github.com/users/timoweave/received_events",
type: "User",
site_admin: false
},
parents: [
{
sha: "9057b7f0b88d073fcc34af22a908472cedf98271",
url: "https://api.github.com/repos/martinkwan/mangonada/commits/9057b7f0b88d073fcc34af22a908472cedf98271",
html_url: "https://github.com/martinkwan/mangonada/commit/9057b7f0b88d073fcc34af22a908472cedf98271"
}
]
}
];


// let githubTranslator = new GithubApiInterface(JSONcommits, JSONbranches);
// JSONcommits = githubTranslator.JSONCommits;
// export const SHALookup = githubTranslator.SHALookup;
// var branchLookUp = githubTranslator.branchLookUp;

// export SHALookup;
// export default JSONcommits;
