import React, { Component } from 'react';
import './App.css';
import Menu from './components/Menu';
import Row from './components/Row';

function random(max) {
  return Math.round(Math.random() * 1000) % max;
}

const A = [
  "bad", "best", "better", "big", "certain", "clear", "different", "early", "easy", "economic", "federal", "free", "full", "good",
  "great", "hard", "high", "human", "important", "international", "large", "late", "little", "local", "long", "low", "major", "military",
  "national", "new", "old", "only", "other", "political", "possible", "public", "real", "recent", "right", "small", "social", "special",
  "strong", "sure", "true", "white", "whole", "young", "crazy", "helpful", "mushy"
];
const B = [
  "red", "yellow", "blue", "green", "pink", "brown", "purple", "brown", "white", "black", "orange"
];
const C = [
  "area", "book", "business", "case", "child", "company", "country", "day", "eye", "fact", "family", "government", "group", "hand", "home", "job",
  "life", "lot", "man", "money", "month", "mother", "Mr", "night", "number", "part", "people", "place", "point", "problem", "program", "question",
  "right", "room", "school", "state", "story", "student", "study", "system", "thing", "time", "water", "way", "week", "woman", "word", "work", "world", "year"
];



let nextId = 1;

function buildData(count) {
  const data = new Array(count);
  for (let i = 0; i < count; i++) {
    data[i] = {
      id: nextId++,
      label: `${A[random(A.length)]} ${B[random(B.length)]} ${C[random(C.length)]}`,
    };
  }
  return data;
}


class App extends Component {

  state = {
    data:[],
  }

  create1000 = () => {
    this.setState({ data: buildData(1000) });
  }

  create10000 = () => {
    this.setState({ data: buildData(10000) });
  }

  add1000 = () => {
    this.setState({ data: this.state.data.concat(buildData(1000)) });
  }

  add10000 = () => {
    this.setState({ data: this.state.data.concat(buildData(10000)) });
  }

  remove = () => {
    this.setState({ data: [] });
  }


  render() {
    console.log(this.state);
    return (
      <div className="App">
        <Menu
          create1000={this.create1000}
          create10000={this.create10000}
          add1000={this.add1000}
          add10000={this.add10000}
          remove={this.remove}
        />

        <table className="data-table"><tbody>
          {this.state.data.map((item, i) => (
            <Row key={i} item={item} ></Row>
          ))}
        </tbody></table>

      </div>
    );
  }
}



export default App;
