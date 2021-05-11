const downloadFile = (name: string, url: string, filetype: string) => {
  return new Promise<void>((resolve, reject) => {
    fetch(url)
      .then((resp) => resp.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        a.download = `${name}.${filetype}`;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
        resolve();
      })
      .catch(() => {
        reject();
      });
  });
};

export default downloadFile;
