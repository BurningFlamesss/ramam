import { TanStackDevtools } from "@tanstack/react-devtools";
import { createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import aboutCss from "../styles/about.css?url";
import contactCss from "../styles/contact.css?url"
import footerCss from "../styles/footer.css?url";
import heroCss from "../styles/hero.css?url";
import menuCss from "../styles/menu.css?url";
import appCss from "../styles.css?url";

export const Route = createRootRoute({
	head: () => ({
		meta: [
			{
				charSet: "utf-8",
			},
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1",
			},
			{
				title: "Ramam",
			},
		],
		links: [
			{
				rel: "stylesheet",
				href: appCss,
			},
			{
				rel: "stylesheet",
				href: menuCss,
			},
			{
				rel: "stylesheet",
				href: heroCss,
			},
			{
				rel: "stylesheet",
				href: aboutCss,
			},
			{
				rel: "stylesheet",
				href: footerCss,
			},
			{
				rel: "stylesheet",
				href: contactCss,
			},
		],
	}),
	shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<HeadContent />
			</head>
			<body>
				{children}
				<TanStackDevtools
					config={{
						position: "bottom-left",
					}}
					plugins={[
						{
							name: "Tanstack Router",
							render: <TanStackRouterDevtoolsPanel />,
						},
					]}
				/>
				<Scripts />
			</body>
		</html>
	);
}
