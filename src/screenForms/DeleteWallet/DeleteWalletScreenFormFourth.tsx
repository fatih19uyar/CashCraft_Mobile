import * as React from 'react';

import PressButton from '../../components/PressButton';
import TextView from '../../components/TextView';
import {View} from 'react-native';
import themes from '../../utils/themes';
interface IProps {
  goNext: () => void;
}

const DeleteWalletScreenFormFourth: React.FC<IProps> = ({goNext}) => (
  <>
    <TextView
      textColor={'black'}
      textSize={20}
      text={'idvlabs Cüzdan hesabını kapattın.'}
      textStyle={'500'}
      textMargin={{top: 20, bottom: 50}}
    />
    <View style={{width: '85%'}}>
      <TextView
        textColor={themes.light.colors.textColor2}
        textSize={14}
        text={
          'idvlabs Cüzdan hesabın kapatılmıştır.' +
          ' Kaydettiğin tüm kart bilgileri sistemden silinmiştir.'
        }
        textStyle={'300'}
        textMargin={{top: 20, bottom: 50}}
      />
    </View>
    <PressButton
      onPress={goNext}
      textColor="white"
      text="Tamam"
      mode="Button2"
      borderStatus={false}
    />
  </>
);
export default DeleteWalletScreenFormFourth;
