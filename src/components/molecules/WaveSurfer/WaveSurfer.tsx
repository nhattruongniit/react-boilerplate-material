import React, { useRef, useEffect, useState } from 'react';
import WaveSurfer from 'wavesurfer.js';

// material core
import Grid from '@material-ui/core/Grid';

// material icon
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';

// helpers
import { secondToTime } from 'helpers';

// styles
import useStyles from './styles';

require('wavesurfer.js');

const Waveform = () => {
  const classes = useStyles();
  const player: any = useRef();
  const refWaveForm: any = useRef();
  const [duration, setDuration] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [isPlay, setIsPlay] = useState<boolean>(false);
  const url = 'https://reelcrafter-east.s3.amazonaws.com/aux/test.m4a';

  useEffect(() => {
    setIsPlay(false);
    setDuration(0);
    setCurrentTime(0);
    if (player.current) player.current.destroy();

    player.current = WaveSurfer.create({
      container: refWaveForm.current,
      waveColor: 'grey',
      progressColor: '#1068BF',
      barWidth: 2,
      hideScrollbar: true,
      responsive: true,
      cursorWidth: 0,
      barHeight: 0.8,
      height: 50,
      partialRender: true,
    });

    player.current.load(url);

    player.current.on('ready', () => {
      setDuration(player.current.getDuration().toFixed(0));
      player.current.play();
    });
    player.current.on('audioprocess', () => {
      setCurrentTime(player.current.getCurrentTime().toFixed(0));
    });
    player.current.on('play', () => {
      setIsPlay(true);
    });
    player.current.on('pause', () => {
      setIsPlay(false);
    });
    player.current.on('finish', () => {
      setIsPlay(false);
    });
  }, []);

  function _handlePlayPauseSong() {
    player.current.playPause();
  }

  useEffect(() => {
    return () => {
      player.current.pause();
      setIsPlay(false);
    };
  }, []);

  return (
    <div>
      <Grid container>
        <Grid item xs={2} lg={2}>
          <div className={classes.wavePlay}>
            <button type="button" id="play-wavesurfer" onClick={_handlePlayPauseSong}>
              {isPlay ? <PauseIcon fontSize="large" /> : <PlayArrowIcon fontSize="large" />}
            </button>
          </div>
        </Grid>
        <Grid item xs={8} lg={4}>
          <div ref={refWaveForm} id="waveform" />
          <span>
            {secondToTime(currentTime)}/{secondToTime(duration)}
          </span>
        </Grid>
      </Grid>
    </div>
  );
};

export default Waveform;
