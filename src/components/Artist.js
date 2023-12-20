import React, {Component} from "react";


// artist here is from props (but it is destructure to artist variable)
const Artist = ({artist}) => {
    if (!artist) return null

    const {images, name, followers, genres} = artist;

    return (
        <div>
            <h3>{name}</h3>
            <p>{followers.total} followers</p>
            <p>{genres.join(", ")}</p>
            {/* This is equivalent to checking null of image[0]
            <img src={image[0] && image[0].url} alt="artist-profile"/> */}
            <img style={{
                        width: 200,
                        height: 200,
                        borderRadius: 100,
                        objectFit: "cover"
                      }}
            src={images[0] && images[0].url} alt="artist-profile"/>
        </div>
    )
}

export default Artist;