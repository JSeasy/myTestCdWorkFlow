export const blobToDataURL = (blob: Blob) => {
  return new Promise((resolve, reject) => {
    const fd = new FileReader();
    fd.readAsDataURL(blob);
    fd.onload = (e: ProgressEvent<FileReader>) => {
      resolve(e.target?.result);
    };
  });
};
