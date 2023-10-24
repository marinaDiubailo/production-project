import { Flex, FlexProps } from '../Flex/Flex';

export type VStackProps = Omit<FlexProps, 'direction'>;

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */

export const VStack = (props: VStackProps) => {
    const { align = 'start' } = props;
    return (
        <Flex
            direction="column"
            align={align}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...props}
        />
    );
};
