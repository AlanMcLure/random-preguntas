import PropTypes from "prop-types";
import { useState } from 'react';

const Audio = ({ videoId }) => {
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlay = () => {
        // Logic to start playing the audio
        setIsPlaying(true);
    };

    const handlePause = () => {
        // Logic to pause the audio
        setIsPlaying(false);
    };

    return (
        <div>
            <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${videoId}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
            {isPlaying ? (
                <button onClick={handlePause}>Pause</button>
            ) : (
                <button onClick={handlePlay}>Play</button>
            )}
        </div>
    );
};

Audio.propTypes = {
    videoId: PropTypes.string.isRequired,
};

export default Audio;