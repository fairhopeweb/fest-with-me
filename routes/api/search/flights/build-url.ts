import { FlightsSearchQuery } from "../../../../types.ts";
import { KIWI_SEARCH_MAX_STOPOVERS } from "./consts.ts";
import config from "@config";

export const buildUrl = ({
  currency,
  origin,
  destination,
  dateFrom,
  dateTo,
  numPeople,
  returnFrom,
  returnTo,
}: FlightsSearchQuery & { destination: string }) => {
  const oneWay = returnFrom === undefined && returnTo === undefined;

  // TODO: one for city
  return `${config.KIWI_API_SEARCH_HOST}/search?fly_from=${origin}&fly_to=${destination}&date_from=${dateFrom}&date_to=${dateTo}&adults=${numPeople}&curr=${currency}&max_stopovers=${KIWI_SEARCH_MAX_STOPOVERS}&one_for_city=1&location_types=city${
    oneWay ? "" : `&return_from=${returnFrom}&return_to=${returnTo}`
  }`;
};
