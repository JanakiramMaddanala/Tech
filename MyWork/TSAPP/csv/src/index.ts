import { MatchReader } from './MatchReader';
import { Summary } from './Summary';

const matchReader = MatchReader.fromCSV('football.csv');
const summary = Summary.winsAnalysisWithHTMLReport('Man Untied');

matchReader.load();
summary.buildAndPrintReport(matchReader.matches);
