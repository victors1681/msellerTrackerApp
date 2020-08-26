import React from 'react';
import {BottomNavigationTab, Divider} from '@ui-kitten/components';
import {SafeAreaLayout, BrandBottomNavigation} from '../../../components';
import {
  ColorPaletteIcon,
  LayoutIcon,
  StarOutlineIcon,
} from '../../../components/icons';

export const HomeBottomNavigation = (props: any): React.ReactElement => {
  const onSelect = (index: number): void => {
    props.navigation.navigate(props.state.routeNames[index]);
  };

  return (
    <SafeAreaLayout insets="bottom">
      <Divider />
      <BrandBottomNavigation
        appearance="noIndicator"
        selectedIndex={props.state.index}
        onSelect={onSelect}>
        <BottomNavigationTab title="Home" icon={LayoutIcon} />
        <BottomNavigationTab title="Orders" icon={StarOutlineIcon} />
        <BottomNavigationTab title="Account" icon={ColorPaletteIcon} />
      </BrandBottomNavigation>
    </SafeAreaLayout>
  );
};
