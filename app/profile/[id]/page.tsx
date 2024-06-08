import { ProfilePage } from "./components/ProfilePage/ProfilePage";

export default async function Page({ params }: { params: { id: string } }) {
  return <ProfilePage userId={params.id} />;
}
