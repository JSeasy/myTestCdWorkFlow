import { useState } from 'react';
import styles from './index.less';
import { Button } from 'antd';
import { uploadFile, openUploadWindow } from '@/utils/index';
export default (props: any) => {
  const { value, onChange, title } = props;
  const [fileName, setFileName] = useState('');
  const upload = () => {
    const input = openUploadWindow();
    input.onchange = (e: any) => {
      const file = e.target.files[0];
      const data = createForm(file, props.fileType);
      uploadFile(data).then(({ data }: any) => {
        setFileName(file.name);
        onChange(data.file.id);
      });
    };
  };
  const createForm = (file: any, fileType: any) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('wjlb ', fileType);
    return formData;
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
