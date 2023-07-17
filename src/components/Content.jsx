import { useState } from "react";

const styles = {
	color: "white",
	padding: "8px",
	fontSize: "30px",
	backgroundColor: "blue",
	marginBottom: "10px",
};
export default function Content() {
	const [area, setArea] = useState("");
	function textPrint(e) {
		e.preventDefault();
		let tarea = e.target.tname.value;
		console.log(tarea);
		setArea(tarea);
	}
	return (
		<>
			<form
				onSubmit={(e) => {
					textPrint(e);
				}}
			>
				<textarea
					name="tname"
					id="tname"
					cols="30"
					rows="10"
				></textarea>
				<br />
				<button type="submit" style={styles}>
					Click Me
				</button>
			</form>
			<p>{area}</p>
		</>
	);
}
