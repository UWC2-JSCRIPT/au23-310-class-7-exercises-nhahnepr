describe("Blackjack game test", () => {
    it("should calculate the score of a hand", () => {
        const hand = [
            {displayVal: 'six', val: 6, suit: 'hearts'},
            {displayVal: 'seven', val: 7, suit: 'hearts'}
        ]
        
        const result = calcPoints(hand);
        expect(result.total).toEqual(13);
        expect(result.isSoft).toEqual(false);

        
    });
});

describe("Testing rapid fire", () => {
    it("should calculate the score and give a false for no ace in hand", () => {
        const hand = [
            {displayVal: 'three', val: 3, suit: 'hearts'},
            {displayVal: 'two', val: 2, suit: 'hearts'}
        ]
        const result = calcPoints(hand);
        expect(result.total).toEqual(5);
        expect(result.isSoft).toEqual(false);
    });
    it("should calculate the score and give a true for one ace in hand", () => {
        const hand = [
            {displayVal: 'Ace', val: 11, suit: 'hearts'},
            {displayVal: 'two', val: 2, suit: 'hearts'}
        ]
        const result = calcPoints(hand);
        expect(result.total).toEqual(13);
        expect(result.isSoft).toEqual(true);
    });
    it("should calculate the score and give a false for no ace in hand, but not soft", () => {
        const hand = [
            {displayVal: 'Ace', val: 1, suit: 'hearts'},
            {displayVal: 'seven', val: 7, suit: 'hearts'},
            {displayVal: 'Jack', val: 10, suit: 'hearts'}
        ]
        const result = calcPoints(hand);
        expect(result.total).toEqual(18);
        expect(result.isSoft).toEqual(false);
    });
    it("should calculate the score and give a true for multiple aces and soft", () => {
        const hand = [
            {displayVal: 'Ace', val: 11, suit: 'hearts'},
            {displayVal: 'Ace', val: 1, suit: 'clubs'},
            {displayVal: 'seven', val: 7, suit: 'hearts'}
        ]
        const result = calcPoints(hand);
        expect(result.total).toEqual(19);
        expect(result.isSoft).toEqual(true);
    });
    it("should calculate the score and give a false for multiple aces, but not soft", () => {
        const hand = [
            {displayVal: 'Ace', val: 1, suit: 'hearts'},
            {displayVal: 'Ace', val: 1, suit: 'hearts'},
            {displayVal: 'Jack', val: 10, suit: 'hearts'},
            {displayVal: 'eight', val: 8, suit: 'hearts'}
        ]
        const result = calcPoints(hand);
        expect(result.total).toEqual(20);
        expect(result.isSoft).toEqual(false);
    });
});


