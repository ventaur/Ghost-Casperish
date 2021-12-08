import GhostContentAPI from '@tryghost/content-api';

// NOTE: THEME_API_KEY must be set globally (e.g., via Code Injection) to a valid Content API key.


const api = new GhostContentAPI({
    url: `${window.location.protocol}//${window.location.host}`,
    // eslint-disable-next-line no-undef
    key: THEME_API_KEY,
    version: 'v4'
});

const cachedPosts = new Map();


function getPosts(seriesTags) {
    return new Promise((resolve, reject) => {
        // Ensure seriesTags is an array.
        // The filter should conform to the pattern: 'tag:some-tag+tag:another-tag'
        seriesTags = [].concat(seriesTags);
        const postFilter = seriesTags
                            .map(tag => 'tag:' + tag)
                            .join('+');

        if (cachedPosts.has(postFilter)) {
            resolve(cachedPosts.get(postFilter));
        } else {
            api.posts
                .browse({
                    filter: postFilter, 
                    fields: 'title,slug',
                    order: 'published_at asc'
                })
                .then(posts => {
                    cachedPosts.set(postFilter, posts);
                    resolve(posts);
                })
                .catch(err => {
                    reject(err);
                })
            ;
        }
    });
}


function displaySeriesInfo(seriesTags, options) {
    const posts = getPosts(seriesTags);

    // TODO: Display one ToC per series tag of the other posts in that series (with the same tag).

}


export default displaySeriesInfo;