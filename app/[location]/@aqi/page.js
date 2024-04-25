import AQIComponent from "@/app/components/AQIComponent";
import NoLocationInfo from "@/app/components/NoLocationInfo";
import { getResolvedLatLong } from "@/lib/location-info";

const AQIPage = async ({
  params: { location },
  searchParams: { latitude, longitude },
}) => {
  const resolve = await getResolvedLatLong(location, latitude, longitude);

  if (resolve?.lat && resolve?.lon) {
    return <AQIComponent lat={latitude} lon={longitude} />;
  } else {
    <NoLocationInfo />;
  }
};

export default AQIPage;
