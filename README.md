# Is It Wednesday, My Dudes?

A site to answer the all-important question: is it Wednesday, my dudes?

## What it do

On Wednesday, visiting the site will play random videos from a combination of curated Wednesday-related videos as well as all of those published by [ZimoNitrome](http://youtube.com/zimonitrome) in the [It is Wednesday my dudes playlist](https://www.youtube.com/user/ZimoNitrome/playlists).

## What it don't

On not-Wednesday (for example, Thursday), visiting the site will inform you plainly that it is _not_ Wednesday. Nothing fun will happen, because it is not Wednesday.

## Why

memes

## Building and stuff

The site itself a simple and entirely unnecessary React app using [create-react-app](https://github.com/facebook/create-react-app). To build or run the app with its present video list, you can follow the standard CRA commands.

```sh
yarn # install dependencies
yarn start # run locally
yarn build # run a production build
```

## Adding specific videos

To manually add a video to the list which is randomly drawn from, just pop the YouTube video ID in `src/videos/wednesday.js`. The next publish (normally triggered by a merge to master) will include it. Don't worry, they will be preserved when the list is automatically updated with the latest ZimoNitrome videos.

## Auto-updating the list

A script is included to fetch the latest videos from the ZimoNitrome Wednesday playlist and merge them into the list drawn from when visiting the site. This requires a YouTube server API key. See the YouTube docs on [Creating API Keys](https://developers.google.com/youtube/registering_an_application#Create_API_Keys) to get one.

This needs to be set as an environment variable called `YOUTUBE_KEY`. You can set this in your environment manually, or create a `.env` file in the root of the repo with the line `YOUTUBE_KEY=your-api-key`.

Once your API key is set using either of the above methods, run `yarn update-videos`. If this is successful and new videos were found, `src/videos/wednesday.js` will contain new IDs. For now this file must be manually committed and pushed.

At some point I want to automate this with some kind of trigger on new video uploads but we'll see.