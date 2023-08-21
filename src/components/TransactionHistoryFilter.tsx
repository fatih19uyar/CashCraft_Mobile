import React, {useState} from 'react';
import {List, Checkbox} from 'react-native-paper';
import themes from '../utils/themes';
import {Option} from '../types/type';

interface ListCheckboxFilterProps {
  options: Option[]; // Option türündeki options prop'unu alıyoruz
  expanded: boolean;
  onAccordionToggle: () => void;
  onOptionPress: (index: number) => void;
  title: string;
}

const ListCheckboxFilter: React.FC<ListCheckboxFilterProps> = ({
  options,
  expanded,
  title,
  onAccordionToggle,
  onOptionPress,
  ...props
}) => {
  return (
    <List.Section>
      <List.Accordion
        title={title}
        style={{
          width: 200,
          borderColor: themes.light.colors.buttonBorderColor,
          borderWidth: 1,
          borderRadius: 20,
          overflow: 'hidden',
        }}
        titleStyle={{color: themes.light.colors.text}}
        expanded={expanded}
        onPress={onAccordionToggle}
        {...props}>
        {options.map((option, index) => (
          <Checkbox.Item
            key={index}
            label={option.label}
            style={{}}
            status={option.status as 'checked' | 'unchecked' | 'indeterminate'}
            onPress={() => onOptionPress(index)}
            color={option.status === 'checked' ? 'black' : undefined}
          />
        ))}
      </List.Accordion>
    </List.Section>
  );
};

export default ListCheckboxFilter;
