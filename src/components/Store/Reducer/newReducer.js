const initialState = {
  investedAmount: "",
  daiyIncome: "",
  totalIncome: "",
  totalPayouts: "",
  incomeWithdraw: "",
  matchingBounus: "",
  levelone: "",
  levelTwo: "",
  levelthree: "",
  levelfour: "",
  levelfive: "",
  undrawn: "",
  overAllInvested: "",
  totalParticipants: "",
  totalDividends: "",
};

function newReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case "TOTAL_PARTICIPANTS":
      return {
        ...state,
        totalParticipants: payload,
      };

    case "TOTAL_DIVIDENDS":
      return {
        ...state,
        totalDividends: payload,
      };

    case "OVERALL_INVESTED":
      return {
        ...state,
        investedAmount: payload,
      };
    case "UN_WITHDRAWN":
      return {
        ...state,
        undrawn: payload,
      };

    case "LEVEL_ONE":
      return {
        ...state,
        levelone: payload,
      };

    case "LEVEL_TWO":
      return {
        ...state,
        levelTwo: payload,
      };
    case "LEVEL_THREE":
      return {
        ...state,
        levelthree: payload,
      };
    case "LEVEL_FOUR":
      return {
        ...state,
        levelfour: payload,
      };
    case "LEVEL_FIVE":
      return {
        ...state,
        levelfive: payload,
      };
    case "INVESTED_AMOUNT":
      return {
        ...state,
        investedAmount: payload,
      };

    case "DAILY_INCOME":
      return {
        ...state,
        daiyIncome: payload,
      };

    case "MAX_PAYOUT":
      return {
        ...state,
        totalIncome: payload,
      };
    case "TOTAL_PAYOUTS":
      return {
        ...state,
        totalPayouts: payload,
      };
    case "INCOME_WITHDRAW":
      return {
        ...state,
        incomeWithdraw: payload,
      };

    case "MATCHING_BONUS":
      return {
        ...state,
        matchingBounus: payload,
      };
    default:
      return { ...state };
  }
}

export default newReducer;
