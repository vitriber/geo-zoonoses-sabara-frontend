import React, { useCallback, useMemo } from 'react';
import { DrawerContentComponentProps } from '@react-navigation/drawer';
import { CustomText, Container, IconMenu } from './styles';

interface MenuItemProps {
  routeName?: string;
  icon: string;
  label: string;
  onPress?(): void;
  stack: DrawerContentComponentProps;
}

const MenuItem: React.FC<MenuItemProps> = ({
  routeName,
  icon,
  label,
  onPress,
  stack,
}) => {
  const ActiveRouteName = useMemo(() => {
    if (!routeName) {
      return '';
    }

    return stack.state.routeNames[Number(stack.state.index)];
  }, [stack, routeName]);

  const IsActive = useMemo(() => ActiveRouteName === routeName, [ActiveRouteName, routeName]);

  const navigationToScreen = useCallback(() => {
    if (onPress) {
      onPress();
    } else if (routeName) {
      stack.navigation.navigate(routeName);
    }
  }, [stack, routeName, onPress]);
  return (
    <Container key={routeName} isActive={IsActive} onPress={navigationToScreen}>
      <IconMenu name={icon} size={24} color={IsActive ? '#000' : '#B0E0E6'} />
      <CustomText isActive={IsActive}>{label}</CustomText>
    </Container>
  );
};

export default MenuItem;
