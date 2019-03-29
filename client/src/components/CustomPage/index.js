import React from "react";
import { Table, THead, TBody, TRow } from "../SearchResults";
import TrafficMonMap from '../Map';
import ContainerDiv from "../ContainerDiv";
import "./style.css"

export default function CustomPage(props) {
  return (
    <ContainerDiv>
      Welcome {props.username}!
      <Table>
        <THead allowDelete />
        <TBody>
          {props.reports.map(report => (
            <TRow
              allowDelete
              key={report.id}
              data-id={report.id}
              type={report.type}
              description={report.description}
              location={report.location}
              city={report.city}
              state={report.state}
            />
          ))}
        </TBody>
      </Table>
      <TrafficMonMap />
    </ContainerDiv>
  )
}

//export default CustomPage;