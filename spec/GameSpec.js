"use strict";

describe('Game', function(){

  var game;

  beforeEach(function(){
    game = new Game()
  })

  it('adds a new frame to the game', function(){
    game.roll(2,2)
    expect(game.frames.length).toEqual(1)
  });

  it('returns a specific frame', function(){
    game.roll(2,2)
    expect(game.getRoll(1).rolls).toEqual([2,2])
  });

  describe('total score', function(){
    it('calculates the total game score', function(){
      for (var i = 0; i < 10; i++) {
        game.roll(2,2)
      }
        expect(game.totalScore()).toEqual(40)
    });
    it('calculates the total game score with a trailing strike', function(){
      for (var i = 0; i < 8; i++) {
        game.roll(2,2)
      }
        game.roll(10)
        expect(game.totalScore()).toEqual(42)
    });

    it('calculates the total game score with a spare', function(){
      for (var i = 0; i < 8; i++) {
        game.roll(2,2)
      }
        game.roll(5,5)
        game.roll(2,2)
        expect(game.totalScore()).toEqual(48)
    });

    it('calculates the total game score with a strike', function(){
      for (var i = 0; i < 8; i++) {
        game.roll(2,2)
      }
        game.roll(10)
        game.roll(2,2)
        expect(game.totalScore()).toEqual(50)
    });

  });

  describe('frame score', function(){
    it('calculates a frame\'s score', function(){
        game.roll(2,2)
        game.roll(3,4)
        expect(game.frameScore(2)).toEqual(7)
    });
    it('calculates a frame\'s score with trailing strike', function(){
        game.roll(2,2)
        game.roll(10)
        expect(game.frameScore(2)).toEqual(10)
    });
    it('calculates a frame\'s score with strike', function(){
        game.roll(2,2)
        game.roll(10)
        game.roll(2,2)
        expect(game.frameScore(2)).toEqual(14)
    });

  });

  describe('game outcome', function(){
    it('shows a gutter game', function(){
      for (var i = 0; i < 10; i++) {
        game.roll(0,0)
      }
        expect(game.gameOutcome()).toEqual("Gutter game :( !")
    });
    xit('shows a perfect game', function(){
      for (var i = 0; i < 9; i++) {
        game.roll(10)
      }
        game.roll(10,10,10)
        expect(game.gameOutcome()).toEqual("Perfect game! You go glen coco")
    });

    it('shows total score otherwise', function(){
      for (var i = 0; i < 10; i++) {
        game.roll(5,2)
      }
        expect(game.gameOutcome()).toEqual(70)
    });

  });

  describe("final frame", function(){
    it("final frame has three rolls if strike or spare", function(){
      for (var i = 0; i < 9; i++) {
        game.roll(2,2)
      }
      game.roll(10,2,2)
      expect(game.frames[9].rolls.length).toEqual(3)
    });
  });
});
