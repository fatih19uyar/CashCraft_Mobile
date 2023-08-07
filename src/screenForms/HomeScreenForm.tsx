import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import Background from '../components/Background';
import MoneyCard from '../components/MoneyCard';
import TopBar from '../components/TopBar';
import TransactionList from '../components/TransactionList';
import CampaignList from '../components/CampaignList';
import {campaigns} from '../values/values';

type HomeScreenFormProps = {
  onProfile: () => void;
};
const transactions = [
  {name: 'Alışveriş', amount: 150, date: '2023-07-30'},
  {name: 'Fatura Ödeme', amount: 200, date: '2023-07-29'},
  {name: 'Transfer', amount: -50, date: '2023-07-28'},
];

const HomeScreenForm = (props: HomeScreenFormProps) => {
  return (
    <>
      <Background imageSet={1}>
        <TopBar onProfileLogoPress={props.onProfile} />
        <MoneyCard
          amount={'100.00,59'}
          accountName={'idv'}
          accountNumber={11122234}
        />
        <TransactionList />
        <CampaignList campaigns={campaigns} />
      </Background>
    </>
  );
};

export default HomeScreenForm;
