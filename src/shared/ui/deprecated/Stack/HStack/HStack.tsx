import { Flex, FlexProps } from '../Flex/Flex';

export type HStackProps = Omit<FlexProps, 'direction'>;

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */

export const HStack = (props: HStackProps) => {
    return (
        <Flex
            direction="row"
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...props}
        />
    );
};
