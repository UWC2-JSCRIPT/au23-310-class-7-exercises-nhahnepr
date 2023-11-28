describe("Tests for the soccer game", () => {
    describe("tests for the getTotalPoints function", () => {
        it("should return 10 for a wwdlw result", () => {
            const result = getTotalPoints('wwdlw');
            expect(result).toEqual(10);
        });
    });
});

describe("Tests for soccer game", () => {
    describe("tests the orderTeams method", () => {
        it("should return string with team name and point total", () => {
            const teamsNameResults = {name: 'Sounders', results: 'wlww'};
            const teamObject = orderTeams(teamsNameResults);
            expect(teamObject).toBe('Sounders: 9');
        });
    });
});