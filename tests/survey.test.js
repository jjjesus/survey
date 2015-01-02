describe("survey", function() {
    beforeEach(function(){
        spyOn(Survey, 'score').and.callThrough();
    });

    afterEach(function() {
    });

    it("score exists", function() {
        console.log(Survey);
        expect(Survey.score).toBeDefined();
    });
    it("q1 answer", function() {
        Survey.answer('q1', {value:16});
        Survey.score();
        expect(Survey.score).toHaveBeenCalled();
    });
    it("results", function() {
        Survey.results();
    });
});
