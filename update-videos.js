import dotenv from 'dotenv'
import fs from 'fs'
import request from 'request'
import currentVideoIds from './src/videos/wednesday'
dotenv.config()

const { YOUTUBE_KEY } = process.env
if (!YOUTUBE_KEY) throw new Error("YOUTUBE_KEY must an environment variable")

const apiUrl = 'https://www.googleapis.com/youtube/v3/playlistItems'

const queryItems = {
  key: YOUTUBE_KEY,
  playlistId: 'PLy3-VH7qrUZ5IVq_lISnoccVIYZCMvi-8', // zimonitrome wednesday vids
  part: 'contentDetails', // videoId is in here
  maxResults: 50, // max allowed, ok if we run regularly
  order: 'date', // we want the most recent uploads
} 

request({
  uri: apiUrl,
  qs: queryItems,
  json: true,
}, (err, {body: { items }}) => {
  if (err) {
    console.error(err)
    throw new Error('Unable to retrieve playlist data to update videos')
  }

  const playlistVideoIds = items.map(({contentDetails: { videoId }}) => videoId)
  const newVideoIds = playlistVideoIds.filter(id => !currentVideoIds.includes(id))
  
  if (newVideoIds.length) {
    // looks like it is wednesday, my dudes
    writeNewVideoFile([...currentVideoIds, ...newVideoIds])
  }
})

const writeNewVideoFile = (videoIds) => {
  const firstLine = 'export default ['
  const idLines = videoIds.map(id => `\n  '${id}',`).join('')
  const lastLine = '\n];\r\n'

  const fileContent = firstLine + idLines + lastLine
  fs.writeFileSync('./src/videos/wednesday.js', fileContent)
}
