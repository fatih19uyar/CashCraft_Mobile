import React, {useState} from 'react';
import Background from '../components/Background';
import TransactionHistoryScreenForm from '../screenForms/TransactionHistoryScreenForm';
import TopBarPage from '../components/TopBarPage';
import TransactionFilterMenu from '../components/TransactionFilterMenu';

type Props = {navigation: any};

const TransactionHistoryScreen = (props: Props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const onSearch = (values: string) => {
    console.log('search', values);
    // Burada arama işlemlerini gerçekleştirebilirsiniz
  };

  const onPressDetails = () => {
    toggleModal(); // Modal açma fonksiyonunu çağırın
  };

  const goBack = () => {
    props.navigation.goBack();
  };
  return (
    <Background imageSet={1}>
      <TopBarPage
        onGoBack={goBack}
        onTobBarItem={{
          bigText: 'İşlem Geçmişi',
          smallText: '',
        }}
      />
      <TransactionHistoryScreenForm
        onPressDetails={onPressDetails}
        onSearch={onSearch}
      />
      <TransactionFilterMenu
        onVisible={isModalVisible}
        onCloseModal={toggleModal}
        onPressButton={() => {
          console.log('deneme');
        }}
      />
    </Background>
  );
};

export default TransactionHistoryScreen;
