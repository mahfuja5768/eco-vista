import WeatherComponent from "@/app/components/WeatherComponent";
import NoLocationInfo from "@/app/components/NoLocationInfo";
import { getResolvedLatLong } from "@/lib/location-info";

const WeatherPage = async ({
  params: { location },
  searchParams: { latitude, longitude },
}) => {
  const resolve = await getResolvedLatLong(location, latitude, longitude);

  if (resolve?.lat && resolve?.lon) {
    return <WeatherComponent lat={latitude} lon={longitude} />;
  } else {
    <NoLocationInfo />;
  }
};
export default WeatherPage;
