const services = [
	{
		id: 1,
		title: "Community Leader",
		image: "/logo512.png",
	},
	{
		id: 2,
		title: "Educator",
		image: "/logo512.png",
	},
	{
		id: 3,
		title: "Communicator",
		image: "/logo512.png",
	},
	{
		id: 4,
		title: "Community Coordinator",
		image: "/logo512.png",
	},
];

function Services() {
	return (
		<section className="services">
			{services.map((service) => (
				<div
					key={`service-${service.id}`}
					className="service-card"
					id={`service-card-${service.id}`}
				>
					<div className="service-card-inner">
						<div className="service-card-content">
							<h1>{service.title}</h1>
						</div>
						<div className="service-card-img">
							<img src={service.image} alt="" />
						</div>
					</div>
				</div>
			))}
		</section>
	);
}

export default Services;
