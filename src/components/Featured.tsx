const featuredProjects = [
	{
		id: 1,
		title: "Community Works",
	},
	{
		id: 2,
		title: "ABC",
	},
	{
		id: 3,
		title: "ABC",
	},
	{
		id: 4,
		title: "ABC",
	}
];

function Featured() {
	return (
		<section className="featured-work">
			<div className="featured-images"></div>
			<ul className="featured-titles">
				<li className="featured-title-wrapper">
					<h1 className="featured-title">Featured Projects</h1>
				</li>
				{featuredProjects.map((project) => (
					<li key={`projects-${project.id}`} className="featured-title-wrapper">
						<div className="featured-title-img">
							<img src="/logo512.png" alt="" />
						</div>
						<h1 className="featured-title">{project.title}</h1>
					</li>
				))}
			</ul>

            <div className="featured-work-indicator"></div>
            <ul className="featured-work-footer">
                <li className="menu">Projects [67]</li>
                <li className="menu">{"//////////////////"}</li>
                <li className="menu">View All Projects</li>
            </ul>
		</section>
	);
}

export default Featured;
