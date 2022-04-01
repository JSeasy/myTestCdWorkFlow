import { uploadFileApi } from '@/api/common';
export const blobToDataURL = (blob: Blob) => {
  return new Promise((resolve, reject) => {
    const fd = new FileReader();
    fd.readAsDataURL(blob);
    fd.onload = (e: ProgressEvent<FileReader>) => {
      resolve(e.target?.result);
    };
  });
};

export const uploadFile = (data: any) => {
  return uploadFileApi(data);
};

export const openUploadWindow = () => {
  const input = document.createElement('input');
  input.type = 'file';
  input.click();
  return input;
};

export const privatePhone = (phone: any) => {
  if (null != phone && phone != undefined) {
    var pat = /(\d{3})\d*(\d{4})/;
    return phone.replace(pat, '$1****$2');
  } else {
    return '';
  }
};

const map: any = {
  匹配管理: '/match',
  客户企业管理: '/customer',
  服务企业管理: '/service',
  产品纬度管理: '/product',
  角色管理: '/role',
  管理员: '/account',
  系统日志: '/system',
  查看: 'read',
  编辑: 'edit',
  删除: 'del',
  新增: 'add',
};

// 生成数据结构
// {
//   product:{
//     read:true,
//     edit:false,
//     edit:false
//   }
// }

export const getPermission = (permissions: any, result: any = {}) => {
  permissions.forEach((permission: any) => {
    if (permission.children.length) {
      getPermission(permission.children, result);
    } else {
      const menuName = permission.menuName;
      const mapMenuName = map[menuName];
      result[mapMenuName] = {};
      permission.auth.map((item: any) => {
        const mapAuthName = map[item.menuName];
        const { checked } = item;
        result[mapMenuName][mapAuthName] = checked;
      });
    }
  });
  return result;
};

export const getCanReadPageFirst = (initialState: any) => {
  const pathKeys = Object.keys(initialState);
  return pathKeys.find((item) => initialState[item].read);
};
