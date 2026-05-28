import { createFileRoute } from "@tanstack/react-router";
import About from "#/components/About.tsx";
import Featured from "#/components/Featured.tsx";
import Hero from "#/components/Hero.tsx";
import HeroImageHolder from "#/components/HeroImageHolder.tsx";
import Nav from "#/components/Nav.tsx";
import NavOverlay from "#/components/NavOverlay.tsx";
import ServiceHeader from "#/components/ServiceHeader.tsx";
import Transition from "#/components/Transition.tsx";
import Services from "#/components/Services.tsx";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
	return (
		<div>
			<Transition />

			<div className="page home-page">
				<Nav />
				<NavOverlay />
				<Hero />
				<HeroImageHolder />
				<About />
				<Featured />
				<ServiceHeader />
				<Services />
			</div>
		</div>
	);
}
