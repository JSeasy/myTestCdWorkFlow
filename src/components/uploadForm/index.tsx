import { useState } from 'react';
import styles from './index.less';
import { Button } from 'antd';
import { uploadFile, openUploadWindow } from '@/utils/index';
export default (props: any) => {
  const { value, onChange, title } = props;
  const [src, setSrc] = useState('');
  const [fileName, setFileName] = useState('');
  const upload = () => {
    const input = openUploadWindow();
    input.onchange = (e: any) => {
      const file = e.target.files[0];
      uploadFile(file).then((res: any) => {
        setFileName(file.name);
        setSrc(res);
        onChange(res);
      });
    };
  };
  return (
    <div className={styles.customUpload}>
      <Button onClick={() => upload()} style={{ marginRight: 5 }}>
        {value ? '重新上传' : '数据上传'}
      </Button>
      <div>
        <div>{title}</div>
        <p className={styles.fileName}>
          {fileName ? fileName : '上传文件请小于10M'}
        </p>
      </div>
    </div>
  );
};
