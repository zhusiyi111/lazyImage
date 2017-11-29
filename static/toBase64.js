const image2base64 = require('image-to-base64');


image2base64("./image/1quality1w1h1.jpg")
.then(
    (response) => {
        console.log(response); //cGF0aC90by9maWxlLmpwZw==
    }
)
.catch(
    (error) => {
        console.log(error); //Exepection error....
    }
)