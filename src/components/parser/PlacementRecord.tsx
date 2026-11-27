import { apiFetch } from "@/src/lib/api";
import PlacementClient from "./PlacementClient";

const getConferenceLists = async () => {
  const { data, error } = await apiFetch(`placement`);

  if (error) throw new Error(error);
  return data;
};

export default async function PlacementRecord({ pageName }: { pageName: string }) {
  const data = await getConferenceLists();

  const batch_groups = data?.placement ?? [];

  return <PlacementClient batchGroups={batch_groups} pageName={pageName} />;
}