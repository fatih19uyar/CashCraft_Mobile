import * as React from 'react';

import PressButton from '../../components/PressButton';
import TextView from '../../components/TextView';
import {View} from 'react-native';
import themes from '../../utils/themes';
import {useTranslation} from 'react-i18next';
interface IProps {
  goNext: () => void;
}

const DeleteWalletScreenFormFourth: React.FC<IProps> = ({goNext}) => {
  const {t} = useTranslation();
  return (
    <>
      <TextView
        textColor={'black'}
        textSize={20}
        text={t('DeleteWalletScreenFormFourthHeaderText')}
        textStyle={'500'}
        textMargin={{top: 20, bottom: 50}}
      />
      <View style={{width: '85%'}}>
        <TextView
          textColor={themes.light.colors.textColor2}
          textSize={14}
          text={t('DeleteWalletScreenFormFourthText')}
          textStyle={'300'}
          textMargin={{top: 20, bottom: 50}}
        />
      </View>
      <PressButton
        onPress={goNext}
        textColor="white"
        text={t('Okay')}
        mode="Button2"
        borderStatus={false}
      />
    </>
  );
};
export default DeleteWalletScreenFormFourth;
