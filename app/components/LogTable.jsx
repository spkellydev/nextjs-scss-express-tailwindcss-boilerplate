import React, { Component } from 'react';
import ReactTable from 'react-table';
import matchSorter from 'match-sorter';
import "../scss/react-table.scss";

export default class LogAnalyzer extends Component {
  constructor(props) {
    super(props)
  }

  state = this.props

  render() {
    const data = []
    let logs = this.state.logs.filter(log => {
      return log.method === 'POST'
    })
    logs.map(log => {
      data.push(log)
    })

    const columns = [
      {
        Header: 'IP',
        accessor: 'ip',
        Aggregated: row => {
          return (
            <span className="ip-row">{row.value}</span>
          )
        }
      }, {
        Header: 'Method',
        accessor: 'method'
      }, {
        Header: 'Page',
        accessor: 'page'
      }, {
        Header: 'Status Code',
        accessor: 'statusCode'
      }, {
        Header: 'Time',
        accessor: 'time'
      }, {
        Header: 'URL',
        accessor: 'url',
        id: 'url',
        Aggregated: row => {
          return (
            <span>{row.value}</span>
          )
        },
        filterMethod: (filter, rows) =>
          matchSorter(rows, filter.value, { keys: ["url"] }),
        filterAll: true
      }, {
        Header: 'User Agent',
        accessor: 'userAgent'
      }
    ]

    return (
      <ReactTable filterable data={data} columns={columns} defaultFilterMethod={(filter, row) => String(row[filter.d]) === filter.value} />
    )
  }
}