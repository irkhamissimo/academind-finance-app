import { calculateInvestmentResults } from "../util/investment";

const Results = ({ input }) => {
  const resultData = calculateInvestmentResults(input);
  console.log(resultData);
  return <p>Results....</p>;
};

export default Results;
