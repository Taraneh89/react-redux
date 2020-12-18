import React from "react";
import {connect} from 'react-redux';
import {buyMob} from "../Redux";

function Mob(props) {
  return (
    <div>
      <h1>number of mobiles = {props.numOfMobs}</h1>
      <button onClick={props.buyMob}>Buy</button>
    </div>
  );
}
const mapStateToProps = state => {
  return {
    numOfMobs: state.numOfMobs
  };
};

const mapDispatchToProps = dispatch => {
    return{
        buyMob:()=> dispatch(buyMob())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Mob);
