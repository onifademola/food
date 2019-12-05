import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        //Authorization: 'Bearer x31ZzL5VpFS03jKnOLTwHT5p4vKJgEWnqRGAfeuidQ2V2sihyusMM9BOdxrnG0ZWNtNQtDSDozuaGeFZ-U8zrMM-wxj0OGVTJz8Y5lN5qmjWygVDGhC_MJS2EufgXXYx'
        Authorization: 'Bearer l2cmhf2ezRl6ZkcHWNYKoDpiaro1zlqUjwkA7nVxnWzryiTwFDk35PJiucoLhjjFY9ECD8GTBGaHBg5yv5YDLiszKQx8EMvm30ply0UWoHQOnYFjLozpYnZOx-UsXXYx'
    }
});