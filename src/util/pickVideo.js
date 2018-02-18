import videos from '../videos/wednesday';
import pickRandom from './pickRandom';

export default () => {
  const queries = window.location.search
    .replace('?', '')
    .split('&')
    .map(pair => pair.split('='))
    .reduce((qs, next) => ({ ...qs, [next[0]]: next[1] }), {});

  if (queries.v && videos.includes(queries.v)) return queries.v;

  const newestWatched = localStorage.getItem('newestWatched');
  const newestVideo = videos[videos.length - 1];

  if (!newestWatched || newestWatched !== newestVideo) {
    localStorage.setItem('newestWatched', newestVideo);
    return newestVideo;
  }

  return pickRandom(videos);
};
