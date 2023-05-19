import React from "react";
import { Element } from "react-scroll";
import Landing from "./components/Landing";
import SideBar from "./components/SideBar";
import styled from "styled-components";

// https://stackoverflow.com/questions/8471781/div-floating-side-by-side-with-overflow
// http://jsfiddle.net/go5ek8rL/5/

const Side = styled.div`
	width: 100%;
	height: 100%;
	position: absolute;
	background-color: black;
	opacity: 0.5;
	z-index: 2;
	pointer-events: none;
`;

const Wrapper = styled.div`
	display: block;
	width: 100vw;
	height: 100vh;
	overflow-x: auto;
	overflow-y: hidden;
	background: #900;
	white-space: nowrap;
`;

const Child = styled.div`
	display: inline-block;
	width: 100vw;
	height: 100vh;
	background: #c00;
	overflow-y: hidden;
`;

type MyProps = {
	// using `interface` is also ok
	message?: string;
};
type MyState = {
	count: number; // like this
};
class HomePage extends React.Component<MyProps, MyState> {
	state: MyState = {
		// optional second annotation for better type inference
		count: 0,
	};
	render() {
		return (
			<div>
				<Side/>
				<Wrapper>
					<Child><Landing/></Child>
					<Child><Landing/></Child>
				</Wrapper>
			</div>
		);
	}
}

export default HomePage;
