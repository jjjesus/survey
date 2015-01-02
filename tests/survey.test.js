describe("survey", function() {
    beforeEach(function(){
        spyOn(survey, 'score').and.callThrough();
    });

    afterEach(function() {
    });

    it("survey:score exists", function() {
        console.log(survey);
        expect(survey.score).toBeDefined();
        survey.score();
        expect(survey.score).toHaveBeenCalled();
    });
});
