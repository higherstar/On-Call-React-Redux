import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { getFirstList } from "../Redux/common/actions";
import { Select, Button, Input } from 'antd';
import './App.css';
import 'antd/dist/antd.css';

class App extends Component {
  componentDidMount() {
    this.props.getFirstList();
  }

  state = {
    select1: false,
    select2: false,
    select3: false,
    select4: false,
    select5: false,
    value1: '',
    value2: '',
    value3: '',
    value4: '',
    value5: ''
  }

  onChange1(value) {
    if (value !== '') {
      this.setState({ select1: true, value1: value })
    }
  }

  onChange2(value1) {
    if (value1 !== '') {
      this.setState({ select2: true, value2: value1 })
    }
  }

  onChange3(value1) {
    if (value1 !== '') {
      this.setState({ select3: true, value3: value1 })
    }
  }

  onChange4(value1) {
    if (value1 !== '') {
      this.setState({ select4: true, value4: value1 })
    }
  }

  onChange5(value1) {
    if (value1.target.value !== '') {
      this.setState({ select5: true, value5: value1.target.value })
    }
  }

  onclickSubmit() {

  }

  render() {
    const { isLoadingList, firstList } = this.props;
    if (isLoadingList) {
      return <div>Loading...</div>;
    }
    return (
      <div className="parent_div">
        <div className='group_dropdown'>
          <p>First DropDown</p>
          <Select
            showSearch
            style={{ width: 300 }}
            placeholder="Select a person"
            onChange={(value) => this.onChange1(value)}>
            {
              firstList.map((item, key) => (
                <Select.Option value={item.name} key={key}>{item.name}</Select.Option>
              ))
            }
          </Select>
        </div>
        <div className='group_dropdown'>
          <p>Second DropDown</p>
          <Select
            showSearch
            style={{ width: 300 }}
            placeholder="Select a person"
            disabled={!this.state.select1}
            onChange={(value1) => this.onChange2(value1)}>
            {
              firstList && firstList.map((item, key) => (
                <Select.Option value={item.name + '1'} key={key}>{item.name}</Select.Option>
              ))
            }
          </Select>
        </div>
        <div className='group_dropdown'>
          <p>Second DropDown</p>
          <Select
            showSearch
            style={{ width: 300 }}
            placeholder="Select a person"
            disabled={!this.state.select2}
            onChange={(value1) => this.onChange3(value1)}>
            {
              firstList && firstList.map((item, key) => (
                <Select.Option value={item.name + '1'} key={key}>{item.name}</Select.Option>
              ))
            }
          </Select>
        </div>
        <div className='group_dropdown'>
          <p>Second DropDown</p>
          <Select
            showSearch
            style={{ width: 300 }}
            placeholder="Select a person"
            disabled={!this.state.select3}
            onChange={(value1) => this.onChange4(value1)}>
            {
              firstList && firstList.map((item, key) => (
                <Select.Option value={item.name + '1'} key={key}>{item.name}</Select.Option>
              ))
            }
          </Select>
        </div>
        <div className='group_dropdown'>
          <p>Input to be POSTed with the other data</p>
          <Input placeholder="Enter Some text" disabled={!this.state.select4} style={{ width: 300 }}
                 onChange={(value1) => this.onChange5(value1)} />
        </div>
        <div>
          <Button type="primary" disabled={!this.state.select5} style={{ width: 300 }}
                  onClick={() => this.onclickSubmit}>Submit</Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoadingList: state.common.isLoading,
  firstList: state.common.firstList,
});

const mapDispatchToProps = (dispatch) => ({
  dispatch,
  ...bindActionCreators({
    getFirstList,
  }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);