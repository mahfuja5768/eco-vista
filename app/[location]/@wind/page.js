import NoLocationInfo from "@/app/components/NoLocationInfo";
import WindComponent from "@/app/components/WindComponent";
import { getResolvedLatLong } from "@/lib/location-info";

const WindPage =async ({
  params: { location },
  searchParams: { latitude, longitude },
}) => {
  const resolve = await getResolvedLatLong(location, latitude, longitude);

  if (resolve?.lat && resolve?.lon) {
    return <WindComponent lat={latitude} lon={longitude} />;
  } else {
    <NoLocationInfo />;
  }
};

export default WindPage;