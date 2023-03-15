/* eslint-disable func-names */
/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable no-multi-assign */
import React from 'react';

function imageDefault(url?: string) {
  return new Promise(function (resolve, reject) {
    const img = new Image();
    img.src = url || '';
    img.onerror = img.onabort = function () {
      reject(false);
    };
    img.onload = function () {
      resolve(true);
    };
  });
}

type IImageElement = {
  src: string;
};

export default function ImageElement({ src }: IImageElement) {
  const [_src, setSrc] = React.useState(src);

  React.useEffect(() => {
    src &&
      imageDefault(src)
        .then(() => {
          // setSrc(src);
        })
        .catch(() => {
          setSrc('assets/images/empty.png');
        });
  }, [src]);

  return (
    <>
      <img src={_src} alt="avatar" />
    </>
  );
}
