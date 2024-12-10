export type AsPolymorphProp<T extends React.ElementType> = {
  as?: T;
};

export type PolymorphProps<
  T extends React.ElementType,
  ElementProps = {},
> = AsPolymorphProp<T> &
  ElementProps &
  Omit<React.ComponentPropsWithoutRef<T>, keyof AsPolymorphProp<T>>;
