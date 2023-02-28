import type { NextPage } from "next";
import QueriesProvider from "src/contexts/queries/QueriesProvider";
import Form from "src/components/Form/Form";
import QuerySelectorList from "src/components/QuerySelectorList/QuerySelectorList";
import Graph from "src/components/Graph/Graph";
import ReactGA4 from 'react-ga4';

const Home: NextPage = () => {
  ReactGA4.initialize('G-J3YZBMRGP8');
  ReactGA4.send('pageview');

  return (
    <QueriesProvider
      initialQueries={
        new Map([
          [
            new Date().getTime(),
            {
              instructors: [],
              quarters: [],
              years: [],
              departments: [],
              courseNumber: [],
              courseCode: [],
              division: ""
            },
          ],
        ])
      }
    >
      <main className="content">
        <Form />
        <QuerySelectorList />
        <div className="mt-7 h-96">
          <Graph />
        </div>
      </main>
    </QueriesProvider>
  );
};

export default Home;
