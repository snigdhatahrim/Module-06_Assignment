export default function Header(props) {
	return (
		<>
			<div>
				<h1
					style={{
						marginTop: "0px",
						marginBottom: "50px",
						color: "red",
					}}
				>
					Title:{props.title}
				</h1>
			</div>
		</>
	);
}
