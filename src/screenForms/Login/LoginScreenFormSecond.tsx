import React from 'react';
import {useForm, Controller} from 'react-hook-form';
import PasswordInput from '../../components/PasswordInput';
import PressButton from '../../components/PressButton';
import TextView from '../../components/TextView';
import {SafeAreaView} from 'react-native';
import MyView from '../../components/MyView';
import {useTranslation} from 'react-i18next';

interface IProps {
  goToNextForm: (values: {email: string; password: string}) => void;
  onForgotPassword: () => void;
  passWordClear: boolean;
}

const PasswordInputField = ({control, passWordClear}: any) => {
  return (
    <Controller
      name="password"
      control={control}
      render={({field, fieldState}) => (
        <PasswordInput
          shouldReset={passWordClear}
          length={6}
          onChangePassword={field.onChange}
          meta={fieldState}
        />
      )}
    />
  );
};

const LoginScreenFormSecond: React.FC<IProps> = ({
  goToNextForm,
  onForgotPassword,
  passWordClear,
}) => {
  const {t} = useTranslation();
  const {control, handleSubmit} = useForm({
    mode: 'onBlur',
  });

  const onSubmit = (data: any) => {
    console.log('fa', data);
    goToNextForm(data);
  };

  return (
    <>
      <MyView>
        <TextView
          textColor={'black'}
          textSize={39}
          text={t('LoginScreenFormSecondHeaderText')}
          textStyle={'500'}
          textMargin={{top: 20, bottom: 50}}
        />
        <PasswordInputField control={control} passWordClear={passWordClear} />
        <PressButton
          onPress={handleSubmit(onSubmit)}
          textColor="white"
          text={t('Next')}
          mode="Button2"
          borderStatus={false}
        />
      </MyView>
      <SafeAreaView style={{alignItems: 'center'}}>
        <PressButton
          onPress={onForgotPassword}
          textColor="black"
          text={t('ForgotPassword')}
          mode="TextButton"
          borderStatus={true}
        />
      </SafeAreaView>
    </>
  );
};

export default LoginScreenFormSecond;
