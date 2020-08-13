# h1b-job-board-backend

##Purpose



## Getting Started

### Pre-requisites

1. nodejs
2. npm
3. firebase console access -> consult repo owners for access
4. firebase cli access ->  [check this link for how to install firebase cli on terminal](http://github.com)


### Local Development

```bash
git clone https://github.com/aniketh-maddipati/h1b-job-board-backend.git
cd h1b-job-board-backend/functions
npm i
firebase serve
```

### Deployments
1. Push to remote feature branch
2. Make a PR to Master
3. Once approved merge code into master
4. Open Terminal
5. Open h1b-job-board-backend
6. Run the following 
```bash
cd functions
firebase deploy
```

### Testing with Live Endpoint

Health Check:
baseURL: https://us-central1-h1-board.cloudfunctions.net/api/
```bash
curl --location --request GET 'https://us-central1-h1-board.cloudfunctions.net/api'
```

Sample Request:
```bash
curl --location --request GET 'https://us-central1-h1-board.cloudfunctions.net/api/zip/22031'
```
## Questions
Submit an issue!