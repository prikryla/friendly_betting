import WorkInProgress from "@/app/components/WorkInProgress/WorkInProgress";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Můj profil | Friendly Betting",
};
const MyProfile = () => {
  return (
    <main>
      <WorkInProgress />
      <h1>Nastavení profilu</h1>
    </main>
  );
};

export default MyProfile;
