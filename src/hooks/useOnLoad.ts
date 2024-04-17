import { DependencyList, EffectCallback, useEffect, useRef } from "react";

export const useOnLoad = (effect: EffectCallback, deps?: DependencyList): void => {
    const firstLoad = useRef(true)

    useEffect(() => {
        if (firstLoad.current) {
            firstLoad.current = false
            return effect()
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps)
}