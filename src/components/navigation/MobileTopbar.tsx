import { useRouter } from "@tanstack/react-router";
import { SidebarTrigger } from "#/components/ui/sidebar";
import { useIsMobile } from "#/hooks/use-mobile";

const PAGE_NAMES: Record<string, string> = {
	"/": "Home",
	"/about": "About",
};

export function MobileTopbar() {
	const isMobile = useIsMobile();
	const router = useRouter();
	const pathname = router.state.location.pathname;
	const pageName = PAGE_NAMES[pathname] ?? "Quanta";

	if (!isMobile) return null;

	return (
		<header className="sticky top-0 z-50 flex h-14 w-full items-center border-b border-(--sidebar-border) bg-(--sidebar-background) px-4">
			<div className="flex min-w-0 flex-1 items-center gap-2">
				<img src="/logo.png" alt="Quanta logo" className="size-6 object-contain" />
				<span className="truncate font-semibold text-(--sea-ink)">{pageName}</span>
			</div>
			<SidebarTrigger />
		</header>
	);
}
