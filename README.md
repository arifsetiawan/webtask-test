
# Webtask Test

Test simple [webtask-runner](https://github.com/auth0-blog/webtask-runner) 

First, run webtask-runner
```
git clone https://github.com/auth0-blog/webtask-runner
cd webtask-runner
npm install
node start.js
```

# Run

See [simple](scripts/simple.js)
```javascript
return function(ctx, cb) { 
    cb(null, {message: "Hello " + ctx.who}); 
}
```

```
node runner.js scripts/simple.js who="my dear friend"
node runner.js scripts/mongo-upsert.js name="John Doe" email=johndoe@email.com
node runner.js scripts/mongo-get.js email=johndoe@email.com
```

`arg[3]` up will be treated as query params

# Observation

* To use third party modules, install that module first in webtask-runner 
* Error in code will crash webtask-runner
