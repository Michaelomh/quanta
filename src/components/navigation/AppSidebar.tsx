import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarRail,
} from "@/components/ui/sidebar";
import ThemeToggle from "../ThemeToggle";

const data = {
	versions: ["1.0.1", "1.1.0-alpha", "2.0.0-beta1"],
	navMain: [
		{
			title: "Running",
			items: [
				{
					title: "Pace Calculator",
					url: "#",
				},
				{
					title: "Intervals",
					url: "#",
				},
			],
		},
	],
};

export function AppSidebar() {
	return (
		<Sidebar>
			<SidebarHeader>
				<div className="flex h-12 w-full items-center gap-2 px-2">
					<div className="flex min-w-0 flex-1 items-center gap-2">
						<a
							href="/"
							className="flex items-center gap-2 font-bold tracking-[2px] hover:text-(--lagoon-deep)! text-xl"
						>
							<img
								src="/logo.png"
								alt="Quanta logo"
								className="size-7 object-contain"
							/>
							QUANTA
						</a>
					</div>
					<div className="shrink-0">
						<ThemeToggle />
					</div>
				</div>
			</SidebarHeader>
			<SidebarContent>
				{/* We create a SidebarGroup for each parent. */}
				{data.navMain.map((item) => (
					<SidebarGroup key={item.title}>
						<SidebarGroupLabel>{item.title}</SidebarGroupLabel>
						<SidebarGroupContent>
							<SidebarMenu>
								{item.items.map((item) => (
									<SidebarMenuItem key={item.title}>
										<SidebarMenuButton asChild>
											<a href={item.url}>{item.title}</a>
										</SidebarMenuButton>
									</SidebarMenuItem>
								))}
							</SidebarMenu>
						</SidebarGroupContent>
					</SidebarGroup>
				))}
			</SidebarContent>
		</Sidebar>
	);
}
