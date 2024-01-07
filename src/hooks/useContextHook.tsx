import { useContext } from 'react';

export function useContextHook<T>(context: React.Context<T>) {
    const contextValues = useContext(context);
    const contextVariableName = Object.keys({ context })[0];

    if (!contextValues) {
        throw Error(`Component that uses ${contextVariableName} is not wrapped by a provider.`);
    }

    return contextValues;
}
