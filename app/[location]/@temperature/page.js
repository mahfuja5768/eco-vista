import TemperatureComponent from "@/app/components/TemperatureComponent";
import NoLocationInfo from "@/app/components/NoLocationInfo";
import { getResolvedLatLong } from "@/lib/location-info";

const TemperaturePage = async ({
  params: { location },
  searchParams: { latitude, longitude },
}) => {
  const resolve = await getResolvedLatLong(location, latitude, longitude);

  if (resolve?.lat && resolve?.lon) {
    return <TemperatureComponent lat={latitude} lon={longitude} />;
  } else {
    <NoLocationInfo />;
  }
};

export default TemperaturePage;