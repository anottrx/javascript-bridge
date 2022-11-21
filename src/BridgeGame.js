// InputView, OutputView 를 사용하지 않는다
const { MOVE, MOVE_PICK } = require('./constant/constant');

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  compareOneSideBridge(myMoves, bridge) {
    return myMoves.map((move, index) => {
      if (move === bridge[index] && bridge[index] !== '') return MOVE_PICK.RIGHT;
      if (move !== bridge[index] && bridge[index] === '') return MOVE_PICK.WRONG;
      return ' ';
    });
  }

  compareBridge(myMoves, bridge) {
    const compareBridge = Array.from(Array(2), () => Array(myMoves.length).fill(''));
    myMoves.forEach((_, sideIndex) => {
      compareBridge[sideIndex] = this.compareOneSideBridge(myMoves[sideIndex], bridge[sideIndex]);
    });
    return compareBridge;
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(myMoves, bridge) {
    const currentBridge = Array.from(Array(2), () => Array(myMoves.length).fill(''));
    bridge
      .filter((_, bridgeIndex) => bridgeIndex < myMoves.length)
      .forEach((move, index) => {
        if (move === MOVE.UP) currentBridge[0][index] = MOVE.UP;
        if (move === MOVE.DOWN) currentBridge[1][index] = MOVE.DOWN;
      });
    return currentBridge;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}
}

module.exports = BridgeGame;
