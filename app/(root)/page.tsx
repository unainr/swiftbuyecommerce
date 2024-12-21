import BannerDesign from "@/components/BannerDesign";
import NewArrival from "@/components/NewArrival";
import { CarouselPlugin } from "@/components/Scarosual";
import SProductCard from "@/components/SProductCard";
import { FeaturedCategories } from "@/components/subcomponents/FeaturedCategories";
import { InstagramFeed } from "@/components/subcomponents/InstagramFeed";
import { LatestBlogPosts } from "@/components/subcomponents/LatestBlogPosts";
import { InfiniteMovingCardsDemo } from "@/components/subcomponents/SubReview";
import { TrustBadges } from "@/components/subcomponents/TrustBadges";
export default function Home() {
	return (
		<main>
			<CarouselPlugin />
			<NewArrival />
			<FeaturedCategories />
			<SProductCard />
			<BannerDesign />
			<InfiniteMovingCardsDemo />
			<LatestBlogPosts/>
			<TrustBadges/>
			<InstagramFeed/>
		</main>
	);
}
