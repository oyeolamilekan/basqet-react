import { renderHook } from '@testing-library/react-hooks';
import useBasqet from "./useBasqet";
import { config } from "./fixures";

describe('baseqet', () => {
    it('Check if the returned value is a function', () => {
        const { result } = renderHook(() => useBasqet(config));
        expect(typeof result.current).toBe("function");
    });
})