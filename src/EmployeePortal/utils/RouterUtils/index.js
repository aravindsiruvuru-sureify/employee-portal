import {
  HOME_PAGE_ROUTE,
  PERFORMANCE_REVIEW_PAGE,
} from '../../constants/RouterConstants';

export const gotoHomePage = ({ history }) => {
  history.push(HOME_PAGE_ROUTE);
};

export const navigateToPage = ({ history, route }) => {
  history.push(route);
};

export const gotoPerformanceReviewPage = ({ history, id }) => {
  history.push(`${PERFORMANCE_REVIEW_PAGE}/${id}`);
};

export const gotoPerformanceReviewListPage = ({ history }) => {
  history.push(`${PERFORMANCE_REVIEW_PAGE}`);
};
