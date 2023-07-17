import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

function App() {
	return (
		<>
			<div>
				<Header title="Let's Explore React" />

				<Content />

				<Footer quote="“When you change your thoughts, remember to also change your world.”" />
			</div>
		</>
	);
}

export default App;
