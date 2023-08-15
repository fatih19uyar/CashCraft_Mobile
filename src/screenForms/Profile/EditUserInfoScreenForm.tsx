import {Image, SafeAreaView, TouchableOpacity, View} from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
import TextView from '../../components/TextView';
import themes from '../../utils/themes';
import PressButton from '../../components/PressButton';
import {
  Field,
  InjectedFormProps,
  formValueSelector,
  reduxForm,
} from 'redux-form';
import colors from '../../utils/colors';
import Input from '../../components/Input';
import {ConnectedProps, connect} from 'react-redux';
import PhoneNumberInputWrapper from '../../components/PhoneNumberInputWrapper';
interface IProps extends ConnectedProps<typeof connector> {
  onPress: (values: any) => void;
}

const EditUserInfoScreenForm: React.FC<
  IProps & InjectedFormProps<{}, IProps>
> = ({handleSubmit, onPress}) => {
  return (
    <>
      <Container>
        <ProfileLogo source={require('../../assets/user.png')} />
        <TextContainer>
          <TextView
            textColor={'black'}
            textSize={30}
            text={'Ezgi Beytaş'}
            textStyle={'normal'}
            textMargin={{top: 0, bottom: 0}}
          />
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: themes.light.spacing.small,
            }}>
            <Image
              style={{width: 30, height: 30, marginRight: 5}}
              source={require('../../assets/camera.png')}
            />
            <TextView
              textColor={'black'}
              textSize={15}
              text={'Fotoğrafı Güncelle'}
              textStyle={'500'}
              textMargin={{top: 0, bottom: 0}}
            />
          </TouchableOpacity>
        </TextContainer>
      </Container>
      <InputContainer>
        <Field
          color={colors.inputTextBackground}
          name="email"
          component={Input}
          label="E-posta Adresi"
          secret={false}
        />
        <View style={{height: '10%'}} />
        <Field
          color={colors.inputTextBackground}
          name="phoneNumber"
          component={PhoneNumberInputWrapper}
          label="Cep Telefonu Numarası"
          secret={false}
        />
        <SafeAreaView
          style={{width: '100%', alignItems: 'center', marginTop: '10%'}}>
          <PressButton
            onPress={handleSubmit(onPress)}
            textColor="white"
            text="Bilgileri Kaydet"
            mode="Button2"
            borderStatus={true}
          />
        </SafeAreaView>
      </InputContainer>
    </>
  );
};

const ProfileLogo = styled.Image`
  width: 110px;
  height: 110px;
`;
const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex: 1;
  margin-top: 10%;
`;
const TextContainer = styled.View`
  align-items: flex-start;
  justify-content: center;
  margin-left: 5%;
`;
const InputContainer = styled.View`
  width: 90%;
  justify-content: center;
  align-items: center;
  margin-bottom: 25%;
  margin-top: 5%;
`;

const selector = formValueSelector('EditUserScreen');
const mapStateToProps = (state: any) => {
  const email = selector(state, 'email');
  const phoneNumber = selector(state, 'phoneNumber');
  return {
    email,
    phoneNumber,
  };
};
const connector = connect(mapStateToProps);
export default connector(
  reduxForm<{}, IProps>({
    form: 'EditUserScreen',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
  })(EditUserInfoScreenForm),
);
