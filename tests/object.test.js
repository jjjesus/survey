describe("questions", function() {
    beforeEach(function(){
        spyOn(q1, 'score').and.callThrough();
        spyOn(q2, 'score').and.callThrough();
    });

    afterEach(function() {
    });

    it("q1:score value:21", function() {
        expect(q1.score).toBeDefined();
        q1.score({value:21});
        expect(q1.score).toHaveBeenCalled();
    });

    it("q1:score optionList", function() {
        expect(q1.score).toBeDefined();
        options = [
          { name : "I don't know",                         value : 999  },
          { name : "I don't want to answer this question", value : 777  },
        ];
        q1.score({optionList:options});
        expect(q1.score).toHaveBeenCalled();
    });

    it("q2:score value:22", function() {
        expect(q2.score).toBeDefined();
        q2.score({value:22});
        expect(q2.score).toHaveBeenCalled();
    });
});
