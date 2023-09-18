import Toast from 'react-native-toast-message';

export type ToastType = 'success' | 'error' | 'warning' | 'info';

export interface ToastConfig {
  type: ToastType;
  text1: string;
  text2: string;
  onPress?: () => void; // Tıklanma olayı için geri çağrı işlevi
  onShow?: () => void; // Gösterme olayı için geri çağrı işlevi
  onHide?: () => void; // Gizleme olayı için geri çağrı işlevi
}

export const showToast = (config: ToastConfig) => {
  const {type, text1, text2, onPress, onShow, onHide} = config;

  // Özelleştirilmiş tasarım stilleri burada tanımlanabilir
  const customStyles = {
    success: {
      backgroundColor: '#4CAF50',
      textColor: '#fff',
      position: 'bottom',
    },
    error: {
      backgroundColor: '#F44336',
      textColor: '#fff',
      position: 'bottom',
    },
    warning: {
      backgroundColor: '#FFC107',
      textColor: '#000',
      position: 'bottom',
    },
    info: {
      backgroundColor: '#2196F3',
      textColor: '#fff',
      position: 'bottom',
    },
  };

  const style = customStyles[type] || customStyles.info; // Varsayılan bilgi stili

  const toastConfig = {
    type: type,
    text1: text1,
    text2: text2,
    visibilityTime: 3000,
    autoHide: true,
    topOffset: 30, // Ekranın üstünden uzaklık (isteğe bağlı)
    bottomOffset: 30, // Ekranın altından uzaklık (isteğe bağlı)
    onShow: () => {
      onShow && onShow(); // Gösterme olayı için geri çağrı işlevi
    },
    onHide: () => {
      onHide && onHide(); // Gizleme olayı için geri çağrı işlevi
    },
    onPress: () => {
      onPress && onPress(); // Tıklanma olayı için geri çağrı işlevi
    },
  };

  Object.assign(toastConfig, style);

  Toast.show(toastConfig);
};
