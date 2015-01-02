describe("survey", function() {
    beforeEach(function(){
        spyOn(Survey, 'score').and.callThrough();
    });

    afterEach(function() {
    });

    it("survey:score exists", function() {
        console.log(Survey);
        expect(Survey.score).toBeDefined();
        Survey.score();
        expect(Survey.score).toHaveBeenCalled();
    });
});
