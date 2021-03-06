import React, { Component } from "react";
import ReportingPanel from "./ReportingPanel";
import MatchHistory from "./MatchHistory";
import Division from "./Division";
import "./StandingsPage.css";

class StandingsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortByPoints: true
    };
  }

  render() {
    const divData = this.props.divisionData;
    const pages = [divData.slice(0, 5), divData.slice(5, 10)];
    return (
      <div className="Standings-container">
        <div className="Left-panel">
          {pages.map((divisionDataSlice, index) => (
            <div id={"Page-" + (index + 1)}>
              {divisionDataSlice.map((division, i) => (
                <Division
                  key={division.name}
                  data={division}
                  sortByPoints={this.state.sortByPoints}
                  isAdmin={this.props.isAdmin}
                  setSortByPoints={val => {
                    this.setState({
                      sortByPoints: val
                    });
                  }}
                  isEditingPenaltyPoints={this.props.isEditingPenaltyPoints}
                  refreshFunction={this.props.refreshFunction}
                />
              ))}
            </div>
          ))}
        </div>
        <div className="Right-panel">
          <div className="Reporting-panel-card">
            <ReportingPanel
              refreshFunction={this.props.refreshFunction}
              isRestreamer={this.props.isRestreamer}
              discordIdentity={this.props.discordIdentity}
            />
          </div>

          <div className="Match-history-card">
            <MatchHistory
              matchList={this.props.matchList}
              refreshFunction={this.props.refreshFunction}
              isAdmin={this.props.isAdmin}
              discordIdentity={this.props.discordIdentity}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default StandingsPage;
