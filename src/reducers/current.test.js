import current from './current';

describe('current reducer', () => {
    it('should handle initial state', () => {
            expect(
                current(undefined, {})
            ).toEqual({
                id: 0,
                active: false
            });
        });
})
