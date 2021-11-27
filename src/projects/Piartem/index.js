import React from 'react';

function iframe() {
  return {
      __html: '<iframe src="./index.html" width="540" height="450"></iframe>'
  };
};

export default function Piartem() {
  return (
    <div>
        <div dangerouslySetInnerHTML={iframe()} />
    </div>);
};