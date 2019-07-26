import React, { useEffect, useState } from 'react';
import qs from 'query-string';

function randomWithSeed(seedStr) {
  const str = seedStr.toLowerCase();
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    if (/[A-Za-z0-9]/.test(str[i])) {
      sum += str.charCodeAt(i);
    }
  }
  const pseudoRand = Math.abs(Math.sin(sum));
  return Math.round(pseudoRand * 100);
}

function delayedLoop(iterations, delay, callback) {
  if (iterations === 0) {
    return;
  } else {
    setTimeout(() => {
      callback();
      delayedLoop(iterations - 1, delay, callback);
    }, delay);
  }
}

export default function ResultPage(props) {
  const search = props.location.search || props.location.pathname;
  const params = qs.parseUrl(search);
  const q = params.query.q;

  const maxPercentage = randomWithSeed(q);
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    let i = 0;
    setTimeout(() => {
      delayedLoop(maxPercentage, 50, () => {
        i++;
        setPercentage(i);
      });
    }, 800);
  }, []);

  return (
    <div>
      <p className="h3">Your info is</p>
      <p className="font-weight-bold text-info display-1">
        { percentage }%
      </p>
      <p className="text-muted pb-5">"{ q }"</p>
      <div>
        <a className="text-info" href="/">Try another info</a>
      </div>
    </div>
  );
}
