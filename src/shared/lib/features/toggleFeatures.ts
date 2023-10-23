import { FeatureFlags } from '../../types/featureFlags';
import { getFeatureFlag } from './setGetFetures';

interface TogglefeaturesOptions<T> {
    name: keyof FeatureFlags;
    on: () => T;
    off: () => T;
}

export const toggleFeatures = <T>({
    name,
    on,
    off,
}: TogglefeaturesOptions<T>): T => {
    if (getFeatureFlag(name)) return on();

    return off();
};
