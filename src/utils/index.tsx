export const blobToDataURL = (blob: Blob) => {
  return new Promise((resolve, reject) => {
    const fd = new FileReader();
    fd.readAsDataURL(blob);
    fd.onload = (e: ProgressEvent<FileReader>) => {
      resolve(e.target?.result);
    };
  });
};

export const uploadFile = (file: any) => {
  return new Promise((resolve, reject) => {
    resolve('src');
  });
};

export const openUploadWindow = () => {
  const input = document.createElement('input');
  input.type = 'file';
  input.click();
  return input;
};
