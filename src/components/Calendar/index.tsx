import React from 'react';

import { useTheme } from 'styled-components';
import { Feather } from '@expo/vector-icons';

import {
  Calendar as CustomCalendar,
  CalendarProps,
  LocaleConfig,
} from 'react-native-calendars';

import { ptBR } from './localeConfig';

LocaleConfig.locales['pt-br'] = ptBR;
LocaleConfig.defaultLocale = 'pt-br';

interface MarkedDateProps {
  [date: string]: {
    color: string;
    textColor: string;
    disabled?: boolean;
    disableTouchEvent?: boolean;
  }
}

interface DayPros {
  year: number;
  month: number;
  day: number;
  timestamp: number;
  dateString: string;
}

function Calendar({ markedDates, onDayPress, }: CalendarProps) {
  const theme = useTheme();

  return (
    <CustomCalendar
      renderArrow={( Direction ) =>
        <Feather 
          size={24}
          color={theme.colors.text}
          name={Direction === 'left' ? 'chevron-left' : 'chevron-right'}
        />
      }

      headerStyle={{
        backgroundColor: theme.colors.background_secondary,
        borderBottomColor: theme.colors.text_detail,
        borderBottomWidth: .5,
        paddingBottom: 10,
        marginBottom: 10
      }}

      theme={{
        textDayFontFamily: theme.fonts.primary_400,
        textDayHeaderFontFamily: theme.fonts.primary_500,
        textDayHeaderFontSize: 10,
        textMonthFontFamily: theme.fonts.secondary_600,
        textMonthFontSize: 20,
        monthTextColor: theme.colors.title,
        arrowStyle: {
          marginHorizontal: -15
        }
      }}

      firstDay={1}
      minDate={String(new Date())}
      markingType="period"
      markedDates={markedDates}
      onDayPress={onDayPress}

    />
  );
}

export { MarkedDateProps, DayPros, Calendar };