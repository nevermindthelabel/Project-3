import React from 'react';
import { SearchTable, THead, TBody, TRow } from '../SearchResults';
import TrafficMonMap from '../Map';
import ContainerDiv from '../ContainerDiv';
import './style.css';

export default function CustomPage(props) {
  console.log(props);
  return (
    <ContainerDiv>
      <h1 className="text-center">
        Traffic<span className="text-danger">Mon</span>!
      </h1>
      <h1 className="text-center username">Welcome {props.username}!</h1>
      {props.reports.length > 0 ? (
        <h3 className="text-center">You have {props.reports.length} active reports</h3>
      ) : (
        <h3 className="text-center">No Reports</h3>
      )}
      {props.reports.length ? (
        <SearchTable responsive>
          <THead allowDelete />
          <TBody>
            {props.reports.map(report => (
              <TRow
                allowDelete
                key={report.id}
                type={report.type}
                description={report.description}
                location={report.location}
                city={report.city}
                state={report.state}
              />
            ))}
          </TBody>
        </SearchTable>
      ) : (
        <h3 className="text-center text-secondary">
          To create a report, go to the New Report page.
        </h3>
      )}
      <TrafficMonMap reports={props.reports} />
    </ContainerDiv>
  );
}
