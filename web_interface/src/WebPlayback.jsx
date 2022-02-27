import React, { useState, useEffect } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { fontSize } from '@mui/system';

const track = {
    name: "",
    album: {
        images: [
            { url: "" }
        ]
    },
    artists: [
        { name: "" }
    ]
}



function generate(element) {
    return [0, 1, 2, 3,4].map((value) =>
      React.cloneElement(element, {
        key: value,
      })
    );
}

const title = {
    color: "white",
    fontSize:20
};

const text = {
    color: "white",
    fontSize:14
};

function WebPlayback(props) {

    const [is_paused, setPaused] = useState(false);
    const [is_active, setActive] = useState(true);
    const [showElement, setShowElement] = useState(true);
    const [player, setPlayer] = useState(undefined);
    const [current_track, setTrack] = useState(track);


    useEffect(() => {

        const script = document.createElement("script");
        script.src = "https://sdk.scdn.co/spotify-player.js";
        script.async = true;
        
        document.body.appendChild(script);

        setTimeout(function () {
            setShowElement(false);
          }, 10000);
          
        // window.onSpotifyWebPlaybackSDKReady = () => {

        //     const player = new window.Spotify.Player({
        //         name: 'Web Playback SDK',
        //         getOAuthToken: cb => { cb(props.token); },
        //         volume: 0.5
        //     });

        //     setPlayer(player);

        //     player.addListener('ready', ({ device_id }) => {
        //         console.log('Ready with Device ID', device_id);
        //     });

        //     player.addListener('not_ready', ({ device_id }) => {
        //         console.log('Device ID has gone offline', device_id);
        //     });

        //     player.addListener('player_state_changed', ( state => {

        //         if (!state) {
        //             return;
        //         }
                
        //         setTrack(state.track_window.current_track);
        //         setPaused(state.paused);

        //         player.getCurrentState().then( state => { 
        //             (!state)? setActive(false) : setActive(true) 
        //         });

        //     }));

            
            

        //     player.connect();

        // };
    }, []);

    if (!is_active) { 
        return (
            <>
            {/* My internet went down, so have to hard code most of it because I can't use spotify api */}
                <div className="container">
                    <div className="main-wrapper">

                        <img src={"https://i.scdn.co/image/ab67616d0000b273e8107e6d9214baa81bb79bba"}  className="now-playing__cover" alt="" />

                        <div className="now-playing__side">
                            <div className="now-playing__name">{"Happy - From \"Despicable Me 2\""}</div>
                            <div className="now-playing__artist">{"Pharrell Williams"}</div>

                            <button className="btn-spotify" onClick={() => { player.previousTrack() }} >
                                &lt;&lt;
                            </button>

                            <button className="btn-spotify" onClick={() => { player.togglePlay() }} >
                                { is_paused ? "PLAY" : "PAUSE" }
                            </button>

                            <button className="btn-spotify" onClick={() => { player.nextTrack() }} >
                                &gt;&gt;
                            </button>
                        </div>
                    </div>
                </div>
                {/* my code */}
                <div><br></br></div>
                <div className='container'>
                    <h2>Queued</h2>
                </div>

                {showElement ? (
                        <div className="list-container">
                        <div className="main-list" >
                            <List sx={{ width: '100%', maxWidth: 600 }}>
                                    <ListItem>
                                        <img src={"https://i.scdn.co/image/ab67616d0000b273e419ccba0baa8bd3f3d7abf2"} className="next-up__cover" alt="" />
                                        <ListItemText primaryTypographyProps={{ style: title }} primary={"Uptown Funk (feat. Bruno Mars)"} secondaryTypographyProps={{ style: text }} secondary={"Mark Ronson, Bruno Mars"} />
                                    </ListItem>
                                    <ListItem>
                                        <img src={"https://i.scdn.co/image/ab67616d0000b273ef37416970812293c08e8a78"} className="next-up__cover" alt="" />
                                        <ListItemText primaryTypographyProps={{ style: title }} primary={"CAN'T STOP THE FEELING! (from DreamWorks Animation's \"TROLLS\")"} secondaryTypographyProps={{ style: text }} secondary={"Justin Timberlake"} />
                                    </ListItem>
                                    <ListItem>
                                        <img src={"https://i.scdn.co/image/ab67616d0000b27352b2a3824413eefe9e33817a"} className="next-up__cover" alt="" />
                                        <ListItemText primaryTypographyProps={{ style: title }} primary={"Shake It Off"} secondaryTypographyProps={{ style: text }} secondary={"Taylor Swift"} />
                                    </ListItem>
                                    <ListItem>
                                        <img src={"https://i.scdn.co/image/ab67616d0000b273e8dd4db47e7177c63b0b7d53"} className="next-up__cover" alt="" />
                                        <ListItemText primaryTypographyProps={{ style: title }} primary={"Take on Me"} secondaryTypographyProps={{ style: text }} secondary={"a-ha"} />
                                    </ListItem>
                                    <ListItem>
                                        <img src={"https://i.scdn.co/image/ab67616d0000b273240447f2da1433d8f4303596"} className="next-up__cover" alt="" />
                                        <ListItemText primaryTypographyProps={{ style: title }} primary={"Butter"} secondaryTypographyProps={{ style: text }} secondary={"BTS"} />
                                    </ListItem>
                            </List>
                        </div>
                        </div>
                    ) : (
                        <div className="list-container">
                        <div className="main-list" >
                            <List sx={{ width: '100%', maxWidth: 600 }}>
                                {/* sad songs */}
                                <ListItem>
                                    <img src={"https://i.scdn.co/image/ab67616d0000b27312549da864353c084cf0faa6"} className="next-up__cover" alt="" />
                                    <ListItemText primaryTypographyProps={{ style: title }} primary={"Cross Road Blues"} secondaryTypographyProps={{ style: text }} secondary={"Robert Johnson"} />
                                </ListItem>
                                <ListItem>
                                    <img src={"https://i.scdn.co/image/ab67616d0000b273599bb610f6243326e6176663"} className="next-up__cover" alt="" />
                                    <ListItemText primaryTypographyProps={{ style: title }} primary={"Born Under A Bad Sign"} secondaryTypographyProps={{ style: text }} secondary={"Albert King"} />
                                </ListItem>
                                <ListItem>
                                    <img src={"https://i.scdn.co/image/ab67616d0000b273621489fd90d50158b3714cb0"} className="next-up__cover" alt="" />
                                    <ListItemText primaryTypographyProps={{ style: title }} primary={"Mad World (Feat. Michael Andrews)"} secondaryTypographyProps={{ style: text }} secondary={"Gary Jules, Michael Andrews"} />
                                </ListItem>
                                <ListItem>
                                    <img src={"https://i.scdn.co/image/ab67616d0000b273126363a3b84cec538f5e687f"} className="next-up__cover" alt="" />
                                    <ListItemText primaryTypographyProps={{ style: title }} primary={"Memphis Blues"} secondaryTypographyProps={{ style: text }} secondary={"Jack Dupree, Speckled Red, Memphis Slim, Sunnyland Slim, Eddie Boyd, Little Brother Montgomery"} />
                                </ListItem>
                                <ListItem>
                                    <img src={"https://i.scdn.co/image/ab67616d0000b27390afd8e4ec6d787114ed6c40"} className="next-up__cover" alt="" />
                                    <ListItemText primaryTypographyProps={{ style: title }} primary={"The Scientist"} secondaryTypographyProps={{ style: text }} secondary={"Coldplay"} />
                                </ListItem>
                            </List>
                        </div>
                        </div>
                )};
                
            
            </>)
    } else {
        return (
            <>
{/* My internet went down, so have to hard code most of it because I can't use spotify api */}
<div className="container">
                    <div className="main-wrapper">

                        <img src={"https://i.scdn.co/image/ab67616d0000b273e8107e6d9214baa81bb79bba"}  className="now-playing__cover" alt="" />

                        <div className="now-playing__side">
                            <div className="now-playing__name">{"Happy - From \"Despicable Me 2\""}</div>
                            <div className="now-playing__artist">{"Pharrell Williams"}</div>

                            <button className="btn-spotify" onClick={() => { player.previousTrack() }} >
                                &lt;&lt;
                            </button>

                            <button className="btn-spotify" onClick={() => { player.togglePlay() }} >
                                { is_paused ? "PLAY" : "PAUSE" }
                            </button>

                            <button className="btn-spotify" onClick={() => { player.nextTrack() }} >
                                &gt;&gt;
                            </button>
                        </div>
                    </div>
                </div>
                {/* my code */}
                <div><br></br></div>
                <div className='container'>
                    <h2>Queued</h2>
                </div>

                {showElement ? (
                        <div className="list-container">
                        <div className="main-list" >
                            <List sx={{ width: '100%', maxWidth: 600 }}>
                                    <ListItem>
                                        <img src={"https://i.scdn.co/image/ab67616d0000b273e419ccba0baa8bd3f3d7abf2"} className="next-up__cover" alt="" />
                                        <ListItemText primaryTypographyProps={{ style: title }} primary={"Uptown Funk (feat. Bruno Mars)"} secondaryTypographyProps={{ style: text }} secondary={"Mark Ronson, Bruno Mars"} />
                                    </ListItem>
                                    <ListItem>
                                        <img src={"https://i.scdn.co/image/ab67616d0000b273ef37416970812293c08e8a78"} className="next-up__cover" alt="" />
                                        <ListItemText primaryTypographyProps={{ style: title }} primary={"CAN'T STOP THE FEELING! (from DreamWorks Animation's \"TROLLS\")"} secondaryTypographyProps={{ style: text }} secondary={"Justin Timberlake"} />
                                    </ListItem>
                                    <ListItem>
                                        <img src={"https://i.scdn.co/image/ab67616d0000b27352b2a3824413eefe9e33817a"} className="next-up__cover" alt="" />
                                        <ListItemText primaryTypographyProps={{ style: title }} primary={"Shake It Off"} secondaryTypographyProps={{ style: text }} secondary={"Taylor Swift"} />
                                    </ListItem>
                                    <ListItem>
                                        <img src={"https://i.scdn.co/image/ab67616d0000b273e8dd4db47e7177c63b0b7d53"} className="next-up__cover" alt="" />
                                        <ListItemText primaryTypographyProps={{ style: title }} primary={"Take on Me"} secondaryTypographyProps={{ style: text }} secondary={"a-ha"} />
                                    </ListItem>
                                    <ListItem>
                                        <img src={"https://i.scdn.co/image/ab67616d0000b273240447f2da1433d8f4303596"} className="next-up__cover" alt="" />
                                        <ListItemText primaryTypographyProps={{ style: title }} primary={"Butter"} secondaryTypographyProps={{ style: text }} secondary={"BTS"} />
                                    </ListItem>
                            </List>
                        </div>
                        </div>
                    ) : (
                        <div className="list-container">
                        <div className="main-list" >
                            <List sx={{ width: '100%', maxWidth: 600 }}>
                                {/* sad songs */}
                                <ListItem>
                                    <img src={"https://i.scdn.co/image/ab67616d0000b27312549da864353c084cf0faa6"} className="next-up__cover" alt="" />
                                    <ListItemText primaryTypographyProps={{ style: title }} primary={"Cross Road Blues"} secondaryTypographyProps={{ style: text }} secondary={"Robert Johnson"} />
                                </ListItem>
                                <ListItem>
                                    <img src={"https://i.scdn.co/image/ab67616d0000b273599bb610f6243326e6176663"} className="next-up__cover" alt="" />
                                    <ListItemText primaryTypographyProps={{ style: title }} primary={"Born Under A Bad Sign"} secondaryTypographyProps={{ style: text }} secondary={"Albert King"} />
                                </ListItem>
                                <ListItem>
                                    <img src={"https://i.scdn.co/image/ab67616d0000b273621489fd90d50158b3714cb0"} className="next-up__cover" alt="" />
                                    <ListItemText primaryTypographyProps={{ style: title }} primary={"Mad World (Feat. Michael Andrews)"} secondaryTypographyProps={{ style: text }} secondary={"Gary Jules, Michael Andrews"} />
                                </ListItem>
                                <ListItem>
                                    <img src={"https://i.scdn.co/image/ab67616d0000b273126363a3b84cec538f5e687f"} className="next-up__cover" alt="" />
                                    <ListItemText primaryTypographyProps={{ style: title }} primary={"Memphis Blues"} secondaryTypographyProps={{ style: text }} secondary={"Jack Dupree, Speckled Red, Memphis Slim, Sunnyland Slim, Eddie Boyd, Little Brother Montgomery"} />
                                </ListItem>
                                <ListItem>
                                    <img src={"https://i.scdn.co/image/ab67616d0000b27390afd8e4ec6d787114ed6c40"} className="next-up__cover" alt="" />
                                    <ListItemText primaryTypographyProps={{ style: title }} primary={"The Scientist"} secondaryTypographyProps={{ style: text }} secondary={"Coldplay"} />
                                </ListItem>
                            </List>
                        </div>
                        </div>
                )};
            </>
        );
    }
}

export default WebPlayback
