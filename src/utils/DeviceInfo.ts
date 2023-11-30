import DeviceInfo from 'react-native-device-info';
import {DeviceInfoType} from '../types/type';

const getDeviceInfo = async (): Promise<DeviceInfoType> => {
  const uniqueId = await DeviceInfo.getUniqueId();
  return {uniqueId};
};

export default getDeviceInfo;
