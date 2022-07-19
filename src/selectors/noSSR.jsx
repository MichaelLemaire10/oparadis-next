import dynamic from "next/dynamic";

export const LeafletWithNoSSR = dynamic(() => import("../components/Leaflet"), { ssr: false });
