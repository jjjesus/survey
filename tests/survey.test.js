describe("survey", function() {
    beforeEach(function(){
        spyOn(Survey, 'score').and.callThrough();
    });

    afterEach(function() {
    });

    it("score exists", function() {
        expect(Survey.score).toBeDefined();
    });
    it("q1 answer", function() {
        Survey.answer('q1', {value:16});
    });
    it("score and results", function() {
        Survey.score();
        expect(Survey.score).toHaveBeenCalled();
        Survey.results();
    });
});
