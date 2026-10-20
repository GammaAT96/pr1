require('dotenv').config()
const express = require('express') // or //import express from "express"
const app = express()
const port = process.env.port || 4000;
const githubData = {
    "login": "GammaAT96",
    "id": 173655401,
    "node_id": "U_kgDOClnFaQ",
    "avatar_url": "https://avatars.githubusercontent.com/u/173655401?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/GammaAT96",
    "html_url": "https://github.com/GammaAT96",
    "followers_url": "https://api.github.com/users/GammaAT96/followers",
    "following_url": "https://api.github.com/users/GammaAT96/following{/other_user}",
    "gists_url": "https://api.github.com/users/GammaAT96/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/GammaAT96/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/GammaAT96/subscriptions",
    "organizations_url": "https://api.github.com/users/GammaAT96/orgs",
    "repos_url": "https://api.github.com/users/GammaAT96/repos",
    "events_url": "https://api.github.com/users/GammaAT96/events{/privacy}",
    "received_events_url": "https://api.github.com/users/GammaAT96/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": "Anant Tripathi",
    "company": null,
    "blog": "",
    "location": "Greater NOIDA",
    "email": null,
    "hireable": null,
    "bio": " 🍔 Eat | 💻 Code | 😴 Sleep | 🔁 Repeat\r\n",
    "twitter_username": "anantdev5114",
    "public_repos": 15,
    "public_gists": 0,
    "followers": 5,
    "following": 48,
    "created_at": "2024-06-24T05:01:50Z",
    "updated_at": "2026-10-07T11:57:12Z"
}

app.get('/', (req, res) => {
    res.send('Hello how are you!!')
})

app.get('/login', (req, res) => {
    res.send('<h1>login karlo</h1>')
})
app.get('/signup', (req, res) => {
    res.send('pehle signup karo')
})
app.get('/github', (req, res) => {
    res.json(githubData)
})
app.listen(process.env.port, () => {
    console.log(`app listening on port ${port}`)
})
