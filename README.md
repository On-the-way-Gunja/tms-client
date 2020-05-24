# TMS-Client

[![Netlify Status](https://api.netlify.com/api/v1/badges/dbdc97a9-6be5-4c97-86ee-5fb9d9d21174/deploy-status)](https://app.netlify.com/sites/on-the-way/deploys)

## Link

Meet TMS-Client [here!](http://on-the-way.netlify.app/)

## What for?

This repository is On-The-Way service frontend client repository.

## How to preview

1. Run `yarn` to install packages.
2. Add `.env` file at the root.
3. Add the environment variable `REACT_APP_KEY`, `REACT_APP_URI`. Example below.

```
REACT_APP_KEY=somekey
REACT_APP_URI=your_server_uri_without_last_'/' (e.g. www.myserver.com)
```

4.

```
yarn start
```

and you're good to go! Open `localhost:3000`.
